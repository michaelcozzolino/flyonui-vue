<template>
    <FoSwitch v-model="isChecked"
              class="checked:text-[#e4b0f8] checked:border-[#9b59b6] checked:bg-[#9b59b6]"
              label="Hex code"
    />

    <FoSwitch v-model="isChecked"
              label="Named color"
              class="checked:text-[#8fff8f] checked:border-[green] checked:bg-[green]"
    />

    <FoSwitch v-model="isChecked"
              class="checked:text-amber-100 checked:border-amber-600 checked:bg-amber-600"
              label="Tailwind utility colors"
    />

    <FoSwitch v-model="isChecked"
              class="checked:text-blue-100 checked:[--input-color:blue]"
              label="FlyonUI variable"
    />

    <FoSwitch v-model="isChecked"
              class="checked:border-red-600 checked:text-blue-600"
              label="(Outline) Tailwind utility colors"
              preset="outline"
    />

    <FoSwitch v-model="isChecked"
              class="checked:text-blue-100 checked:[--input-color:#9b59b6]"
              label="(Outline) FlyonUI variable"
              preset="outline"
    />
</template>

<script setup lang="ts">
import { FoSwitch } from 'flyonui-vue';
import { ref }      from 'vue';

const isChecked = ref<boolean>(true);
</script>
