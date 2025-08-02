<template>
    <FoTable is-responsive>
        <template #head>
            <FoTableRow>
                <FoTableHeader>#</FoTableHeader>

                <FoTableHeader v-for="column in columns"
                               :key="column"
                >
                    Table heading
                </FoTableHeader>
            </FoTableRow>
        </template>

        <template #body>
            <FoTableRow v-for="row in rows"
                        :key="row"
            >
                <FoTableColumn>{{ row }}</FoTableColumn>
                <FoTableColumn v-for="column in columns"
                               :key="column"
                >
                    Table cell
                </FoTableColumn>
            </FoTableRow>
        </template>
    </FoTable>
</template>

<script setup lang="ts">
import { FoTable, FoTableColumn, FoTableHeader, FoTableRow } from 'flyonui-vue';

const rows    = 3;
const columns = 9;
</script>
