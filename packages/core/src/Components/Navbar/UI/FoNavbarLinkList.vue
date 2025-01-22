<template>
    <ul class="menu md:menu-horizontal gap-2 p-0 text-base max-md:mt-2">
        <li v-for="link in links"
            :key="link.id"
        >
            <RouterLink :to="link.to">
                {{ link.text }}
            </RouterLink>
        </li>
    </ul>
</template>

<script setup lang="ts">
import type { NavbarLink } from '@/Components/Navbar/Types/Navbar';

interface Props {
    links: NavbarLink[];
}

defineProps<Props>();
</script>
