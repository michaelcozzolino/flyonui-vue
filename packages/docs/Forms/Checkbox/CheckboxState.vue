<template>
    <FoCheckbox v-model="disabledChecked"
                disabled
    />

    <FoCheckbox v-model="disabledUnchecked"
                disabled
    />

    <FoCheckbox v-model="indeterminateChecked"
                v-model:indeterminate="indeterminate"
                color="primary"
                label="Indeterminate with parent mutation"
    />

    <FoCheckbox v-model="indeterminateChecked"
                indeterminate
                color="primary"
                label="Indeterminate without parent mutation"
    />
</template>

<script setup lang="ts">
import { FoCheckbox } from 'flyonui-vue';
import { ref }        from 'vue';

const disabledChecked      = ref<boolean>(true);
const disabledUnchecked    = ref<boolean>(false);
const indeterminateChecked = ref<boolean>(false);
const indeterminate        = ref<boolean>(true);
</script>
