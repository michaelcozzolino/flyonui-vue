<template>
    <FoListGroupItem is-striped>
        <slot />
        <!--        todo: temporary, v-if to be removed when i will add component settings -->
        <FoSwap v-if="false"
                v-model="show"
                class="ms-auto"
                animation="rotation"
        >
            <template #on>
                <FoIcon icon="tabler:circle-minus"
                        size="extraLarge"
                />
            </template>
            <template #off>
                <FoIcon icon="tabler:circle-plus"
                        size="extraLarge"
                />
            </template>
        </FoSwap>
    </FoListGroupItem>
</template>

<script setup lang="ts">
import { FoIcon, FoListGroupItem, FoSwap } from 'flyonui-vue';

const show = defineModel<boolean>({ required: true });
</script>
