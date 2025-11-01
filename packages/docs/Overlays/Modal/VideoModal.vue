<template>
    <FoButton color="primary"
              @click.prevent="isOpen = true"
    >
        Open modal
    </FoButton>

    <FoModal v-model="isOpen"
             :classes="{ body: 'rounded-lg p-0' }"
    >
        <iframe src="https://www.youtube.com/embed/EngW7tLk6R8?privacy-enhanced=true"
                class="aspect-video h-96 w-full"
        />
    </FoModal>
</template>

<script setup lang="ts">
import { FoButton, FoModal } from 'flyonui-vue';
import { ref }               from 'vue';

const isOpen = ref<boolean>(false);
</script>
