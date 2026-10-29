import type { FlyonUIVueComponent, FlyonUIWebComponent } from '@/Types/WebComponent';
import { kebabCase }                                     from 'change-case';
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
import badgeCss                from 'flyonui/components/badge.css?inline';
import buttonCss               from 'flyonui/components/button.css?inline';
import checkboxCss             from 'flyonui/components/checkbox.css?inline';
import labelCss                from 'flyonui/components/label.css?inline';
import statCss                 from 'flyonui/components/stat.css?inline';
import { defineCustomElement } from 'vue';
import cssStyle                from '@/index.css?inline';

const vueComponents: FlyonUIVueComponent[] = [
    { component: FoButton, styles: [buttonCss] },
    { component: FoBadge, styles: [badgeCss] },
    { component: FoCheckbox, styles: [checkboxCss, labelCss] },
    { component: FoStats, styles: [statCss] },
    { component: FoStat, styles: [statCss] },
    { component: FoStatTitle, styles: [statCss] },
    { component: FoStatValue, styles: [statCss] },
    { component: FoStatDescription, styles: [statCss] },
];

const webComponents: FlyonUIWebComponent[] = vueComponents.map(
    ({ component, styles }: FlyonUIVueComponent): FlyonUIWebComponent => {
        const name = component.__name;

        if (name === undefined) {
            throw new Error('The Vue component name is undefined.');
        }

        return {
            name,
            component: defineCustomElement(component, { styles: [
                /**
                 * Component styles create the utilities layer before cssStyle is loaded,
                 * so it establishes layer precedence first.
                 */
                '@layer properties, theme, base, components, utilities;',
                ...styles,
                cssStyle,
                /**
                 * https://stackoverflow.com/questions/69644173/web-component-inheriting-parent-styles-even-with-all-initial-set
                 * Resets all styles to avoid style inheritance, excluding fonts
                 */
                ':host { all: initial !important; font: inherit !important; }',
            ] }),
        };
    },
);

export function registerFlyonUIWebComponents(): void {
    console.warn('FlyonUI web components is still an experimental package, its api and behaviour might change. DO NOT use on production.');

    for (const webComponent of webComponents) {
        const name = kebabCase(webComponent.name);

        if (customElements.get(name) === undefined) {
            customElements.define(name, webComponent.component);
        }
    }
}
