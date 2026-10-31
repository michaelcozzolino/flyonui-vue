import type { ComputedRef, Ref }       from 'vue';
import type { Framework, FrameworkId } from '@/.vitepress/theme/Components/Layout/Features/FrameworkSelector/Types/FrameworkSelector';
import { useLocalStorage }             from '@vueuse/core';
import { defineStore }                 from 'pinia';
import { computed }                    from 'vue';

interface UseFrameworkSelectionStoreReturn {
    frameworks:                        ComputedRef<Framework[]>;
    selectedFrameworkIds:              Ref<FrameworkId[]>;
    selectedFrameworksLocalStorageKey: string;
}

export const useFrameworkSelectionStore = defineStore('FrameworkSelectionStore', (): UseFrameworkSelectionStoreReturn => {
    const selectedFrameworksLocalStorageKey = 'flyonui-vue-docs-selected-frameworks';

    const frameworks = computed((): Framework[] => [
        { id: 'vue', label: 'Vue', icon: 'logos:vue' },
        // todo: uncomment when web-components will be production ready
        // { id: 'react', label: 'React', icon: 'logos:react' },
        // { id: 'html', label: 'HTML', icon: 'logos:html-5' },
        // { id: 'angular', label: 'Angular', icon: 'logos:angular-icon' },
    ]);

    const selectedFrameworkIds = useLocalStorage<FrameworkId[]>(
        selectedFrameworksLocalStorageKey,
        ['vue'],
        { writeDefaults: true },
    );

    return { frameworks, selectedFrameworkIds, selectedFrameworksLocalStorageKey };
});
