<template>
    <PropsApi v-if="type === 'props' && api?.props !== undefined"
              :api="api.props"
              :component-name="componentName"
    />

    <SlotsApi v-else-if="type === 'slots' && api?.slots !== undefined"
              :api="api.slots"
              :component-name="componentName"
    />
</template>

<script setup lang="ts">
import type { ApiProps }     from '@/Shared/Components/Api/Types/Api.ts';
import type { ComponentDoc } from 'vue-docgen-api';
import PropsApi              from '@/Shared/Components/Api/UI/PropsApi.vue';
import SlotsApi              from '@/Shared/Components/Api/UI/SlotsApi.vue';
import { useArrayFind }      from '@vueuse/core';
import { componentsApi }     from 'flyonui-vue';

interface Props extends ApiProps {
    type: 'props' | 'slots';
}

const props = defineProps<Props>();

const api = useArrayFind(
    (): ComponentDoc[] => componentsApi as ComponentDoc[],
    (component: ComponentDoc): boolean => component.displayName === props.componentName,
);
</script>
