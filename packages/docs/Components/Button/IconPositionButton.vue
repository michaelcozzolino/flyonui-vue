<template>
    <FoButton color="primary"
              :icon="{ left: 'tabler:headphones' }"
    >
        Text with icon left
    </FoButton>

    <FoButton color="secondary"
              :icon="{ right: 'tabler:clock' }"
    >
        Text with icon right
    </FoButton>

    <FoButton color="accent"
              :icon="{ left: 'tabler:headphones', right: 'tabler:clock' }"
    >
        Text with icon left and right
    </FoButton>

    <FoButton color="info"
              @click="isChecked = !isChecked"
    >
        <template #prepend>
            <FoCheckbox v-model="isChecked" />
        </template>

        Something custom

        <template #append>
            <svg class="w-6 h-6 text-gray-800 dark:text-white"
                 aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg"
                 width="24"
                 height="24"
                 fill="none"
                 viewBox="0 0 24 24"
            >
                <path stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
            </svg>
        </template>
    </FoButton>
</template>

<script setup lang="ts">
import { FoButton, FoCheckbox } from 'flyonui-vue';
import { ref }                  from 'vue';

const isChecked = ref<boolean>(true);
</script>
