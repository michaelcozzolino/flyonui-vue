<template>
    <FoTable class="vp-raw rounded-lg my-4"
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
            <FoTableRow v-for="prop in api"
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
import type { Api } from '@/Shared/Components/Api/Types/Api.ts';

import type { BlockTag, ParamTag, PropDescriptor }           from 'vue-docgen-api';
import { FoTable, FoTableColumn, FoTableHeader, FoTableRow } from 'flyonui-vue';

defineProps<Api<PropDescriptor>>();

function isParamTag(tag: BlockTag | undefined): tag is ParamTag {
    return tag !== undefined && 'title' in tag && 'description' in tag;
}
</script>
