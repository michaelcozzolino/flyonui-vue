import type { Theme }                           from 'vitepress';
import type { App, Component, DefineComponent } from 'vue';
import DefaultTheme                             from 'vitepress/theme';
import SelectThemeController                    from '../../../src/components/ThemeController/UI/SelectThemeController.vue';
import ButtonDocs                               from '../../components/Button/ButtonDocs.vue';
import MenuDocs                                 from '../../components/Menu/MenuDocs.vue';
import SelectDocs                               from '../../components/Select/SelectDocs.vue';
import StatListDocs                             from '../../components/StatList/StatListDocs.vue';
import './tailwind.css';
import './style.scss';

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        registerDocComponents(app, [
            {
                name:     'ButtonDocs',
                instance: ButtonDocs,
            },
            {
                name:     'MenuDocs',
                instance: MenuDocs,
            },
            {
                name:     'StatListDocs',
                instance: StatListDocs,
            },
            {
                name:     'SelectDocs',
                instance: SelectDocs,
            },
            {
                name:     'SelectThemeController',
                instance: SelectThemeController,
            },
        ]);
    },
} satisfies Theme;

interface RegistrableComponent {
    name:     string;
    instance: Component | DefineComponent;
}

function registerDocComponents(app: App, components: RegistrableComponent[]): void {
    for (const component of components) {
        app.component(component.name, component.instance);
    }
}
