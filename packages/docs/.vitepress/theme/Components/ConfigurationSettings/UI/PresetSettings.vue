<template>
    <FoButton v-for="preset in presets"
              :key="preset"
              :color="preset === selectedPreset ? 'warning' : 'primary'"
              size="extraSmall"
              @click="selectedPreset = preset"
    >
        {{ preset }}
    </FoButton>
</template>

<script setup lang="ts">
import type { GlobalPresetType } from 'flyonui-vue';
import { FoButton }              from 'flyonui-vue';

const selectedPreset = defineModel<GlobalPresetType>({ required: true });

const presets: GlobalPresetType[] = ['solid', 'soft', 'outline', 'dash'];
</script>
