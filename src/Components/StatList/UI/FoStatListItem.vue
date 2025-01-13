<template>
    <div class="stat"
         :class="[stat.classes?.stat]"
    >
        <div :class="stat.valueAsTitle ? ['stat-value', stat.classes?.value] : ['stat-title', stat.classes?.title]">
            {{ stat.valueAsTitle ? stat.value : stat.title }}
        </div>

        <div :class="stat.valueAsTitle ? ['stat-title', stat.classes?.title] : ['stat-value', stat.classes?.value]">
            {{ stat.valueAsTitle ? stat.title : stat.value }}
        </div>

        <div v-if="$slots.image"
             class="stat-figure"
        >
            <slot name="image" />
        </div>

        <div v-if="stat.description"
             class="stat-desc"
             :class="[stat.classes?.description]"
        >
            {{ stat.description }}
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Stat } from '@/Components/StatList/Types/StatList';

interface Props {
    stat: Stat;
}

defineProps<Props>();
</script>
