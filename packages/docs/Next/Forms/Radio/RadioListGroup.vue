<template>
    <FoHeading class="mb-1"
               level="6"
    >
        Select your favourite language:
    </FoHeading>

    <FoListGroup class="w-96">
        <FoListGroupItem v-for="language in languages"
                         :key="language.value"
        >
            <FoRadio v-model="selectedValue"
                     color="primary"
                     :label="language.label"
                     :value="language.value"
            />
        </FoListGroupItem>
    </FoListGroup>
</template>

<script setup lang="ts">
import { FoHeading, FoListGroup, FoListGroupItem, FoRadio } from 'flyonui-vue';
import { ref }                                              from 'vue';

const languages = ref<{ label: string; value: string }[]>([
    {
        label: 'C++',
        value: 'c++',
    },
    {
        label: 'Ruby',
        value: 'ruby',
    },
    {
        label: 'Swift',
        value: 'swift',
    },
]);

const selectedValue = ref<string>('ruby');
</script>
