import type { ComponentPreviewProps } from '@/.vitepress/theme/Components/ComponentPreview/Type/ComponentPreview';

export interface ComponentDocsPreview extends Omit<ComponentPreviewProps, 'dataTestScreenshot'> {
    excludeFromTests?: boolean;
}
