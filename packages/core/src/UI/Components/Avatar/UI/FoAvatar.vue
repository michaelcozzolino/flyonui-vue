<template>
    <div class="avatar"
         :class="[
             indicatorClass,
             'src' in avatar === false && 'avatar-placeholder',
         ]"
    >
        <div :class="[presetAndColorClass, sizeClass, shapeClass]">
            <template v-if="'src' in avatar === false">
                <FoIcon v-if="'icon' in avatar"
                        :icon="avatar.icon"
                        :size="size"
                />

                <span v-else
                      class="uppercase"
                      :class="textClass"
                >
                    {{ avatar.text }}
                </span>
            </template>

            <img v-else
                 :src="avatar.src"
                 :alt="avatar.alt"
            >
        </div>

        <span v-if="indicator === undefined && slots.indicator"
              class="bg-base-100 absolute bottom-0 end-0 flex translate-x-2 translate-y-2 transform items-center rounded-full p-1"
        >
            <slot name="indicator" />
        </span>
    </div>
</template>

<script setup lang="ts">
import type { Color, ComponentName, Size } from '@/Lib';
import type {
    AvatarIndicatorPlacement,
    AvatarIndicatorStatus,
    AvatarPlaceholderPreset,
    AvatarProps,
}                                                  from '@/UI/Components/Avatar';
import type { Slot }                  from 'vue';
import { useFlyonUIVueAppConfig }     from '@/Lib';
import {
    useFlyonUIVueAppConfigProperty,
}                                                  from '@/Lib/UseFlyonUIVueAppConfig/Internal';
import { useShape } from '@/Lib/UseShape/Internal';
import { useSize }  from '@/Lib/UseSize/Internal';
import { FoIcon }   from '@/UI/Customization';
import { computed } from 'vue';

const props = defineProps<AvatarProps>();

const slots = defineSlots<{
    indicator?: Slot;
}>();

const componentName: ComponentName = 'FoAvatar';
const { config }                   = useFlyonUIVueAppConfig();

const [
    sizeClass,
    shapeClass,
] = [
    useSize(config, componentName, () => props.size),
    useShape(config, componentName, () => props.shape),
];

const presetAndColorClass = computed((): string => {
    const classes: Record<AvatarPlaceholderPreset, Record<Color, string>> = {
        solid: {
            neutral:   'bg-neutral text-neutral-content',
            primary:   'bg-primary text-primary-content',
            secondary: 'bg-secondary text-secondary-content',
            accent:    'bg-accent text-accent-content',
            info:      'bg-info text-info-content',
            success:   'bg-success text-success-content',
            warning:   'bg-warning text-warning-content',
            error:     'bg-error text-error-content',
        },
        outline: {
            neutral:   'border border-neutral text-neutral',
            primary:   'border border-primary text-primary',
            secondary: 'border border-secondary text-secondary',
            accent:    'border border-accent text-accent',
            info:      'border border-info text-info',
            success:   'border border-success text-success',
            warning:   'border border-warning text-warning',
            error:     'border border-error text-error',
        },
        soft: {
            neutral:   'bg-neutral/10 text-neutral',
            primary:   'bg-primary/10 text-primary',
            secondary: 'bg-secondary/10 text-secondary',
            accent:    'bg-accent/10 text-accent',
            info:      'bg-info/10 text-info',
            success:   'bg-success/10 text-success',
            warning:   'bg-warning/10 text-warning',
            error:     'bg-error/10 text-error',
        },
    };

    const defaultPreset = 'src' in props.avatar ? null : props.avatar.preset ?? 'solid';

    if (defaultPreset === null) {
        return '';
    }

    const defaultColor = 'src' in props.avatar ? null : props.avatar.color ?? 'neutral';

    if (defaultColor === null) {
        return '';
    }

    return classes[defaultPreset][defaultColor];
});

const textClass = computed((): string => {
    const classes: Record<Size, string> = {
        extraSmall: 'size-xs',
        small:      'size-sm',
        medium:     'size-md',
        large:      'size-lg',
        extraLarge: 'size-xl',
    };

    return props.size === undefined
        ? useFlyonUIVueAppConfigProperty(config, componentName, 'size', props.size).value
        : classes[props.size];
});

type IndicatorClass = `avatar-${AvatarIndicatorStatus}-${AvatarIndicatorPlacement}` | '';

const indicatorClass = computed((): IndicatorClass => {
    if (props.indicator === undefined) {
        return '';
    }

    const indicators: Record<`${AvatarIndicatorStatus}-${AvatarIndicatorPlacement}`, IndicatorClass> = {
        'away-bottom':    'avatar-away-bottom',
        'away-top':       'avatar-away-top',
        'busy-bottom':    'avatar-busy-bottom',
        'busy-top':       'avatar-busy-top',
        'online-bottom':  'avatar-online-bottom',
        'online-top':     'avatar-online-top',
        'offline-bottom': 'avatar-offline-bottom',
        'offline-top':    'avatar-offline-top',
    };

    return indicators[`${props.indicator.status}-${props.indicator.placement}`];
});
</script>
