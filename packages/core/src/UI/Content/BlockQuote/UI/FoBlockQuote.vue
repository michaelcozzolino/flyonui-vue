<template>
    <!-- todo: add custom sizes, but this might bring breaking changes for the icon size -->
    <blockquote class="relative p-4"
                :class="alignmentClass"
    >
        <FoIcon class="text-base-300/20 absolute -top-3 rotate-180 rtl:rotate-0"
                :class="iconAlignmentClass"
                icon="tabler:quote"
                :size="{ width: 64, height: 64 }"
        />

        <div class="relative z-1">
            <p class="text-base-content text-lg">
                <em>
                    <slot>
                        {{ useRequiredSlotMessage(componentName) }}
                    </slot>
                </em>
            </p>
        </div>

        <footer v-if="author !== undefined"
                class="mt-4"
                :class="typeof author !== 'string' && 'flex items-center'"
        >
            <div v-if="typeof author === 'string'"
                 class="text-base-content/50 text-base font-semibold"
            >
                {{ author }}
            </div>

            <template v-else>
                <!-- todo: replace with FoAvatar when implemented -->
                <div v-if="author.avatar !== undefined"
                     class="avatar"
                >
                    <div class="size-10 rounded-full">
                        <img :src="author.avatar"
                             :alt="author.name"
                        >
                    </div>
                </div>

                <div class="ms-4">
                    <div class="text-base-content text-base font-semibold">
                        {{ author.name }}
                    </div>

                    <div v-if="author.title !== undefined"
                         class="text-base-content/50 text-xs"
                    >
                        {{ author.title }}
                    </div>
                </div>
            </template>
        </footer>
    </blockquote>
</template>

<script setup lang="ts">
import type { ComponentName }           from '@/Lib';
import type { Alignment }               from '@/Lib/UseAlignment';
import type { WithRequiredDefaultSlot } from '@/Types';
import type { BlockQuoteProps }         from '@/UI/Content/BlockQuote/Types';
import { useAlignment }                 from '@/Lib/UseAlignment/Internal';
import { useRequiredSlotMessage }       from '@/Lib/Utils/Internal';
import { FoIcon }                       from '@/UI/Customization';
import { computed }                     from 'vue';

const props = withDefaults(defineProps<BlockQuoteProps>(), {
    alignment: 'left',
});

defineSlots<WithRequiredDefaultSlot>();

const componentName: ComponentName = 'FoBlockQuote';

const alignmentClass = useAlignment(componentName, (): Alignment => props.alignment);

const iconAlignmentClass = computed((): string => {
    const alignments: Record<Alignment, string> = {
        left:   '-start-3',
        center: 'start-2',
        right:  'start-6',
    };

    return alignments[props.alignment];
});
</script>
