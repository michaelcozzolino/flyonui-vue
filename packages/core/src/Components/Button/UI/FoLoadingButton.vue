<template>
    <FoButton v-bind="props"
              :icon="loadingIcon"
    >
        <slot v-if="$slots.loading && isLoading"
              name="loading"
        />

        <slot v-if="$slots.notLoading && isLoading === false"
              name="notLoading"
        />
    </FoButton>
</template>

<script setup lang="ts">
import type { ButtonProps }        from '@/Components/Button/Types/Button';
import type { PositionableIcon }   from '@/Components/Icon/Types/Icon';
import type { LoadingProps }       from '@/Components/Loading/Types/Loading';
import type { HorizontalPosition } from '@/Shared/Utils';
import type { VNode }              from 'vue';
import { FoButton }                from '@/Components/Button';
import { FoLoading }               from '@/Components/Loading';
import { useFlyonUIVueAppConfig }  from '@/Shared/UseFlyonUIVueAppConfig';
import { computed, h  }            from 'vue';

interface Props extends Omit<ButtonProps, 'icon'> {
    isLoading?: boolean;
    icon?: {
        position?: HorizontalPosition;
    } & LoadingProps;
    text?: {
        loading:    string;
        notLoading: string;
    };
}

const props = withDefaults(defineProps<Props>(), {
    isLoading: true,
    icon:      () => {
        return { animation: 'spinner' };
    },
});

defineSlots<{
    loading?:    () => VNode[];
    notLoading?: () => VNode[];
}>();

const config = useFlyonUIVueAppConfig();

const loadingIcon = computed((): PositionableIcon => {
    const { position, ...loadingProps } = props.icon;

    const icon = props.isLoading ? h(FoLoading, loadingProps) : '';

    if (position === undefined) {
        const [_position, globalPosition] = [
            config.value.components?.FoButton?.horizontalPosition?.icon,
            config.value.global.horizontalPosition.icon,
        ];

        return { [_position ?? globalPosition]: icon };
    }

    return {
        left:  position === 'left' ? icon : undefined,
        right: position === 'right' ? icon : undefined,
    };
});
</script>
