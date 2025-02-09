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
import type { ButtonProps }      from '@/Components/Button/Types/Button';
import type { PositionableIcon } from '@/Components/Icon/Types/Icon';
import type { LoadingProps }     from '@/Components/Loading/Types/Loading';
import { FoButton }              from '@/Components/Button';
import { FoLoading }             from '@/Components/Loading';
import { computed, h }           from 'vue';

interface Props extends Omit<ButtonProps, 'icon'> {
    isLoading?: boolean;
    icon?: {
        position?: 'left' | 'right';
    } & LoadingProps;
    text?: {
        loading:    string;
        notLoading: string;
    };
}

const props = withDefaults(defineProps<Props>(), {
    isLoading: true,
    icon() {
        return {
            position:  'left',
            animation: 'spinner',
        };
    },
});

const loadingIcon = computed((): PositionableIcon => {
    const { position, ...loadingProps } = props.icon;

    const icon = props.isLoading ? h(FoLoading, loadingProps) : '';

    if (position === undefined) {
        return { left: icon };
    }

    return {
        left:  position === 'left' ? icon : undefined,
        right: position === 'right' ? icon : undefined,
    };
});
</script>
