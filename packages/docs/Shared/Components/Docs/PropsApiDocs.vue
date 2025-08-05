<template>
    <FoTable v-if="propsApi !== undefined"
             class="vp-raw rounded-lg my-4"
             is-bordered
             is-responsive
             is-striped="rows"
    >
        <template #head>
            <FoTableRow class="text-center text-primary">
                <FoTableHeader>Name</FoTableHeader>
                <FoTableHeader>Description</FoTableHeader>
                <FoTableHeader>Type</FoTableHeader>
                <FoTableHeader>Values</FoTableHeader>
                <FoTableHeader>Default</FoTableHeader>
            </FoTableRow>
        </template>

        <template #body>
            <FoTableRow v-for="prop in propsApi"
                        :key="prop.name"
                        class="text-center"
            >
                <FoTableColumn class="font-mono font-semibold text-accent">
                    {{ prop.name }}
                </FoTableColumn>

                <FoTableColumn class="italic text-info">
                    {{ prop.description ?? '-' }}
                </FoTableColumn>

                <FoTableColumn class="font-mono font-semibold text-warning">
                    {{ prop.type?.name ?? '-' }}
                </FoTableColumn>

                <FoTableColumn class="text-wrap! font-mono font-semibold text-success">
                    {{ isParamTag(prop.tags?.values[0]) ? prop.tags.values[0].description : '-' }}
                </FoTableColumn>

                <FoTableColumn class="font-mono font-semibold text-success">
                    {{ prop.defaultValue?.value ?? '-' }}
                </FoTableColumn>
            </FoTableRow>
        </template>
    </FoTable>
</template>

<script setup lang="ts">
import type { ComponentName }                                    from 'flyonui-vue';
import type { BlockTag, ComponentDoc, ParamTag, PropDescriptor } from 'vue-docgen-api';
import { useArrayFind }                                          from '@vueuse/core';

import { ComponentsApi, FoTable, FoTableColumn, FoTableHeader, FoTableRow } from 'flyonui-vue';
import { computed }                                                         from 'vue';

interface Props {
    componentName: ComponentName;
}

const props = defineProps<Props>();

const componentDocs = useArrayFind(
    (): ComponentDoc[] => ComponentsApi as ComponentDoc[],
    (component): boolean => component.displayName === props.componentName,
);

const propsApi = computed((): PropDescriptor[] | undefined => componentDocs.value?.props);

function isParamTag(tag: BlockTag | undefined): tag is ParamTag {
    return tag !== undefined && 'title' in tag && 'description' in tag;
}
</script>
