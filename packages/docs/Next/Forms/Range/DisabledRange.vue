<template>
    <!--    todo: isDisabled to be changed on 3.x -->
    <FoRange v-model="value"
             is-disabled
    />
</template>

<script setup lang="ts">
import { FoRange } from 'flyonui-vue';
import { ref }     from 'vue';

const value = ref<number>(50);
</script>
