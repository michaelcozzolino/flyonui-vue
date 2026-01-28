<template>
    <FoHeading level="6"
               class="mb-1"
    >
        Switch to your preferred languages:
    </FoHeading>

    <FoListGroup class="w-96">
        <FoListGroupItem v-for="language in languages"
                         :key="language.name"
        >
            <FoSwitch v-model="language.isPreferred"
                      :label="language.name"
            />
        </FoListGroupItem>
    </FoListGroup>
</template>

<script setup lang="ts">
import { FoHeading, FoListGroup, FoListGroupItem, FoSwitch } from 'flyonui-vue';
import { ref }                                               from 'vue';

const languages = ref<{ name: string; isPreferred: boolean }[]>([
    { name: 'Javascript', isPreferred: false },
    { name: 'Python', isPreferred: true },
    { name: 'Java', isPreferred: false },
]);
</script>
