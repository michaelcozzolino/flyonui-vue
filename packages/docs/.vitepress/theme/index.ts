import type { Theme }                           from 'vitepress';
import type { App, Component, DefineComponent } from 'vue';
import { VueCodeHighlighter }                   from '@/.vitepress/theme/Components/Lib/VueCodeHighlighter';
import BadgeDocs                                from '@/Components/Badge/BadgeDocs.vue';
import ButtonDocs                               from '@/Components/Button/ButtonDocs.vue';
import ListGroupDocs                            from '@/Components/ListGroup/ListGroupDocs.vue';
import LoadingDocs                              from '@/Components/Loading/LoadingDocs.vue';
import StatsDocs                                from '@/Components/Stat/StatsDocs.vue';
import HeadingDocs                              from '@/Content/Heading/HeadingDocs.vue';
import LinkDocs                                 from '@/Content/Link/LinkDocs.vue';
import MaskDocs                                 from '@/Content/Mask/MaskDocs.vue';
import BuildSizeVisualizer                      from '@/Extra/BuildSizeVisualizer/BuildSizeVisualizer.vue';
import CheckboxDocs                             from '@/Forms/Checkbox/CheckboxDocs.vue';
import InputTextDocs                            from '@/Forms/InputText/InputTextDocs.vue';
import JoinDocs                                 from '@/Forms/Join/JoinDocs.vue';
import SelectDocs                               from '@/Forms/Select/SelectDocs.vue';
import TextareaDocs                             from '@/Forms/Textarea/TextareaDocs.vue';
import MenuDocs                                 from '@/Navigations/Menu/MenuDocs.vue';
import NavbarDocs                               from '@/Navigations/Navbar/NavbarDocs.vue';
import Playground                               from '@/Playground/Playground.vue';
import { FoSelectThemeController, vMask }       from 'flyonui-vue';
import DefaultTheme                             from 'vitepress/theme';

import './index.css';

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.directive('mask', vMask());

        registerDocComponents(app, [
            { name: 'LinkDocs', instance: LinkDocs },
            { name: 'BadgeDocs', instance: BadgeDocs },
            { name: 'ButtonDocs', instance: ButtonDocs },
            { name: 'CheckboxDocs', instance: CheckboxDocs },
            { name: 'InputTextDocs', instance: InputTextDocs },
            { name: 'JoinDocs', instance: JoinDocs },
            { name: 'LoadingDocs', instance: LoadingDocs },
            { name: 'ListGroupDocs', instance: ListGroupDocs },
            { name: 'MaskDocs', instance: MaskDocs },
            { name: 'HeadingDocs', instance: HeadingDocs },
            { name: 'MenuDocs', instance: MenuDocs },
            { name: 'NavbarDocs', instance: NavbarDocs },
            { name: 'StatsDocs', instance: StatsDocs },
            { name: 'SelectDocs', instance: SelectDocs },
            { name: 'TextareaDocs', instance: TextareaDocs },
            { name: 'SelectThemeController', instance: FoSelectThemeController },
            { name: 'Playground', instance: Playground },
            { name: 'BuildSizeVisualizer', instance: BuildSizeVisualizer },
            { name: 'VueCodeHighlighter', instance: VueCodeHighlighter },
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
