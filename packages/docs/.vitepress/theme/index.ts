import type { Theme }                           from 'vitepress';
import type { App, Component, DefineComponent } from 'vue';
import BadgeDocs                                from '@/Components/Badge/BadgeDocs.vue';
import ButtonDocs                               from '@/Components/Button/ButtonDocs.vue';
import ListGroupDocs                            from '@/Components/ListGroup/ListGroupDocs.vue';
import LoadingDocs                              from '@/Components/Loading/LoadingDocs.vue';
import StatListDocs                             from '@/Components/StatList/StatListDocs.vue';
import BuildSizeVisualizer                      from '@/Extra/BuildSizeVisualizer/BuildSizeVisualizer.vue';
import CheckboxDocs                             from '@/Forms/Checkbox/CheckboxDocs.vue';
import SelectDocs                               from '@/Forms/Select/SelectDocs.vue';
import MenuDocs                                 from '@/Navigations/Menu/MenuDocs.vue';
import NavbarDocs                               from '@/Navigations/Navbar/NavbarDocs.vue';
import Playground                               from '@/Playground/Playground.vue';
import { FoSelectThemeController }              from 'flyonui-vue';
import DefaultTheme                             from 'vitepress/theme';
import './tailwind.css';
import './style.scss';
import 'flyonui-vue/index.css';

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        registerDocComponents(app, [
            { name: 'BadgeDocs', instance: BadgeDocs },
            { name: 'ButtonDocs', instance: ButtonDocs },
            { name: 'CheckboxDocs', instance: CheckboxDocs },
            { name: 'LoadingDocs', instance: LoadingDocs },
            { name: 'ListGroupDocs', instance: ListGroupDocs },
            { name: 'MenuDocs', instance: MenuDocs },
            { name: 'NavbarDocs', instance: NavbarDocs },
            { name: 'StatListDocs', instance: StatListDocs },
            { name: 'SelectDocs', instance: SelectDocs },
            { name: 'SelectThemeController', instance: FoSelectThemeController },
            { name: 'Playground', instance: Playground },
            { name: 'BuildSizeVisualizer', instance: BuildSizeVisualizer },
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
