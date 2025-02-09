<template>
    <FoCheckboxGroup orientation="vertical">
        <FoCheckbox v-for="checkbox in checkboxes"
                    :key="checkbox.label"
                    v-model="checkbox.isChecked"
                    :color="checkbox.color"
                    :label="checkbox.label"
        />
    </FoCheckboxGroup>
</template>

<script setup lang="ts">
import { type CheckboxProps, FoCheckbox, FoCheckboxGroup } from 'flyonui-vue';
import { ref }                                             from 'vue';

const checkboxes = ref<(CheckboxProps & { isChecked: boolean })[]>([
    {
        label:     'Vue',
        color:     'primary',
        isChecked: false,
    },
    {
        label:     'Angular',
        color:     'primary',
        isChecked: true,
    },
    {
        label:     'React',
        color:     'primary',
        isChecked: false,
    },
]);
</script>
