import type { Component } from 'vue';

export interface ComponentPreviewProps {
    /**
     * If string it is only a code and the title will be defined by default in the component itself,
     * otherwise we have multiple codes that need to have a different title.
     */
    code: string | { title: string; code: string }[];

    /** The component to be shown in the preview */
    component: Component;

    /**
     * Used mainly as name of the screenshot preview for visual tests, In case it is undefined, it means that it
     * is by purpose as not everything can be tested through screenshots, such as animations.
     */
    dataTestScreenshot?: string;
    grid?:               { columns: number; rows: number };
}

export interface CodePreviewProps {
    title?: string;
    code:   string;
    lang:   string;
}
