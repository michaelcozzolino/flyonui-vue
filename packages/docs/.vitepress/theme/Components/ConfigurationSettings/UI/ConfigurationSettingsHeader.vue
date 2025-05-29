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
                <FoIcon icon="tabler:circle-minus" />
            </template>
            <template #off>
                <FoIcon icon="tabler:circle-plus" />
            </template>
        </FoSwap>

        <FoButton class="ms-auto"
                  color="error"
                  icon="ix:hard-reset"
                  shape="circle"
                  size="small"
                  @click.prevent="resetConfig()"
        />
    </FoListGroupItem>
</template>

<script setup lang="ts">
import { FoButton, FoIcon, FoListGroupItem, FoSwap, useFlyonUIVueAppConfig } from 'flyonui-vue';

const show = defineModel<boolean>({ required: true });

const { resetConfig } = useFlyonUIVueAppConfig();
</script>
