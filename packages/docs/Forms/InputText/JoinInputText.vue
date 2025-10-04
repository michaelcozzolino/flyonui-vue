<template>
    <FoJoin>
        <FoInputText v-model="search"
                     placeholder="Search"
        />

        <FoButton preset="outline"
                  color="secondary"
        >
            Search
        </FoButton>
    </FoJoin>

    <FoJoin>
        <FoInputText v-model="search"
                     placeholder="Search"
                     shape="pilled"
        />

        <FoButton preset="outline"
                  color="secondary"
                  shape="pilled"
        >
            Search
        </FoButton>
    </FoJoin>

    <FoJoin>
        <FoInputText v-model="search"
                     placeholder="Search"
        />

        <FoButton preset="outline"
                  color="secondary"
                  shape="pilled"
        >
            Search
        </FoButton>
    </FoJoin>

    <FoJoin>
        <FoInputText v-model="search"
                     placeholder="Search"
                     shape="pilled"
        />

        <FoButton preset="outline"
                  color="secondary"
        >
            Search
        </FoButton>
    </FoJoin>

    <FoJoin>
        <FoButton preset="outline"
                  color="secondary"
        >
            Search
        </FoButton>

        <FoInputText v-model="search"
                     placeholder="Search"
        />
    </FoJoin>

    <FoJoin>
        <FoButton preset="outline"
                  color="secondary"
                  shape="pilled"
        >
            Search
        </FoButton>

        <FoInputText v-model="search"
                     placeholder="Search"
                     shape="pilled"
        />
    </FoJoin>

    <FoJoin>
        <FoButton preset="outline"
                  color="secondary"
        >
            Search
        </FoButton>

        <FoInputText v-model="search"
                     placeholder="Search"
                     shape="pilled"
        />
    </FoJoin>

    <FoJoin>
        <FoButton preset="outline"
                  color="secondary"
                  shape="pilled"
        >
            Search
        </FoButton>

        <FoInputText v-model="search"
                     placeholder="Search"
        />
    </FoJoin>

    <FoJoin>
        <FoInputText v-model="search"
                     placeholder="Search"
                     :icon="{ left: 'tabler:user' }"
        />

        <FoButton preset="outline"
                  color="secondary"
        >
            Search
        </FoButton>
    </FoJoin>

    <!--    todo: fix style in join for select -->
    <FoJoin>
        <FoInputText v-model="search"
                     placeholder="Search"
        />

        <FoSelect v-model="selectedFilter"
                  :label="{ text: 'Filter', type: 'floating' }"
                  :options="filters"
        />
    </FoJoin>
</template>

<script setup lang="ts">
import type { SelectOption }                                            from 'flyonui-vue';
import {  FoButton, FoInputText, FoJoin, FoSelect, useSelectedOption  } from 'flyonui-vue';
import { ref }                                                          from 'vue';

const search = ref<string>('');

const filters = ref<SelectOption[]>([
    { id: 1, text: 'Sci-fi' },
    { id: 2, text: 'Drama' },
    { id: 3, text: 'Actions' },
]);

const selectedFilter = useSelectedOption<number, SelectOption>(filters, 1);
</script>
