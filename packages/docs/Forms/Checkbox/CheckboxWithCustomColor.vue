<template>
    <FoCheckbox v-model="isChecked"
                label="Hex code"
                color="[--chkbg:#f0f]"
    />

    <FoCheckbox v-model="isChecked"
                label="Named color"
                color="[--chkbg:green]"
    />

    <FoCheckbox v-model="isChecked"
                label="FlyonUI color CSS variable"
                color="[--chkbg:oklch(var(--p))]"
    />

    <FoCheckbox v-model="isChecked"
                label="Tailwind color"
                color="[--chkbg:theme(colors.red.600)]"
    />
</template>

<script setup lang="ts">
import { FoCheckbox } from 'flyonui-vue';
import { ref }        from 'vue';

const isChecked = ref<boolean>(true);
</script>
