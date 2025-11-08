import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import { defineStore }                         from 'pinia';
import { useRoute }                            from 'vitepress';
import { computed, ref, watch }                from 'vue';

export const useLayoutStore = defineStore('UseLayoutStore', () => {
    const vitepressThemeLocalStorageKey = 'vitepress-theme-appearance';

    const isSidebarCollapsed = ref<boolean>(false);

    const isPageSizeSmallerThanSm = computed(() => {
        const breakpoints = useBreakpoints(breakpointsTailwind);

        return breakpoints.smaller('sm').value;
    });

    watch(isPageSizeSmallerThanSm, () => {
        if (isPageSizeSmallerThanSm.value) {
            isSidebarCollapsed.value = true;
        }
    }, { immediate: true });

    function isHomepage(): boolean {
        const route = useRoute();

        return route.path === '/';
    }

    function isNotHomepage(): boolean {
        return isHomepage() === false;
    }

    return {
        vitepressThemeLocalStorageKey,
        isSidebarCollapsed,
        isPageSizeSmallerThanSm,
        isHomepage,
        isNotHomepage,
    };
});
