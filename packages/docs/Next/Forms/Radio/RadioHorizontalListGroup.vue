<template>
    <FoHeading class="mb-1"
               level="6"
    >
        Select you favourite language:
    </FoHeading>

    <FoListGroup class="w-96"
                 orientation="horizontal"
    >
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
        label: 'Python',
        value: 'python',
    },
    {
        label: 'JavaScript',
        value: 'javascript',
    },
    {
        label: 'Java',
        value: 'java',
    },
]);

const selectedValue = ref<string>('javascript');
</script>
