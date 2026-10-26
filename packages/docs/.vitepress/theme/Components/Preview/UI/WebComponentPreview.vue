<template>
    <div ref="preview" />
</template>

<script setup lang="ts">
import type { ApplicationRef, ComponentRef }                from '@angular/core';
import type { Root }                                        from 'react-dom/client';
import type { AngularComponent, WebComponentPreviewProps }  from '@/.vitepress/theme/Components/Preview/Types/Preview';
import { createComponent }                                  from '@angular/core';
import { createApplication }                                from '@angular/platform-browser';
import { createElement }                                    from 'react';
import { createRoot }                                       from 'react-dom/client';
import { nextTick, onBeforeUnmount, useTemplateRef, watch } from 'vue';

const props = defineProps<WebComponentPreviewProps>();

const previewElement = useTemplateRef('preview');

let angularApplication: ApplicationRef | null      = null;
let angularComponent: ComponentRef<unknown> | null = null;
let reactRoot: Root | null                         = null;

watch(previewElement, async (): Promise<void> => {
    if (previewElement.value === null) {
        return;
    }

    switch (props.framework) {
        case 'angular':
            await renderAngular(props.component);
            break;
        case 'html':
            await renderHtml();
            break;
        case 'react':
            renderReact(props.component);
            break;
    }
}, { once: true });

async function renderAngular(component: AngularComponent): Promise<void> {
    angularApplication = await createApplication();

    angularComponent = createComponent(component, {
        environmentInjector: angularApplication.injector,
        hostElement:         previewElement.value!,
    });

    angularApplication.attachView(angularComponent.hostView);
    angularComponent.changeDetectorRef.detectChanges();
}

async function renderHtml(): Promise<void> {
    if (props.framework !== 'html' || previewElement.value === null) {
        return;
    }

    previewElement.value.innerHTML = props.html;

    // Let custom-element mount hooks finish before the snippet initializes its properties.
    await nextTick();

    /**
     * Scripts inserted using innerHTML are inert in browsers, so the snippet’s event listeners and initialization code won’t execute
     * This loop creates a fresh <script> with the same text and replaces the inert one.
     */
    previewElement.value.querySelectorAll('script').forEach((inactiveScript: HTMLScriptElement): void => {
        const scriptContent = inactiveScript.textContent ?? '';
        const activeScript  = document.createElement('script');

        activeScript.textContent = scriptContent;
        inactiveScript.replaceWith(activeScript);
    });
}

function renderReact(component: Extract<WebComponentPreviewProps, { framework: 'react' }>['component']): void {
    if (previewElement.value === null) {
        return;
    }

    reactRoot = createRoot(previewElement.value);
    reactRoot.render(createElement(component));
}

onBeforeUnmount(() => {
    if (angularComponent !== null && angularApplication !== null) {
        angularApplication.detachView(angularComponent.hostView);
    }

    angularComponent?.destroy();
    angularComponent = null;

    angularApplication?.destroy();
    angularApplication = null;

    reactRoot?.unmount();
    reactRoot = null;
});
</script>
