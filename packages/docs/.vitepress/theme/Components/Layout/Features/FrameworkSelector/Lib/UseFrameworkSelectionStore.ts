import type { Identifiable, WithIcon, WithLabel } from 'flyonui-vue';
import type { FrameworkId }                       from '@/.vitepress/theme/Components/Preview/Types/Preview.ts';
import { defineStore }                            from 'pinia';
import { computed, ref }                          from 'vue';

type Framework = Identifiable<'id', FrameworkId> & Required<WithLabel & WithIcon>;

export const useFrameworkSelectionStore = defineStore('FrameworkSelectionStore', () => {
    const frameworks = computed(():  Framework[] => [
        { id: 'vue', label: 'Vue', icon: 'logos:vue' },
        { id: 'react', label: 'React', icon: 'logos:react' },
        { id: 'html', label: 'HTML', icon: 'logos:html-5' },
        { id: 'angular', label: 'Angular', icon: 'logos:angular-icon' },
    ]);

    const selectedFrameworkIds = ref<FrameworkId[]>(
        frameworks.value.map(framework => framework.id), // todo: remove temporary for debug
    );

    return { frameworks, selectedFrameworkIds };
});
