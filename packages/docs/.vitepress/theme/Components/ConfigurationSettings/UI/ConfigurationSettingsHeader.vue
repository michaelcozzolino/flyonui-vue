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
                  :is-disabled="!canResetConfig"
                  @click.prevent="resetConfig()"
        />
    </FoListGroupItem>
</template>

<script setup lang="ts">
import { FoButton, FoIcon, FoListGroupItem, FoSwap, useFlyonUIVueAppConfig } from 'flyonui-vue';
import { ref, watch }                                                        from 'vue';

const show = defineModel<boolean>({ required: true });

const { config, resetConfig } = useFlyonUIVueAppConfig();
const canResetConfig          = ref<boolean>(false);

watch(config, () => {
    canResetConfig.value = true;
}, { deep: true });
</script>
