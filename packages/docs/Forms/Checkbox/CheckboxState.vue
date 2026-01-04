<template>
    <FoCheckbox v-model="disabledChecked"
                disabled
    />

    <FoCheckbox v-model="disabledUnchecked"
                disabled
    />

    <FoCheckbox v-model="isIndeterminateChecked"
                color="primary"
                label="Indeterminate"
                is-indeterminate
    />
</template>

<script setup lang="ts">
import { FoCheckbox } from 'flyonui-vue';
import { ref }        from 'vue';

const disabledChecked        = ref<boolean>(true);
const disabledUnchecked      = ref<boolean>(false);
const isIndeterminateChecked = ref<boolean>(false);
</script>
