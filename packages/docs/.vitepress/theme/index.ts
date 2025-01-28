import type { Theme }                           from 'vitepress';
import type { App, Component, DefineComponent } from 'vue';
import { FoSelectThemeController }              from 'flyonui-vue';
import DefaultTheme                             from 'vitepress/theme';
import BadgeDocs                                from '../../Components/Badge/BadgeDocs.vue';
import ButtonDocs                               from '../../Components/Button/ButtonDocs.vue';
import StatListDocs                             from '../../Components/StatList/StatListDocs.vue';
import SelectDocs                               from '../../Forms/Select/SelectDocs.vue';
import MenuDocs                                 from '../../Navigations/Menu/MenuDocs.vue';
import NavbarDocs                               from '../../Navigations/Navbar/NavbarDocs.vue';
import Playground                               from '../../Playground/Playground.vue';
import './tailwind.css';
import './style.scss';

// todo: imports could use aliases
export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        registerDocComponents(app, [
            {
                name:     'BadgeDocs',
                instance: BadgeDocs,
            },
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
                name:     'NavbarDocs',
                instance: NavbarDocs,
            },
            {
                name:     'SelectThemeController',
                instance: FoSelectThemeController,
            },
            {
                name:     'Playground',
                instance: Playground,
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
