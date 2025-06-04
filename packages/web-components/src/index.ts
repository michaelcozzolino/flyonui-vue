import type { FlyonUIVueComponent, FlyonUIWebComponent } from '@/Types/WebComponent.ts';
import StyleSheetHelper                                  from '@/Lib/StyleSheetHelper.ts';

import { kebabCase } from 'change-case';
import {
    FoBadge,
    FoButton,
    FoCheckbox,
    FoStat,
    FoStatDescription,
    FoStats,
    FoStatTitle,
    FoStatValue,
} from 'flyonui-vue/ce';
import badgeCss
    from 'flyonui/components/badge.css?inline';
import buttonCss
    from 'flyonui/components/button.css?inline';
import checkboxCss
    from 'flyonui/components/checkbox.css?inline';
import statCss
    from 'flyonui/components/stat.css?inline';
import { defineCustomElement } from 'vue';

const statStyleSheet = StyleSheetHelper.generate(statCss);

const vueComponents: FlyonUIVueComponent[] = [
    { component: FoButton, styleSheet: StyleSheetHelper.generate(buttonCss) },
    { component: FoBadge, styleSheet: StyleSheetHelper.generate(badgeCss) },
    // @ts-expect-error a type error occurs only with checkbox, todo: check why
    { component: FoCheckbox, styleSheet: StyleSheetHelper.generate(checkboxCss) },
    { component: FoStats, styleSheet: statStyleSheet },
    { component: FoStat, styleSheet: statStyleSheet },
    { component: FoStatTitle, styleSheet: statStyleSheet },
    { component: FoStatValue, styleSheet: statStyleSheet },
    { component: FoStatDescription, styleSheet: statStyleSheet },
];

const webComponents: FlyonUIWebComponent[] = vueComponents.map(
    ({ component, styleSheet }: FlyonUIVueComponent): FlyonUIWebComponent => {
        const name = component.__name;

        if (name === undefined) {
            throw new Error('The Vue component name is undefined.');
        }

        return {
            name,
            component: defineCustomElement(component),
            styleSheet,
        };
    },
);

export function registerFlyonUIWebComponents(): void {
    console.warn('FlyonUI web components is still an experimental package, its api and behaviour might change. DO NOT use on production.');

    for (const webComponent of webComponents) {
        const name = kebabCase(webComponent.name);

        if (customElements.get(name) === undefined) {
            StyleSheetHelper.load(webComponent);
            customElements.define(name, webComponent.component);
        }
    }
}
