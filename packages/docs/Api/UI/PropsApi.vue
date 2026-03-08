<template>
    <FoTable v-if="propsApi.length"
             :id="`${componentName}-props`"
             class="vp-raw rounded-lg my-4"
             is-bordered
             is-responsive
             is-striped="rows"
             data-test="props-api"
    >
        <template #head>
            <FoTableRow class="text-center text-primary normal-case italic bg-base-300/20">
                <FoTableHeader :colspan="5">
                    {{ componentName }}
                </FoTableHeader>
            </FoTableRow>

            <FoTableRow class="text-center text-primary">
                <FoTableHeader>Name</FoTableHeader>
                <FoTableHeader>Description</FoTableHeader>
                <FoTableHeader>Type</FoTableHeader>
                <FoTableHeader>Values</FoTableHeader>
                <FoTableHeader>Required</FoTableHeader>
            </FoTableRow>
        </template>

        <template #body>
            <FoTableRow v-for="prop in propsApi"
                        :key="prop.name"
                        class="text-center"
            >
                <FoTableColumn class="font-mono font-semibold text-base-content">
                    <FoLink v-if="prop.declarations[0] !== undefined"
                            :to="prop.declarations[0].file"
                            underline-effect="hover-animated"
                    >
                        {{ prop.name }}
                    </FoLink>

                    <template v-else>
                        {{ prop.name }}
                    </template>
                </FoTableColumn>

                <FoTableColumn class="italic text-base-content/70 whitespace-break-spaces!">
                    {{ prop.description ?? '-' }}
                </FoTableColumn>

                <FoTableColumn class="font-mono font-semibold text-base-content/80 whitespace-break-spaces!">
                    {{ prop.type }}
                </FoTableColumn>

                <FoTableColumn class="text-wrap! font-mono font-semibold text-base-content/80">
                    {{ getValues(prop.schema) }}
                </FoTableColumn>

                <FoTableColumn class="font-mono font-semibold text-error uppercase">
                    {{ prop.required }}
                </FoTableColumn>
            </FoTableRow>
        </template>
    </FoTable>
</template>

<script setup lang="ts">
import type { Api } from '@/Api/Types/Api.ts';

import type { PropertyMeta, PropertyMetaSchema }                     from 'vue-component-meta';
import { useArrayFilter }                                            from '@vueuse/core';
import { FoLink, FoTable, FoTableColumn, FoTableHeader, FoTableRow } from 'flyonui-vue';

const props = defineProps<Api<PropertyMeta>>();

const internalPropNames = ['key', 'ref', 'ref_for', 'ref_key', 'class', 'style'];

const propsApi = useArrayFilter(
    () => props.api,
    (prop: PropertyMeta) => internalPropNames.includes(prop.name) === false
        && prop.tags.find((tag: PropertyMeta['tags'][number]) => tag.name === 'internal') === undefined,
);

function getValues(schema: PropertyMetaSchema): string {
    const noValue          = '-';
    const values: string[] = [];
    const exclusions       = ['string', 'number', 'symbol', 'undefined', 'true', 'false', 'null'];

    if (typeof schema !== 'string' && schema.kind === 'enum' && Array.isArray(schema.schema)) {
        for (const value of schema.schema) {
            if (typeof value === 'string') {
                if (exclusions.includes(value) === false && value.includes('<') === false) {
                    values.push(value);
                }
            } else {
                return noValue;
            }
        }
    }

    return values.length ? values.join(' | ') : noValue;
}
</script>
