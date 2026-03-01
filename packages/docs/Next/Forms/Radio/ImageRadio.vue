<template>
    <div class="flex items-start gap-3 flex-nowrap">
        <FoImageRadio v-model="selectedValue"
                      :image="{ src: 'https://cdn.flyonui.com/fy-assets/components/radio/image-6.png', alt: 'smartwatch' }"
                      value="smartwatch"
        />

        <FoImageRadio v-model="selectedValue"
                      :image="{ src: 'https://cdn.flyonui.com/fy-assets/components/radio/image-3.png', alt: 'apple-devices' }"
                      value="apple-devices"
        />

        <FoImageRadio v-model="selectedValue"
                      :image="{ src: 'https://cdn.flyonui.com/fy-assets/components/radio/image-5.png', alt: 'headphones' }"
                      value="headphones"
        />
    </div>
</template>

<script setup lang="ts">
import { FoImageRadio } from 'flyonui-vue';
import { ref }          from 'vue';

const selectedValue = ref<string>('smartwatch');
</script>
