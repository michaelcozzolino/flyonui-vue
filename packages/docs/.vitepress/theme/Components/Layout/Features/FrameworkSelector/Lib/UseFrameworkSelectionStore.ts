import type { Framework, FrameworkId } from '@/.vitepress/theme/Components/Layout/Features/FrameworkSelector/Types/FrameworkSelector.ts';
import { useLocalStorage }             from '@vueuse/core';
import { defineStore }                 from 'pinia';
import { computed }                    from 'vue';

export const useFrameworkSelectionStore = defineStore('FrameworkSelectionStore', () => {
    const frameworks = computed((): Framework[] => [
        { id: 'vue', label: 'Vue', icon: 'logos:vue' },
        { id: 'react', label: 'React', icon: 'logos:react' },
        { id: 'html', label: 'HTML', icon: 'logos:html-5' },
        { id: 'angular', label: 'Angular', icon: 'logos:angular-icon' },
    ]);

    const selectedFrameworkIds = useLocalStorage<FrameworkId[]>(
        'flyonui-vue-docs-selected-frameworks',
        ['vue'],
        { writeDefaults: true },
    );

    return { frameworks, selectedFrameworkIds };
});
