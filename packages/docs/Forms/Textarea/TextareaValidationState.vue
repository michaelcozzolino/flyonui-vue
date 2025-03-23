<template>
    <FoTextarea v-model="input"
                :label="{ text: 'Full name' }"
                placeholder="Hello!!!"
                :helper-text="{ bottom: { left: 'Bottom Left label', right: 'Bottom Right label' } }"
                is-valid
    />

    <FoTextarea v-model="input"
                :label="{ text: 'Your bio', type: 'floating' }"
                placeholder="Hello!!!"
                :helper-text="{
                    bottom: { left: 'Bottom Left label', right: 'Bottom Right label' },
                    top: 'Top right label',
                }"
                is-valid
    />

    <FoTextarea v-model="input"
                :label="{ text: 'Your bio', type: 'filled' }"
                placeholder="Hello!!!"
                :helper-text="{
                    bottom: { left: 'Bottom Left label', right: 'Bottom Right label' },
                    top: 'Top right label',
                }"
                is-valid
    />

    <FoTextarea v-model="input"
                :label="{ text: 'Full name' }"
                placeholder="Hello!!!"
                :helper-text="{ bottom: { left: 'Bottom Left label', right: 'Bottom Right label' } }"
                :is-valid="false"
    />

    <FoTextarea v-model="input"
                :label="{ text: 'Your bio', type: 'floating' }"
                placeholder="Hello!!!"
                :helper-text="{
                    bottom: { left: 'Bottom Left label', right: 'Bottom Right label' },
                    top: 'Top right label',
                }"
                :is-valid="false"
    />

    <FoTextarea v-model="input"
                :label="{ text: 'Your bio', type: 'filled' }"
                placeholder="Hello!!!"
                :helper-text="{
                    bottom: { left: 'Bottom Left label', right: 'Bottom Right label' },
                    top: 'Top right label',
                }"
                :is-valid="false"
    />
</template>

<script setup lang="ts">
import { FoTextarea } from 'flyonui-vue';
import { ref }        from 'vue';

const input = ref<string>('');
</script>
