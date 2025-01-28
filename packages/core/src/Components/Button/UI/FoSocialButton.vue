<template>
    <FoButton :class="colorClass"
              v-bind="props"
              :icon="icon"
    >
        {{ ['circle', 'square'].includes(shape) ? '' : social }}
    </FoButton>
</template>

<script setup lang="ts">
import type { ButtonProps }        from '@/Components/Button/Types/Button';
import type { HorizontalIconProp } from '@/Components/Icon/Types/Icon';
import type { Preset }             from '@/Shared/Types/Variants';
import FoButton                    from '@/Components/Button/UI/FoButton.vue';
import { computed }                from 'vue';

type Social = 'Facebook' | 'Twitter' | 'Linkedin' | 'Github';

interface Props extends Omit<ButtonProps, 'preset'> {
    social: Social;
    preset: Extract<Preset, 'default' | 'soft' | 'outline'>;
}

const props = withDefaults(defineProps<Props>(), {
    preset:   'default',
    isActive: undefined,
    shape:    'default',
});

const icon = computed((): HorizontalIconProp => {
    const icons: Record<Social, string> = {
        Facebook: 'tabler:brand-facebook',
        Twitter:  'tabler:brand-x',
        Linkedin: 'tabler:brand-linkedin',
        Github:   'tabler:brand-github',
    };

    return {
        left: icons[props.social],
    };
});

const colorClass = computed((): string => {
    const colorClasses: Record<Extract<Preset, 'default' | 'soft' | 'outline'>, Record<Social, string>> = {
        default: {
            Facebook: 'border-[#1877F2] bg-[#1877F2] text-white shadow-[#1877F2]/30 hover:border-[#1877F2] hover:bg-[#1877F2]/90',
            Twitter:  'border-[#1da1f2] bg-[#1da1f2] text-white shadow-[#1da1f2]/30 hover:border-[#1da1f2] hover:bg-[#1da1f2]/90',
            Linkedin: 'border-[#0a66c2] bg-[#0a66c2] text-white shadow-[#0a66c2]/30 hover:border-[#0a66c2] hover:bg-[#0a66c2]/90',
            Github:   'border-[#2b3137] bg-[#2b3137] text-white shadow-[#2b3137]/30 hover:border-[#2b3137] hover:bg-[#2b3137]/90',
        },
        soft: {
            Facebook: 'bg-[#1877F2]/15 text-[#1877F2] hover:bg-[#1877F2]/25',
            Twitter:  'bg-[#1da1f2]/15 text-[#1da1f2] hover:bg-[#1da1f2]/25',
            Linkedin: 'bg-[#0a66c2]/15 text-[#0a66c2] hover:bg-[#0a66c2]/25',
            Github:   'bg-[#2b3137]/15 text-[#2b3137] hover:bg-[#2b3137]/25',
        },
        outline: {
            Facebook: 'text-[#1877F2] hover:border-[#1877F2] hover:bg-[#1877F2]/10',
            Twitter:  'text-[#1da1f2] hover:border-[#1da1f2] hover:bg-[#1da1f2]/10',
            Linkedin: 'text-[#0a66c2] hover:border-[#0a66c2] hover:bg-[#0a66c2]/10',
            Github:   'text-[#2b3137] hover:border-[#2b3137] hover:bg-[#2b3137]/10',
        },
    };

    return colorClasses[props.preset][props.social];
});
</script>
