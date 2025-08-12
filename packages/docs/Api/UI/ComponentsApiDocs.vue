<template>
    <ComponentsApi v-for="componentName in componentApiDocsNames"
                   :key="componentName"
                   :type="section"
                   :component-name="componentName"
    />
</template>

<script setup lang="ts">
import type { ApiType }       from '@/Api/Types/Api.ts';
import type { ComponentName } from 'flyonui-vue';
import ComponentsApi          from '@/Api/UI/ComponentsApi.vue';
import { computed }           from 'vue';

interface Props {
    componentNames: ComponentName | ComponentName[];
    section:        ApiType;
}

const props = defineProps<Props>();

const componentApiDocsNames = computed((): ComponentName[] => {
    return Array.isArray(props.componentNames) ? props.componentNames : [props.componentNames];
});
</script>
