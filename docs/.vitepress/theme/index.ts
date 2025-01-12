import type { Theme }                           from 'vitepress';
import type { App, Component, DefineComponent } from 'vue';
import DefaultTheme                             from 'vitepress/theme';
import FoSelectThemeController                  from '../../../src/Components/ThemeController/UI/FoSelectThemeController.vue';
import ButtonDocs                               from '../../Components/Button/ButtonDocs.vue';
import StatListDocs                             from '../../Components/StatList/StatListDocs.vue';
import SelectDocs                               from '../../Forms/Select/SelectDocs.vue';
import MenuDocs                                 from '../../Navigations/Menu/MenuDocs.vue';
import './tailwind.css';
import './style.scss';
// todo: imports could use aliases
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
                instance: FoSelectThemeController,
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
