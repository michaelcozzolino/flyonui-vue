<template>
    <ul class="menu md:menu-horizontal gap-2 p-0 text-base max-md:mt-2">
        <li v-for="link in links"
            :key="link.id"
        >
            <RouterLink v-if="linkType === 'vue'"
                        :to="link.to"
            >
                {{ link.text }}
            </RouterLink>

            <a v-else-if="linkType === 'js' && typeof link.to === 'string'"
               :href="link.to"
            >
                {{ link.text }}
            </a>
        </li>
    </ul>
</template>

<script setup lang="ts">
import type { NavbarLink } from '@/Components/Navbar/Types/Navbar';
import { RouterLink }      from 'vue-router';

interface Props {
    links?:    NavbarLink[];
    linkType?: 'vue' | 'js';
}

withDefaults(defineProps<Props>(), {
    links:    () => [],
    linkType: 'vue',
});
</script>
