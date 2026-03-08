<template>
    <FoLink v-if="declarations[0] !== undefined"
            color="primary"
            class="font-bold"
            :to="declarations[0].file"
            underline-effect="hover-animated"
    >
        {{ name }}
    </FoLink>

    <span v-else
          class="text-primary"
    >
        {{ name }}
    </span>
</template>

<script setup lang="ts">
import type { Declaration } from 'vue-component-meta';
import { FoLink }           from 'flyonui-vue';

interface Props {
    name:         string;
    declarations: Declaration[];
}

defineProps<Props>();
</script>
