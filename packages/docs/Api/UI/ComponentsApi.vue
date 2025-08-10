<template>
    <PropsApi v-if="type === 'props' && componentApi?.props !== undefined"
              :api="componentApi.props"
              :component-name="componentName"
    />

    <SlotsApi v-else-if="type === 'slots' && componentApi?.slots !== undefined"
              :api="componentApi.slots"
              :component-name="componentName"
    />
</template>

<script setup lang="ts">
import type { ApiProps, ApiType } from '@/Api/Types/Api.ts';
import type { ComponentName }     from 'flyonui-vue';
import type { ComponentMeta }     from 'vue-component-meta';
import componentsApi              from '@/Api/Lib/ComponentsApi.json';
import PropsApi                   from '@/Api/UI/PropsApi.vue';
import SlotsApi                   from '@/Api/UI/SlotsApi.vue';
import { computed }               from 'vue';

interface Props extends ApiProps {
    type: ApiType;
}

const props = defineProps<Props>();

const api = componentsApi as unknown as Record<ComponentName, ComponentMeta>;

const componentApi = computed((): ComponentMeta | undefined => api[props.componentName] ?? undefined);
</script>
