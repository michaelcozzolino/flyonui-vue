<template>
    <div class="flex w-full justify-center">
        <FoKeyboard>
            <FoIcon icon="tabler:caret-up-filled" />
        </FoKeyboard>
    </div>

    <div class="flex w-full justify-center gap-12">
        <FoKeyboard>
            <FoIcon icon="tabler:caret-left-filled" />
        </FoKeyboard>

        <FoKeyboard>
            <FoIcon icon="tabler:caret-right-filled" />
        </FoKeyboard>
    </div>

    <div class="flex w-full justify-center">
        <FoKeyboard>
            <FoIcon icon="tabler:caret-down-filled" />
        </FoKeyboard>
    </div>
</template>

<script setup lang="ts">
import { FoIcon, FoKeyboard } from 'flyonui-vue';
</script>
