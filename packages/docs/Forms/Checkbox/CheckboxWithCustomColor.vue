<template>
    <FoCheckbox v-model="isChecked"
                class="checked:border-[#f0f]! checked:bg-[#f0f]! checked:text-[#fff]!"
                label="Hex code"
    />

    <FoCheckbox v-model="isChecked"
                label="Named color"
                class="checked:border-[green]! checked:bg-[green]! checked:text-white!"
    />

    <FoCheckbox v-model="isChecked"
                class="checked:border-amber-400! checked:bg-amber-400! checked:text-amber-800!"
                label="Tailwind utility colors"
    />

    <FoCheckbox v-model="isChecked"
                class="[--input-color:blue]! checked:text-white!"
                label="FlyonUI variable"
    />
</template>

<script setup lang="ts">
import { FoCheckbox } from 'flyonui-vue';
import { ref }        from 'vue';

const isChecked = ref<boolean>(true);
</script>
