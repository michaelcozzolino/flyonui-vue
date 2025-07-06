<template>
    <div>
        <Navbar />

        <Sidebar v-if="isNotHomepage()" />

        <main class="main">
            <Home v-if="isHomepage()" />

            <Content v-else
                     class="vp-doc p-8"
                     :class="isPageSizeSmallerThanSm ? 'ms-0' : (isSidebarCollapsed ? 'ms-24' : 'ms-64')"
            />
        </main>
    </div>
</template>

<script setup lang="ts">
import Navbar             from '@/.vitepress/theme/Components/Layout/Features/Navbar/UI/Navbar.vue';
import Home               from '@/.vitepress/theme/Components/Layout/Features/Sidebar/UI/Home.vue';
import Sidebar            from '@/.vitepress/theme/Components/Layout/Features/Sidebar/UI/Sidebar.vue';
import { useLayoutStore } from '@/.vitepress/theme/Components/Layout/Lib/UseLayoutStore';
import { storeToRefs }    from 'pinia';
import { Content }        from 'vitepress';

const { isHomepage, isNotHomepage } = useLayoutStore();

const { isSidebarCollapsed, isPageSizeSmallerThanSm } = storeToRefs(useLayoutStore());
</script>
