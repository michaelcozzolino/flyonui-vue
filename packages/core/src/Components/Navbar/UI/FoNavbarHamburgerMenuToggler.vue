<template>
    <div class="md:hidden">
        <button class="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square"
                :class="!isCollapsed && 'open'"
                aria-controls="logo-navbar-collapse"
                aria-label="Toggle navigation"
                @click.prevent="isCollapsed = !isCollapsed"
        >
            <FoIcon v-if="isCollapsed"
                    icon="tabler:menu-2"
            />

            <FoIcon v-else
                    icon="tabler:x"
            />
        </button>
    </div>
</template>

<script setup lang="ts">
import { FoIcon } from '@/Components/Icon';

const isCollapsed = defineModel<boolean>({ required: true });
</script>
