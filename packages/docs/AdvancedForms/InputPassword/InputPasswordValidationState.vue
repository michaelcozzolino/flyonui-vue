<template>
    <FoInputPassword v-model="password"
                     label="password"
                     is-valid
    />

    <FoInputPassword v-model="password"
                     label="password"
                     :icon="{ on: 'tabler:eye', off: 'tabler:eye-off' }"
                     is-valid
    />

    <FoInputPassword v-model="password"
                     :label="{ text: 'password', type: 'floating' }"
                     :icon="{ on: 'tabler:eye', off: 'tabler:eye-off' }"
                     is-valid
    />

    <FoInputPassword v-model="password"
                     :label="{ text: 'password', type: 'inline' }"
                     :icon="{ on: 'tabler:eye', off: 'tabler:eye-off' }"
                     is-valid
    />

    <FoInputPassword v-model="password"
                     label="password"
                     :is-valid="false"
    />

    <FoInputPassword v-model="password"
                     :label="{ text: 'password', type: 'floating' }"
                     :icon="{ on: 'tabler:eye', off: 'tabler:eye-off' }"
                     :is-valid="false"
    />

    <FoInputPassword v-model="password"
                     :label="{ text: 'password', type: 'inline' }"
                     :icon="{ on: 'tabler:eye', off: 'tabler:eye-off' }"
                     :is-valid="false"
    />
</template>

<script setup lang="ts">
import { FoInputPassword } from 'flyonui-vue';
import { ref }             from 'vue';

const password = ref<string>('');
</script>
