<template>
    <!--    todo: make heading component -->
    <h6 class="text-base text-base-content mb-1">
        Select your skills:
    </h6>

    <FoListGroup>
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
import { FoCheckbox, FoListGroup, FoListGroupItem } from 'flyonui-vue';
import { ref }                                      from 'vue';

const skills = ref<{ id: number; name: string; isAcquired: boolean }[]>([
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
