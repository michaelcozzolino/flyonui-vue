import type { ComponentName }           from 'flyonui-vue';
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';

export interface ComponentDocsProps<S extends string> {
    previews:               Map<S, FrameworkSectionPreview>;
    section:                S;
    apiDocsComponentNames?: ComponentName | ComponentName[];
}
