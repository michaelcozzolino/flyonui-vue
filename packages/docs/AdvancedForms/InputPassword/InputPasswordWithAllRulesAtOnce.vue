<template>
    <FoInputPassword v-model="password"
                     label="password"
                     :icon="{ on: 'tabler:eye', off: 'tabler:eye-off' }"
                     :is-strong="{ levels, rules: evaluatePassword }"
    />
</template>

<script setup lang="ts">
import { FoInputPassword } from 'flyonui-vue';
import { ref }             from 'vue';

const password = ref<string>('');

const levels: number = 4;

function evaluatePassword(password: string): number {
    const evaluations: boolean[] = [
        password.length >= 6,
        /[a-z]/.test(password),
        /[A-Z]/.test(password),
        /\d/.test(password),
        /[^a-z0-9\s]/i.test(password),
    ];

    const passedEvaluations: number = evaluations.filter((isValid: boolean): boolean => isValid).length;

    return Math.floor(passedEvaluations * levels / evaluations.length);
}
</script>
