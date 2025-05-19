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
import type { Preset } from 'flyonui-vue';
import { FoButton }    from 'flyonui-vue';

const selectedPreset = defineModel<Preset>({ required: true });

const presets: Preset[] = ['dash', 'text', 'soft', 'outline', 'gradient', 'solid'];
</script>
