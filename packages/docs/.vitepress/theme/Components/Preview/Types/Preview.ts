import type { Type }                              from '@angular/core';
import type { RendererNode }                      from '@vue/runtime-core';
import type { ComponentType }                     from 'react';
import type { Component, RendererElement, VNode } from 'vue';
import type { FrameworkId }                       from '@/.vitepress/theme/Components/Layout/Features/FrameworkSelector/Types/FrameworkSelector';

export type FrameworkSectionPreview = {
    excludeFromTests?:   boolean;
    dataTestScreenshot?: boolean;
    grid?:               ComponentPreviewGrid;
} & Partial<Record<FrameworkId, ComponentPreviewProps>>;

export interface ComponentPreviewProps {
    /**
     * If string it is only a code and the title will be defined by default in the component itself,
     * otherwise we have multiple codes that need to have a different title.
     */
    codePreview: string | CodePreviewProps[];

    /** The (web) component to be shown in the preview */
    component: Component | VNode<RendererNode, RendererElement, WebComponentPreviewProps>;
    grid?:     ComponentPreviewGrid;
}

export interface CodePreviewProps {
    title?:   string;
    code:     string;
    language: string;
}

export interface ComponentPreviewGrid {
    columns: number;
    rows:    number;
}

export type AngularComponent = Type<unknown>;
export type ReactComponent = ComponentType;

export type WebComponentPreviewProps = { framework: 'angular'; component: AngularComponent }
    | { framework: 'html'; component: string }
    | { framework: 'react'; component: ReactComponent };
