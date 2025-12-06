import type { ComponentPreviewProps } from '@/.vitepress/theme/Components/Preview/Types/Preview';

export interface ComponentDocsPreview extends Omit<ComponentPreviewProps, 'dataTestScreenshot'> {
    excludeFromTests?: boolean;
}
