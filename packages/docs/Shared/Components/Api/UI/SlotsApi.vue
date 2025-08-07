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
            </FoTableRow>
        </template>

        <template #body>
            <FoTableRow v-for="slot in api"
                        :key="slot.name"
                        class="text-center"
            >
                <FoTableColumn class="font-mono font-semibold text-accent">
                    {{ slot.name }}
                </FoTableColumn>

                <FoTableColumn class="italic text-info">
                    {{ slot.description ?? '-' }}
                </FoTableColumn>
            </FoTableRow>
        </template>
    </FoTable>
</template>

<script setup lang="ts">
import type { Api } from '@/Shared/Components/Api/Types/Api.ts';

import type { SlotDescriptor }                               from 'vue-docgen-api';
import { FoTable, FoTableColumn, FoTableHeader, FoTableRow } from 'flyonui-vue';

defineProps<Api<SlotDescriptor>>();
</script>
