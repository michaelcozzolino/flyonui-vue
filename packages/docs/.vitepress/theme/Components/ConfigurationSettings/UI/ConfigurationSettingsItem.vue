<template>
    <FoListGroupItem>
        <div class="flex items-center">
            <FoIcon v-if="icon"
                    :icon="icon"
                    size="doubleExtraLarge"
            />

            <div class="flex flex-wrap gap-2">
                <slot />
            </div>
        </div>
    </FoListGroupItem>
</template>

<script setup lang="ts">
import { FoIcon, FoListGroupItem } from 'flyonui-vue';

interface Props {
    icon?: string;
}

defineProps<Props>();
</script>
