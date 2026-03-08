<template>
    <FoTable v-if="api.length"
             :id="`${componentName}-slots`"
             class="vp-raw rounded-lg my-4"
             is-bordered
             is-responsive
             is-striped="rows"
             data-test="slots-api"
    >
        <template #head>
            <FoTableRow class="text-center text-primary normal-case italic bg-base-300/20 ">
                <FoTableHeader :colspan="2">
                    {{ componentName }}
                </FoTableHeader>
            </FoTableRow>

            <FoTableRow class="text-center text-primary">
                <FoTableHeader>Name</FoTableHeader>
                <FoTableHeader>Description</FoTableHeader>
            </FoTableRow>
        </template>

        <template #body>
            <FoTableRow v-for="slot in api"
                        :key="slot.name"
                        class="text-center"
            >
                <FoTableColumn class="font-mono font-semibold text-base-content">
                    <LinkableApiName :name="slot.name"
                                     :declarations="slot.declarations"
                    />
                </FoTableColumn>

                <FoTableColumn class="italic text-base-content/70">
                    {{ slot.description ?? '-' }}
                </FoTableColumn>
            </FoTableRow>
        </template>
    </FoTable>
</template>

<script setup lang="ts">
import type { Api }      from '@/Api/Types/Api.ts';
import type { SlotMeta } from 'vue-component-meta';

import LinkableApiName                                       from '@/Api/UI/LinkableApiName.vue';
import { FoTable, FoTableColumn, FoTableHeader, FoTableRow } from 'flyonui-vue';

defineProps<Api<SlotMeta>>();
</script>
