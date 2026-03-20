import type { Theme } from 'vitepress';

import type { App, Component }             from 'vue';
import ComponentNotReadyForProductionAlert
    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentNotReadyForProductionAlert.vue';
import TipAlert                     from '@/.vitepress/theme/Components/ComponentDocs/UI/TipAlert.vue';
import { defineAsyncDocsComponent } from '@/.vitepress/theme/Components/Layout/Lib/defineAsyncDocsComponent';
import Layout
    from '@/.vitepress/theme/Components/Layout/UI/Layout.vue';
import CodePreview                                                         from '@/.vitepress/theme/Components/Preview/UI/CodePreview.vue';
import hljsVuePlugin                                                       from '@highlightjs/vue-plugin';
import { loadIcons }                                                       from '@iconify/vue';
import { createFlyonUIVueApp, FoKeyboard, FoSelectThemeController, vMask } from 'flyonui-vue';
import { createPinia }                                                     from 'pinia';
import DefaultTheme                                                        from 'vitepress/theme';
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
                component: defineAsyncDocsComponent(() => import('@/Components/Avatar/AvatarDocs.vue')),
            },
            {
                name:      'KeyboardDocs',
                component: defineAsyncDocsComponent(() => import('@/Content/Keyboard/KeyboardDocs.vue')),
            },
            {
                name:      'AlertDocs',
                component: defineAsyncDocsComponent(() => import('@/Components/Alert/AlertDocs.vue')),
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
                component: defineAsyncDocsComponent(() => import('@/Content/Link/LinkDocs.vue')),
            },
            {
                name:      'BadgeDocs',
                component: defineAsyncDocsComponent(() => import('@/Components/Badge/BadgeDocs.vue')),
            },
            {
                name:      'BlockQuoteDocs',
                component: defineAsyncDocsComponent(() => import('@/Content/BlockQuote/BlockQuoteDocs.vue')),
            },
            {
                name:      'ButtonDocs',
                component: defineAsyncDocsComponent(() => import('@/Components/Button/ButtonDocs.vue')),
            },
            {
                name:      'CheckboxDocs',
                component: defineAsyncDocsComponent(() => import('@/Forms/Checkbox/CheckboxDocs.vue')),
            },
            {
                name:      'DataTableDocs',
                component: defineAsyncDocsComponent(() => import('@/Tables/DataTable/DataTableDocs.vue')),
            },
            {
                name:      'DiffDocs',
                component: defineAsyncDocsComponent(() => import('@/Components/Diff/DiffDocs.vue')),
            },
            {
                name:      'DividerDocs',
                component: defineAsyncDocsComponent(() => import('@/Content/Divider/DividerDocs.vue')),
            },
            {
                name:      'InputFileDocs',
                component: defineAsyncDocsComponent(() => import('@/Forms/InputFile/InputFileDocs.vue')),
            },
            {
                name:      'InputTextDocs',
                component: defineAsyncDocsComponent(() => import('@/Forms/InputText/InputTextDocs.vue')),
            },
            {
                name:      'IconsDocs',
                component: defineAsyncDocsComponent(() => import('@/Customisation/Icons/IconsDocs.vue')),
            },
            {
                name:      'JoinDocs',
                component: defineAsyncDocsComponent(() => import('@/Forms/Join/JoinDocs.vue')),
            },
            {
                name:      'LoadingDocs',
                component: defineAsyncDocsComponent(() => import('@/Components/Loading/LoadingDocs.vue')),
            },
            {
                name:      'ListGroupDocs',
                component: defineAsyncDocsComponent(() => import('@/Components/ListGroup/ListGroupDocs.vue')),
            },
            {
                name:      'MaskDocs',
                component: defineAsyncDocsComponent(() => import('@/Content/Mask/MaskDocs.vue')),
            },
            {
                name:      'HeadingDocs',
                component: defineAsyncDocsComponent(() => import('@/Content/Heading/HeadingDocs.vue')),
            },
            {
                name:      'MenuDocs',
                component: defineAsyncDocsComponent(() => import('@/Navigations/Menu/MenuDocs.vue')),
            },
            {
                name:      'ModalDocs',
                component: defineAsyncDocsComponent(() => import('@/Overlays/Modal/ModalDocs.vue')),
            },
            {
                name:      'NavbarDocs',
                component: defineAsyncDocsComponent(() => import('@/Navigations/Navbar/NavbarDocs.vue')),
            },
            {
                name:      'PaginationDocs',
                component: defineAsyncDocsComponent(() => import('@/Navigations/Pagination/PaginationDocs.vue')),
            },
            {
                name:      'PopoverDocs',
                component: defineAsyncDocsComponent(() => import('@/Overlays/Popover/PopoverDocs.vue')),
            },
            {
                name:      'RadioDocs',
                component: defineAsyncDocsComponent(() => import('@/Forms/Radio/RadioDocs.vue')),
            },
            {
                name:      'RangeDocs',
                component: defineAsyncDocsComponent(() => import('@/Forms/Range/RangeDocs.vue')),
            },
            {
                name:      'RadialProgressDocs',
                component: defineAsyncDocsComponent(() => import('@/Components/RadialProgress/RadialProgressDocs.vue')),
            },
            {
                name:      'SkeletonDocs',
                component: defineAsyncDocsComponent(() => import('@/Components/Skeleton/SkeletonDocs.vue')),
            },
            {
                name:      'StatsDocs',
                component: defineAsyncDocsComponent(() => import('@/Components/Stats/StatsDocs.vue')),
            },
            {
                name:      'StatusDocs',
                component: defineAsyncDocsComponent(() => import('@/Components/Status/StatusDocs.vue')),
            },
            {
                name:      'SwapDocs',
                component: defineAsyncDocsComponent(() => import('@/Components/Swap/SwapDocs.vue')),
            },
            {
                name:      'SelectDocs',
                component: defineAsyncDocsComponent(() => import('@/Forms/Select/SelectDocs.vue')),
            },
            {
                name:      'SwitchDocs',
                component: defineAsyncDocsComponent(() => import('@/Forms/Switch/SwitchDocs.vue')),
            },
            {
                name:      'TabsDocs',
                component: defineAsyncDocsComponent(() => import('@/Navigations/Tabs/TabsDocs.vue')),
            },
            {
                name:      'TableDocs',
                component: defineAsyncDocsComponent(() => import('@/Tables/Table/TableDocs.vue')),
            },
            {
                name:      'TextareaDocs',
                component: defineAsyncDocsComponent(() => import('@/Forms/Textarea/TextareaDocs.vue')),
            },
            {
                name:      'TooltipDocs',
                component: defineAsyncDocsComponent(() => import('@/Overlays/Tooltip/TooltipDocs.vue')),
            },
            {
                name:      'SelectThemeController',
                component: FoSelectThemeController,
            },
            {
                name:      'Playground',
                component: defineAsyncDocsComponent(() => import('@/Playground/Playground.vue')),
            },
            {
                name:      'BuildSizeVisualizer',
                component: defineAsyncDocsComponent(() => import('@/Extra/BuildSizeVisualizer/BuildSizeVisualizer.vue')),
            },
            {
                name:      'CodePreview',
                component: CodePreview,
            },
            {
                name:      'CreateFlyonUIVueAppDocs',
                component: defineAsyncDocsComponent(() => import('@/QuickStart/CreateFlyonUIVueApp/CreateFlyonUIVueAppDocs.vue')),
            },
            {
                name:      'ComponentsApi',
                component: defineAsyncDocsComponent(() => import('@/Api/UI/ComponentsApi.vue')),
            },
            {
                name:      'FoKeyboard',
                component: FoKeyboard,
            },
        ]);

        loadIconifyIcons();
    },
} satisfies Theme;

