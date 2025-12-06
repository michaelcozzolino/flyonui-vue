import type { ComponentPreviewProps } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ComponentName }         from 'flyonui-vue';

export interface ComponentDocsPreview extends Omit<ComponentPreviewProps, 'dataTestScreenshot'> {
    excludeFromTests?: boolean;
}

export interface ComponentDocsProps<S extends string, C extends ComponentDocsPreview> {
    previews:               Map<S, C>;
    section:                S;
    apiDocsComponentNames?: ComponentName | ComponentName[];
}
