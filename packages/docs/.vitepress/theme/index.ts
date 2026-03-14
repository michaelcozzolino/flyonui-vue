import type { Theme } from 'vitepress';

import type { App, Component }             from 'vue';
import ComponentNotReadyForProductionAlert
    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentNotReadyForProductionAlert.vue';
import TipAlert                                                            from '@/.vitepress/theme/Components/ComponentDocs/UI/TipAlert.vue';
import Layout                                                              from '@/.vitepress/theme/Components/Layout/UI/Layout.vue';
import CodePreview                                                         from '@/.vitepress/theme/Components/Preview/UI/CodePreview.vue';
import hljsVuePlugin                                                       from '@highlightjs/vue-plugin';
import { createFlyonUIVueApp, FoKeyboard, FoSelectThemeController, vMask } from 'flyonui-vue';
import { createPinia }                                                     from 'pinia';
import DefaultTheme                                                        from 'vitepress/theme';
import { defineAsyncComponent }                                            from 'vue';
import './index.css';
import 'highlight.js/styles/github-dark-dimmed.css';
import 'highlight.js/lib/common';

export default {
    extends:    DefaultTheme,
    Layout,
    enhanceApp: async ({ app }) => {
        if (!import.meta.env.SSR) {
            app.directive('mask', vMask());

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
            //         FoButton: {
            //             color: 'error',
            //         },
            //     },
            // };

            // todo: document this
            app.use(createFlyonUIVueApp, {});
        }

        app.use(createPinia()).use(hljsVuePlugin);

        registerDocComponents(app, [
            {
                name:      'AvatarDocs',
                component: defineAsyncComponent(() => import('@/Components/Avatar/AvatarDocs.vue')),
            },
            {
                name:      'KeyboardDocs',
                component: defineAsyncComponent(() => import('@/Content/Keyboard/KeyboardDocs.vue')),
            },
            {
                name:      'AlertDocs',
                component: defineAsyncComponent(() => import('@/Components/Alert/AlertDocs.vue')),
            },
            {
                name:      'ComponentNotReadyForProductionAlert',
                component: ComponentNotReadyForProductionAlert,
            },
            {
                name:      'TipAlert',
                component: TipAlert,
            },
            {
                name:      'LinkDocs',
                component: defineAsyncComponent(() => import('@/Content/Link/LinkDocs.vue')),
            },
            {
                name:      'BadgeDocs',
                component: defineAsyncComponent(() => import('@/Components/Badge/BadgeDocs.vue')),
            },
            {
                name:      'BlockQuoteDocs',
                component: defineAsyncComponent(() => import('@/Content/BlockQuote/BlockQuoteDocs.vue')),
            },
            {
                name:      'ButtonDocs',
                component: defineAsyncComponent(() => import('@/Components/Button/ButtonDocs.vue')),
            },
            {
                name:      'CheckboxDocs',
                component: defineAsyncComponent(() => import('@/Forms/Checkbox/CheckboxDocs.vue')),
            },
            {
                name:      'DataTableDocs',
                component: defineAsyncComponent(() => import('@/Tables/DataTable/DataTableDocs.vue')),
            },
            {
                name:      'DiffDocs',
                component: defineAsyncComponent(() => import('@/Components/Diff/DiffDocs.vue')),
            },
            {
                name:      'DividerDocs',
                component: defineAsyncComponent(() => import('@/Content/Divider/DividerDocs.vue')),
            },
            {
                name:      'InputFileDocs',
                component: defineAsyncComponent(() => import('@/Forms/InputFile/InputFileDocs.vue')),
            },
            {
                name:      'InputTextDocs',
                component: defineAsyncComponent(() => import('@/Forms/InputText/InputTextDocs.vue')),
            },
            {
                name:      'IconsDocs',
                component: defineAsyncComponent(() => import('@/Customisation/Icons/IconsDocs.vue')),
            },
            {
                name:      'JoinDocs',
                component: defineAsyncComponent(() => import('@/Forms/Join/JoinDocs.vue')),
            },
            {
                name:      'LoadingDocs',
                component: defineAsyncComponent(() => import('@/Components/Loading/LoadingDocs.vue')),
            },
            {
                name:      'ListGroupDocs',
                component: defineAsyncComponent(() => import('@/Components/ListGroup/ListGroupDocs.vue')),
            },
            {
                name:      'MaskDocs',
                component: defineAsyncComponent(() => import('@/Content/Mask/MaskDocs.vue')),
            },
            {
                name:      'HeadingDocs',
                component: defineAsyncComponent(() => import('@/Content/Heading/HeadingDocs.vue')),
            },
            {
                name:      'MenuDocs',
                component: defineAsyncComponent(() => import('@/Navigations/Menu/MenuDocs.vue')),
            },
            {
                name:      'ModalDocs',
                component: defineAsyncComponent(() => import('@/Overlays/Modal/ModalDocs.vue')),
            },
            {
                name:      'NavbarDocs',
                component: defineAsyncComponent(() => import('@/Navigations/Navbar/NavbarDocs.vue')),
            },
            {
                name:      'PaginationDocs',
                component: defineAsyncComponent(() => import('@/Navigations/Pagination/PaginationDocs.vue')),
            },
            {
                name:      'PopoverDocs',
                component: defineAsyncComponent(() => import('@/Overlays/Popover/PopoverDocs.vue')),
            },
            {
                name:      'RadioDocs',
                component: defineAsyncComponent(() => import('@/Forms/Radio/RadioDocs.vue')),
            },
            {
                name:      'RangeDocs',
                component: defineAsyncComponent(() => import('@/Forms/Range/RangeDocs.vue')),
            },
            {
                name:      'RadialProgressDocs',
                component: defineAsyncComponent(() => import('@/Components/RadialProgress/RadialProgressDocs.vue')),
            },
            {
                name:      'SkeletonDocs',
                component: defineAsyncComponent(() => import('@/Components/Skeleton/SkeletonDocs.vue')),
            },
            {
                name:      'StatsDocs',
                component: defineAsyncComponent(() => import('@/Components/Stats/StatsDocs.vue')),
            },
            {
                name:      'StatusDocs',
                component: defineAsyncComponent(() => import('@/Components/Status/StatusDocs.vue')),
            },
            {
                name:      'SwapDocs',
                component: defineAsyncComponent(() => import('@/Components/Swap/SwapDocs.vue')),
            },
            {
                name:      'SelectDocs',
                component: defineAsyncComponent(() => import('@/Forms/Select/SelectDocs.vue')),
            },
            {
                name:      'SwitchDocs',
                component: defineAsyncComponent(() => import('@/Forms/Switch/SwitchDocs.vue')),
            },
            {
                name:      'TabsDocs',
                component: defineAsyncComponent(() => import('@/Navigations/Tabs/TabsDocs.vue')),
            },
            {
                name:      'TableDocs',
                component: defineAsyncComponent(() => import('@/Tables/Table/TableDocs.vue')),
            },
            {
                name:      'TextareaDocs',
                component: defineAsyncComponent(() => import('@/Forms/Textarea/TextareaDocs.vue')),
            },
            {
                name:      'TooltipDocs',
                component: defineAsyncComponent(() => import('@/Overlays/Tooltip/TooltipDocs.vue')),
            },
            {
                name:      'SelectThemeController',
                component: FoSelectThemeController,
            },
            {
                name:      'Playground',
                component: defineAsyncComponent(() => import('@/Playground/Playground.vue')),
            },
            {
                name:      'BuildSizeVisualizer',
                component: defineAsyncComponent(() => import('@/Extra/BuildSizeVisualizer/BuildSizeVisualizer.vue')),
            },
            {
                name:      'CodePreview',
                component: CodePreview,
            },
            {
                name:      'CreateFlyonUIVueAppDocs',
                component: defineAsyncComponent(() => import('@/QuickStart/CreateFlyonUIVueApp/CreateFlyonUIVueAppDocs.vue')),
            },
            {
                name:      'ComponentsApi',
                component: defineAsyncComponent(() => import('@/Api/UI/ComponentsApi.vue')),
            },
            {
                name:      'FoKeyboard',
                component: FoKeyboard,
            },
        ]);
    },
} satisfies Theme;

interface RegistrableComponent {
    name:      string;
    component: Component;
}

function registerDocComponents(app: App, components: RegistrableComponent[]): void {
    for (const component of components) {
        app.component(component.name, component.component);
    }
}