interface RegistrableComponent {
    name:      string;
    component: Component;
}

function registerDocComponents(app: App, registrableComponents: RegistrableComponent[]): void {
    for (const registrableComponent of registrableComponents) {
        app.component(registrableComponent.name, registrableComponent.component);
    }
}

function loadIconifyIcons(): void {
    loadIcons([
        'bi:chevron-contract',
        'bi:chevron-double-left',
        'bi:chevron-double-right',
        'bi:chevron-expand',
        'carbon:data-table',
        'carbon:insert-page',
        'carbon:user-avatar',
        'ep:select',
        'fluent:color-20-regular',
        'fluent:shapes-20-regular',
        'fluent:text-direction-horizontal-ltr-20-regular',
        'fluent:text-direction-horizontal-rtl-20-regular',
        'gridicons:domains',
        'ic:round-link',
        'ic:sharp-account-circle',
        'ix:hard-reset',
        'la:border-style',
        'line-md:account',
        'line-md:alert',
        'line-md:loading-twotone-loop',
        'mdi:account-child',
        'mdi:account-plus',
        'mdi:badge-account-outline',
        'mdi:chart-bar',
        'mdi:chart-pie',
        'mdi:checkbox-marked',
        'mdi:chevron-down-box',
        'mdi:face-mask',
        'mdi:file-upload',
        'mdi:form-textbox',
        'mdi:format-header-1',
        'mdi:format-list-bulleted',
        'mdi:gesture-tap-button',
        'mdi:keyboard-outline',
        'mdi:menu',
        'mdi:radio-button-checked',
        'mdi:swap-horizontal',
        'mdi:tab',
        'mdi:table',
        'mdi:textarea',
        'mdi:toggle-switch',
        'mdi:tooltip-outline',
        'mdi:tooltip-text',
        'mdi:view-sequential',
        'quill:label',
        'radix-icons:dimensions',
        'radix-icons:slider',
        'solar:user-bold',
        'svg-spinners:3-dots-move',
        'tabler:alert-triangle',
        'tabler:apps',
        'tabler:book',
        'tabler:books',
        'tabler:brand-mailgun',
        'tabler:brand-mastercard',
        'tabler:calendar',
        'tabler:calendar-event',
        'tabler:caret-down-filled',
        'tabler:caret-left-filled',
        'tabler:caret-right-filled',
        'tabler:caret-up-filled',
        'tabler:cash',
        'tabler:check',
        'tabler:layout-sidebar-left-collapse-filled',
        'tabler:layout-sidebar-right-collapse-filled',
        'tabler:chevron-down',
        'tabler:chevron-left',
        'tabler:chevron-right',
        'tabler:chevron-up',
        'tabler:circle-check',
        'tabler:circle-dot',
        'tabler:circle-minus',
        'tabler:circle-plus',
        'tabler:clock',
        'tabler:cloud',
        'tabler:copy',
        'tabler:copy-check',
        'tabler:credit-card',
        'tabler:crown',
        'tabler:current-location',
        'tabler:device-desktop',
        'tabler:device-laptop',
        'tabler:device-mobile',
        'tabler:device-tablet',
        'tabler:dots',
        'tabler:dots-vertical',
        'tabler:folder',
        'tabler:git-compare',
        'tabler:headphones',
        'tabler:home',
        'tabler:info-circle',
        'tabler:list-details',
        'tabler:lock',
        'tabler:mail',
        'tabler:menu-2',
        'tabler:message',
        'tabler:moon',
        'tabler:movie',
        'tabler:package',
        'tabler:pencil',
        'tabler:player-pause',
        'tabler:player-play',
        'tabler:progress',
        'tabler:quote',
        'tabler:rocket',
        'tabler:send',
        'tabler:separator-horizontal',
        'tabler:settings',
        'tabler:settings-bolt',
        'tabler:star',
        'tabler:sun',
        'tabler:trash',
        'tabler:user',
        'tabler:users-group',
        'tabler:volume',
        'tabler:volume-off',
        'tabler:world',
        'tabler:x',
        'tdesign:placeholder-filled',
        'uil:icons',
    ]);
}
