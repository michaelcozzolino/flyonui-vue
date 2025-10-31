<template>
    <Transition appear
                enter-active-class="transition-opacity"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="transition-opacity"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
                :duration="{ enter: 300, leave: 200 }"
    >
        <div v-if="isOpen"
             ref="backdrop"
             class="grid p-4 fixed inset-0 z-1000 h-full w-full"
             :class="[
                 isDisabledBackdrop === false && backdropColorClass,
                 placementClass,
                 scrollingType === 'viewport' && 'overflow-x-hidden overflow-y-auto',
             ]"
             role="dialog"
             tabindex="-1"
             @keyup.esc="isStaticBackdrop ? isOpen = true : closeOnEscape && (isOpen = false)"
        >
            <Transition appear
                        enter-active-class="transition-transform transition-opacity ease-out"
                        :enter-from-class="transition === 'slide-up' ? 'opacity-0 translate-y-6' : 'opacity-0 -translate-y-6'"
                        enter-to-class="opacity-100 translate-y-0"
                        leave-active-class="transition-transform transition-opacity ease-in"
                        leave-from-class="opacity-100 translate-y-0"
                        :leave-to-class="transition === 'slide-up' ? 'opacity-0 translate-y-6' : 'opacity-0 -translate-y-6'"
                        :duration="{ enter: 300, leave: 300 }"
            >
                <div v-if="isOpen"
                     class="modal-dialog"
                     :class="[isFullscreen && 'max-w-none', sizeClass]"
                >
                    <div ref="content"
                         class="modal-content"
                         :class="[
                             isFullscreen && 'h-full max-h-none justify-between',
                             isTransparent && 'text-white bg-transparent shadow-none',
                             scrollingType === 'viewport' && 'max-h-none',
                         ]"
                    >
                        <div v-if="$slots.header"
                             class="modal-header"
                             :class="classes?.header"
                        >
                            <slot name="header" />

                            <FoButton class="absolute end-3 top-3"
                                      icon="tabler:x"
                                      preset="text"
                                      shape="circle"
                                      size="small"
                                      aria-label="Close"
                                      @click.prevent="isOpen = false"
                            />
                        </div>

                        <div ref="body"
                             class="modal-body"
                             :class="[
                                 classes?.body,
                                 isFullscreen && 'grow',
                             ]"
                        >
                            <slot name="body">
                                <slot />
                            </slot>
                        </div>

                        <div v-if="$slots.footer"
                             class="modal-footer"
                             :class="classes?.footer"
                        >
                            <slot name="footer" />
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import type { ComponentName }                                    from '@/Lib';
import type { ModalPlacement, ModalProps }                       from '@/UI/Overlays';
import { useFlyonUIVueAppConfig }                                from '@/Lib';
import { useColor }                                              from '@/Lib/UseColor/Internal';
import { useSize }                                               from '@/Lib/UseSize/Internal';
import { FoButton }                                              from '@/UI/Components';
import { isModalTransparentInjectionKey }                        from '@/UI/Overlays/Modal/Internal';
import { onClickOutside, useFocus, useScrollLock }               from '@vueuse/core';
import { computed, provide, useTemplateRef, watch, watchEffect } from 'vue';

const props = withDefaults(defineProps<ModalProps>(), {
    closeOnEscape: true,
    isFullscreen:  false,
    isTransparent: false,
    transition:    'slide-up',
    placement:     'top-center',
    scrollingType: 'modal-body',
});

const emit = defineEmits<{
    (e: 'close'): void;
}>();

const isOpen = defineModel<boolean>({ required: true });

const componentName: ComponentName = 'FoModal';
const { config }                   = useFlyonUIVueAppConfig();

provide(isModalTransparentInjectionKey, computed(() => props.isTransparent));

const backdropElement     = useTemplateRef<HTMLElement>('backdrop');
const modalContentElement = useTemplateRef<HTMLElement>('content');
const modalBody           = useTemplateRef<HTMLElement>('body');

// This is needed to allow esc to be used properly to close the modal
const { focused } = useFocus(backdropElement, { initialValue: true });

const isDocumentBodyScrollLocked = useScrollLock(document.body);
const isModalBodyScrollLocked    = useScrollLock(modalBody);

const isStaticBackdrop   = computed((): boolean => props.backdrop?.type === 'static');
const isDisabledBackdrop = computed((): boolean => props.backdrop?.type === 'disabled');

onClickOutside(modalContentElement, () => {
    if (isStaticBackdrop.value) {
        return;
    }

    isOpen.value = false;
});

const [
    backdropColorClass,
    sizeClass,
] = [
    useColor(config, componentName, () => props.backdrop?.color),
    useSize(config, componentName, () => props.size),
];

const placementClass = computed(() => {
    const placements: Record<ModalPlacement, string> = {
        'top-start':     'modal-top-start',
        'top-center':    '',
        'top-end':       'modal-top-end',
        'middle-start':  'modal-middle-start',
        'middle-center': 'modal-middle',
        'middle-end':    'modal-middle-end',
        'bottom-start':  'modal-bottom-start',
        'bottom-center': 'modal-bottom',
        'bottom-end':    'modal-bottom-end',
    };

    return placements[props.placement];
});

watch(isOpen, () => {
    if (isOpen.value === false) {
        isDocumentBodyScrollLocked.value = false;
        isModalBodyScrollLocked.value = false;
        emit('close');
    }

    focused.value = isOpen.value;
});

watchEffect(() => {
    if (isOpen.value === false) {
        return;
    }

    if (props.scrollingType === 'modal-body' || props.scrollingType === 'viewport') {
        isDocumentBodyScrollLocked.value = true;
    } else if (props.scrollingType === 'document-body') {
        isModalBodyScrollLocked.value = true;
    }
});
</script>
