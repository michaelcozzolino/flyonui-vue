<template>
    <Transition enter-from-class="h-0"
                enter-active-class="duration-300"
                enter-to-class="h-[150px]"
                leave-from-class="h-[150px]"
                leave-active-class="duration-300"
                leave-to-class="h-0"
    >
        <FoNavbarLinkList v-if="!isCollapsed"
                          :links="links"
        />
    </Transition>

    <FoNavbarLinkList v-if="isCollapsed"
                      :links="links"
    />
</template>

<script setup lang="ts">
import type { NavbarLink } from '@/Components/Navbar/Types/Navbar';
import FoNavbarLinkList    from '@/Components/Navbar/UI/FoNavbarLinkList.vue';

interface Props {
    isCollapsed: boolean;
    links:       NavbarLink[];
}

defineProps<Props>();
</script>
