<template>
    <FoButton :class="colorClass"
              v-bind="props"
              :icon="socialNetwork.icon"
    >
        <slot>
            {{ isTextAllowedForShape(config, 'FoButton', shape) ? socialNetwork.name : '' }}
        </slot>
    </FoButton>
</template>

<script setup lang="ts">
import type { Preset }                    from '@/Lib';
import type { WithDefaultSlot }           from '@/Types';
import type { Social, SocialButtonProps } from '@/UI/Components';
import { useFlyonUIVueAppConfig }         from '@/Lib';
import { isTextAllowedForShape }          from '@/Lib/UseShape/Internal';
import { FoButton }                       from '@/UI/Components';
import { computed }                       from 'vue';

const props = withDefaults(defineProps<SocialButtonProps>(), {
    preset: 'solid',
});

defineSlots<WithDefaultSlot>();

const { config } = useFlyonUIVueAppConfig();

interface SocialNetwork {
    name: string;
    icon: string;
}

const socialNetwork = computed((): SocialNetwork => {
    const socialNetworks: Record<Social, SocialNetwork> = {
        facebook: { name: 'Facebook', icon: 'tabler:brand-facebook' },
        github:   { name: 'GitHub', icon: 'tabler:brand-github' },
        linkedin: { name: 'LinkedIn', icon: 'tabler:brand-linkedin' },
        x:        { name: 'X', icon: 'tabler:brand-x' },
    };

    return socialNetworks[props.social];
});

const colorClass = computed((): string => {
    const colorClasses: Record<Extract<Preset, 'solid' | 'soft' | 'outline'>, Record<Social, string>> = {
        solid: {
            facebook: 'border-[#1877F2] bg-[#1877F2] text-white shadow-[#1877F2]/30 hover:border-[#1877F2] hover:bg-[#1877F2]/90',
            x:        'border-[#1da1f2] bg-[#1da1f2] text-white shadow-[#1da1f2]/30 hover:border-[#1da1f2] hover:bg-[#1da1f2]/90',
            linkedin: 'border-[#0a66c2] bg-[#0a66c2] text-white shadow-[#0a66c2]/30 hover:border-[#0a66c2] hover:bg-[#0a66c2]/90',
            github:   'border-[#2b3137] bg-[#2b3137] text-white shadow-[#2b3137]/30 hover:border-[#2b3137] hover:bg-[#2b3137]/90',
        },
        soft: {
            facebook: 'bg-[#1877F2]/15 text-[#1877F2] hover:bg-[#1877F2]/25',
            x:        'bg-[#1da1f2]/15 text-[#1da1f2] hover:bg-[#1da1f2]/25',
            linkedin: 'bg-[#0a66c2]/15 text-[#0a66c2] hover:bg-[#0a66c2]/25',
            github:   'bg-[#2b3137]/15 text-[#2b3137] hover:bg-[#2b3137]/25',
        },
        outline: {
            facebook: 'text-[#1877F2] hover:border-[#1877F2] hover:bg-[#1877F2]/10',
            x:        'text-[#1da1f2] hover:border-[#1da1f2] hover:bg-[#1da1f2]/10',
            linkedin: 'text-[#0a66c2] hover:border-[#0a66c2] hover:bg-[#0a66c2]/10',
            github:   'text-[#2b3137] hover:border-[#2b3137] hover:bg-[#2b3137]/10',
        },
    };

    return colorClasses[props.preset][props.social];
});
</script>
