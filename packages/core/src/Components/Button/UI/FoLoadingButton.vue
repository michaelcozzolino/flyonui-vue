<template>
    <FoButton v-bind="props"
              :icon="loadingIcon"
    >
        <template v-if="text !== undefined">
            {{ isLoading ? text.loading : text.notLoading }}
        </template>
    </FoButton>
</template>

<script setup lang="ts">
import type { ButtonProps }        from '@/Components/Button/Types/Button';
import type { HorizontalIconProp } from '@/Components/Icon/Types/Icon';
import type { LoadingIconProps }   from '@/Shared/Types/Loading';
import FoButton                    from '@/Components/Button/UI/FoButton.vue';
import FoLoadingIcon               from '@/Components/Icon/UI/FoLoadingIcon.vue';
import { computed, h }             from 'vue';

interface Props extends Omit<ButtonProps, 'icon'> {
    isLoading?: boolean;
    icon?: {
        position?: 'left' | 'right';
    } & LoadingIconProps;
    text?: {
        loading:    string;
        notLoading: string;
    };
}

const props = withDefaults(defineProps<Props>(), {
    isActive:  undefined,
    isLoading: true,
    icon() {
        return {
            position:  'left',
            animation: 'spinner',
        };
    },
});

const loadingIcon = computed((): HorizontalIconProp => {
    const icon = props.isLoading ? h(FoLoadingIcon, { animation: props.icon.animation }) : '';

    if (props.icon.position === undefined) {
        return { left: icon };
    }

    return {
        left:  props.icon.position === 'left' ? icon : undefined,
        right: props.icon.position === 'right' ? icon : undefined,
    };
});
</script>
