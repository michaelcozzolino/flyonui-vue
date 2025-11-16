<template>
    <FoSwitch v-model="isDefault1Checked"
              helper-text="helper-text"
              color="primary"
              :icon="{ left: 'tabler:check', right: 'tabler:x' }"
    />

    <FoSwitch v-model="isDefault2Checked"
              color="primary"
              :icon="{ left: 'tabler:check', right: 'tabler:x' }"
    />

    <FoSwitch v-model="isOutline1Checked"
              color="primary"
              preset="outline"
              :icon="{ left: 'tabler:check', right: 'tabler:x' }"
    />

    <FoSwitch v-model="isOutline2Checked"
              color="primary"
              preset="outline"
              :icon="{ left: 'tabler:check', right: 'tabler:x' }"
    />
</template>

<script setup lang="ts">
import { FoSwitch } from 'flyonui-vue';
import { ref }      from 'vue';

const isDefault1Checked = ref<boolean>(false);
const isDefault2Checked = ref<boolean>(true);
const isOutline1Checked = ref<boolean>(false);
const isOutline2Checked = ref<boolean>(true);
</script>
