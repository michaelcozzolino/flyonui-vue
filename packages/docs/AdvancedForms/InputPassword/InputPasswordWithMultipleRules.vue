<template>
    <FoInputPassword v-model="password"
                     label="password"
                     :icon="{ on: 'tabler:eye', off: 'tabler:eye-off' }"
                     :is-strong="{
                         levels: 4,
                         rules: {
                             rules: passwordRules,
                             show: false,
                         },
                     }"
    />

    <FoInputPassword v-model="password"
                     label="password"
                     :icon="{ on: 'tabler:eye', off: 'tabler:eye-off' }"
                     :is-strong="{
                         levels: ['Weak', 'Medium', 'Strong', 'Very strong', 'Super strong'],
                         rules: {
                             rules: passwordRules,
                             show: true,
                         },
                     }"
    />
</template>

<script setup lang="ts">
import type { StrongPasswordRule } from 'flyonui-vue';
import { FoInputPassword }         from 'flyonui-vue';
import { ref }                     from 'vue';

const password = ref<string>('');

const passwordRules: StrongPasswordRule[] = [
    {
        description: 'Minimum number of characters is 6.',
        validate:    (password: string): boolean => password.length >= 6,
    },
    {
        description: 'Should contain lowercase.',
        validate:    (password: string): boolean => /[a-z]/.test(password),
    },
    {
        description: 'Should contain uppercase.',
        validate:    (password: string): boolean => /[A-Z]/.test(password),
    },
    {
        description: 'Should contain numbers.',
        validate:    (password: string): boolean => /\d/.test(password),
    },
    {
        description: 'Should contain special characters.',
        validate:    (password: string): boolean => /[^a-z0-9\s]/i.test(password),
    },
];
</script>
