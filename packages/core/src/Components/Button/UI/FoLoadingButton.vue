<template>
    <FoButton v-bind="reactiveOmit(props, 'icon')">
        <template v-if="loadingIcon.left !== undefined"
                  #prepend
        >
            <FoLoading v-bind="loadingIcon.left" />
        </template>

        <template v-if="loadingIcon.right !== undefined"
                  #append
        >
            <FoLoading v-bind="loadingIcon.right" />
        </template>

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
import type { LoadingProps }       from '@/Components/Loading/Types/Loading';
import type { HorizontalPosition } from '@/Shared/Utils';
import type { VNode }              from 'vue';
import { FoButton }                from '@/Components/Button';
import { FoLoading }               from '@/Components/Loading';
import { useFlyonUIVueAppConfig }  from '@/Shared/UseFlyonUIVueAppConfig';
import { reactiveOmit }            from '@vueuse/core';
import { computed }                from 'vue';

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

const loadingIcon = computed((): Partial<Record<HorizontalPosition, LoadingProps>> => {
    const { position, ...loadingProps } = props.icon;

    const icon = props.isLoading ? loadingProps : undefined;

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
