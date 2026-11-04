<template>
    <FoInputPassword v-model="password"
                     label="password"
                     :icon="{ on: 'tabler:eye', off: 'tabler:eye-off' }"
                     :is-strong="{
                         levels: 4,
                         rules: validatePassword,
                     }"
    />
</template>

<script setup lang="ts">
import { FoInputPassword } from 'flyonui-vue';
import { ref }             from 'vue';

const password = ref<string>('');

function validatePassword(password: string): number {
    const validations: boolean[] = [
        password.length >= 6,
        /[a-z]/.test(password),
        /[A-Z]/.test(password),
        /\d/.test(password),
        /[^a-z0-9\s]/i.test(password),
    ];

    const passedValidations: number = validations.filter((isValid: boolean): boolean => isValid).length;

    return Math.floor(passedValidations * 4 / validations.length);
}
</script>
