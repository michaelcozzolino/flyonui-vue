<template>
    <FoHeading level="6"
               class="mb-1"
    >
        Select your skills:
    </FoHeading>

    <FoListGroup class="w-96">
        <FoListGroupItem v-for="item in skills"
                         :key="item.id"
        >
            <FoCheckbox v-model="item.isAcquired"
                        :label="item.name"
            />
        </FoListGroupItem>
    </FoListGroup>
</template>

<script setup lang="ts">
import type { Identifiable }                                   from 'flyonui-vue';
import { FoCheckbox, FoHeading, FoListGroup, FoListGroupItem } from 'flyonui-vue';
import { ref }                                                 from 'vue';

const skills = ref<(Identifiable & { name: string; isAcquired: boolean })[]>([
    {
        id:         1,
        name:       'Web Development',
        isAcquired: false,
    },
    {
        id:         2,
        name:       'Data Analysis',
        isAcquired: false,
    },
    {
        id:         3,
        name:       'Graphic Design',
        isAcquired: false,
    },
]);
</script>
