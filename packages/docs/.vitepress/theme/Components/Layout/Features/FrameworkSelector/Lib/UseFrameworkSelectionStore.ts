import type { Identifiable, WithIcon, WithLabel } from 'flyonui-vue';
import type { FrameworkId }                       from '@/.vitepress/theme/Components/Preview/Types/Preview.ts';
import { useLocalStorage }                        from '@vueuse/core';
import { defineStore }                            from 'pinia';
import { computed }                               from 'vue';

type Framework = Identifiable<'id', FrameworkId> & Required<WithLabel & WithIcon>;

export const useFrameworkSelectionStore = defineStore('FrameworkSelectionStore', () => {
    const frameworks = computed(():  Framework[] => [
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
