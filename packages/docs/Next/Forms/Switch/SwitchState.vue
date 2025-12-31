<template>
    <FoSwitch v-model="disabledChecked"
              disabled
    />

    <FoSwitch v-model="disabledUnchecked"
              disabled
    />

    <FoSwitch v-model="isIndeterminateChecked"
              color="primary"
              label="Indeterminate"
              is-indeterminate
    />
</template>

<script setup lang="ts">
import { FoSwitch } from 'flyonui-vue';
import { ref }      from 'vue';

const disabledChecked        = ref<boolean>(true);
const disabledUnchecked      = ref<boolean>(false);
const isIndeterminateChecked = ref<boolean>(false);
</script>
