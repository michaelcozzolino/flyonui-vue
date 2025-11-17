import type { Theme }                           from 'vitepress';
import type { App, Component, DefineComponent } from 'vue';
import { VueCodeHighlighter }                   from '@/.vitepress/theme/Components/CodeSnippet/Lib/VueCodeHighlighter';

import Layout                                         from '@/.vitepress/theme/Components/Layout/UI/Layout.vue';
import ComponentsApi                                  from '@/Api/UI/ComponentsApi.vue';
import BadgeDocs                                      from '@/Components/Badge/BadgeDocs.vue';
import ButtonDocs                                     from '@/Components/Button/ButtonDocs.vue';
import ListGroupDocs                                  from '@/Components/ListGroup/ListGroupDocs.vue';
import LoadingDocs                                    from '@/Components/Loading/LoadingDocs.vue';
import StatsDocs                                      from '@/Components/Stats/StatsDocs.vue';
import SwapDocs                                       from '@/Components/Swap/SwapDocs.vue';
import HeadingDocs                                    from '@/Content/Heading/HeadingDocs.vue';
import KeyboardDocs                                   from '@/Content/Keyboard/KeyboardDocs.vue';
import LinkDocs                                       from '@/Content/Link/LinkDocs.vue';
import MaskDocs                                       from '@/Content/Mask/MaskDocs.vue';
import IconsDocs                                      from '@/Customisation/Icons/IconsDocs.vue';
import BuildSizeVisualizer                            from '@/Extra/BuildSizeVisualizer/BuildSizeVisualizer.vue';
import CheckboxDocs                                   from '@/Forms/Checkbox/CheckboxDocs.vue';
import InputTextDocs                                  from '@/Forms/InputText/InputTextDocs.vue';
import JoinDocs                                       from '@/Forms/Join/JoinDocs.vue';
import SelectDocs                                     from '@/Forms/Select/SelectDocs.vue';
import TextareaDocs                                   from '@/Forms/Textarea/TextareaDocs.vue';
import MenuDocs                                       from '@/Navigations/Menu/MenuDocs.vue';
import NavbarDocs                                     from '@/Navigations/Navbar/NavbarDocs.vue';
import PaginationDocs                                 from '@/Navigations/Pagination/PaginationDocs.vue';
import SwitchDocs                                     from '@/Next/Forms/Switch/SwitchDocs.vue';
import ModalDocs                                      from '@/Overlays/Modal/ModalDocs.vue';
import PopoverDocs                                    from '@/Overlays/Popover/PopoverDocs.vue';
import TooltipDocs                                    from '@/Overlays/Tooltip/TooltipDocs.vue';
import Playground                                     from '@/Playground/Playground.vue';
import CreateFlyonUIVueAppDocs                        from '@/QuickStart/CreateFlyonUIVueApp/CreateFlyonUIVueAppDocs.vue';
import TableDocs                                      from '@/Tables/Table/TableDocs.vue';
import { FoKeyboard, FoSelectThemeController, vMask } from 'flyonui-vue';
import { createPinia }                                from 'pinia';
import DefaultTheme                                   from 'vitepress/theme';
import './index.css';

export default {
    extends:    DefaultTheme,
    Layout,
    enhanceApp: async ({ app }) => {
        if (!import.meta.env.SSR) {
            app.directive('mask', vMask());

            const { createFlyonUIVueApp } = await import('flyonui-vue');

            // const createFlyonUIVueAppOptions: FlyonUIVueAppConfig = {
            //     global: {
            //         horizontalPosition: {
            //             icon:       'left',
            //             helperText: 'right',
            //         },
            //     },
            //     components: {
            //         FoInputText: {
            //             horizontalPosition: {
            //                 helperText: 'left',
            //                 icon:       'left',
            //             },
            //         },
            //     },
            // };

            // todo: document this
            app.use(createFlyonUIVueApp, {});
        }

        app.use(createPinia());

        registerDocComponents(app, [
            { name: 'KeyboardDocs', instance: KeyboardDocs },
            { name: 'LinkDocs', instance: LinkDocs },
            { name: 'BadgeDocs', instance: BadgeDocs },
            { name: 'ButtonDocs', instance: ButtonDocs },
            { name: 'CheckboxDocs', instance: CheckboxDocs },
            { name: 'InputTextDocs', instance: InputTextDocs },
            { name: 'IconsDocs', instance: IconsDocs },
            { name: 'JoinDocs', instance: JoinDocs },
            { name: 'LoadingDocs', instance: LoadingDocs },
            { name: 'ListGroupDocs', instance: ListGroupDocs },
            { name: 'MaskDocs', instance: MaskDocs },
            { name: 'HeadingDocs', instance: HeadingDocs },
            { name: 'MenuDocs', instance: MenuDocs },
            { name: 'ModalDocs', instance: ModalDocs },
            { name: 'NavbarDocs', instance: NavbarDocs },
            { name: 'PaginationDocs', instance: PaginationDocs },
            { name: 'PopoverDocs', instance: PopoverDocs },
            { name: 'StatsDocs', instance: StatsDocs },
            { name: 'SwapDocs', instance: SwapDocs },
            { name: 'SelectDocs', instance: SelectDocs },
            { name: 'SwitchDocs', instance: SwitchDocs },
            { name: 'TableDocs', instance: TableDocs },
            { name: 'TextareaDocs', instance: TextareaDocs },
            { name: 'TooltipDocs', instance: TooltipDocs },
            { name: 'SelectThemeController', instance: FoSelectThemeController },
            { name: 'Playground', instance: Playground },
            { name: 'BuildSizeVisualizer', instance: BuildSizeVisualizer },
            { name: 'VueCodeHighlighter', instance: VueCodeHighlighter },
            { name: 'CreateFlyonUIVueAppDocs', instance: CreateFlyonUIVueAppDocs },
            { name: 'ComponentsApi', instance: ComponentsApi },
            { name: 'FoKeyboard', instance: FoKeyboard },
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
