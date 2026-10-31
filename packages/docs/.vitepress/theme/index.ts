import type { EnhanceAppContext, Theme }                                   from 'vitepress';
import type { App, AsyncComponentLoader, Component }                       from 'vue';
import hljsVuePlugin                                                       from '@highlightjs/vue-plugin';
import { loadIcons }                                                       from '@iconify/vue';
import { createFlyonUIVueApp, FoKeyboard, FoSelectThemeController, vMask } from 'flyonui-vue';
import { registerFlyonUIWebComponents }                                    from 'flyonui-web-components';
import { createPinia }                                                     from 'pinia';
import DefaultTheme                                                        from 'vitepress/theme';
import ComponentNotReadyForProductionAlert                                 from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentNotReadyForProductionAlert.vue';
import TipAlert                                                            from '@/.vitepress/theme/Components/ComponentDocs/UI/TipAlert.vue';
import { defineAsyncDocsComponent }                                        from '@/.vitepress/theme/Components/Layout/Lib/defineAsyncDocsComponent';
import Layout                                                              from '@/.vitepress/theme/Components/Layout/UI/Layout.vue';
import CodePreview                                                         from '@/.vitepress/theme/Components/Preview/UI/CodePreview.vue';
import './index.css';
import 'highlight.js/styles/github-dark-dimmed.css';
import 'highlight.js/lib/common';
import '@angular/compiler';

type AsyncDocsComponentImport = ReturnType<AsyncComponentLoader<Component>>;

export default {
    extends:    DefaultTheme,
    Layout,
    enhanceApp: async ({ app }: EnhanceAppContext): Promise<void> => {
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
            registerFlyonUIWebComponents();
        }

        app.use(createPinia()).use(hljsVuePlugin);

        registerDocComponents(app, [
            {
                name:      'AvatarDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Components/Avatar/AvatarDocs.vue')),
            },
            {
                name:      'ClassAndStyleDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Customisation/ClassAndStyle/ClassAndStyleDocs.vue')),
            },
            {
                name:      'KeyboardDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Content/Keyboard/KeyboardDocs.vue')),
            },
            {
                name:      'AlertDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Components/Alert/AlertDocs.vue')),
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
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Content/Link/LinkDocs.vue')),
            },
            {
                name:      'BadgeDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Components/Badge/BadgeDocs.vue')),
            },
            {
                name:      'BlockQuoteDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Content/BlockQuote/BlockQuoteDocs.vue')),
            },
            {
                name:      'BrowserDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Mockups/Browser/BrowserDocs.vue')),
            },
            {
                name:      'CodeDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Mockups/Code/CodeDocs.vue')),
            },
            {
                name:      'ButtonDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Components/Button/ButtonDocs.vue')),
            },
            {
                name:      'CheckboxDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Forms/Checkbox/CheckboxDocs.vue')),
            },
            {
                name:      'DataTableDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Tables/DataTable/DataTableDocs.vue')),
            },
            {
                name:      'DiffDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Components/Diff/DiffDocs.vue')),
            },
            {
                name:      'DividerDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Content/Divider/DividerDocs.vue')),
            },
            {
                name:      'InputFileDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Forms/InputFile/InputFileDocs.vue')),
            },
            {
                name:      'InputTextDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Forms/InputText/InputTextDocs.vue')),
            },
            {
                name:      'IconsDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Customisation/Icons/IconsDocs.vue')),
            },
            {
                name:      'JoinDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Forms/Join/JoinDocs.vue')),
            },
            {
                name:      'LoadingDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Components/Loading/LoadingDocs.vue')),
            },
            {
                name:      'ListGroupDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Components/ListGroup/ListGroupDocs.vue')),
            },
            {
                name:      'MaskDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Content/Mask/MaskDocs.vue')),
            },
            {
                name:      'HeadingDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Content/Heading/HeadingDocs.vue')),
            },
            {
                name:      'MenuDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Navigations/Menu/MenuDocs.vue')),
            },
            {
                name:      'ModalDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Overlays/Modal/ModalDocs.vue')),
            },
            {
                name:      'NavbarDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Navigations/Navbar/NavbarDocs.vue')),
            },
            {
                name:      'PaginationDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Navigations/Pagination/PaginationDocs.vue')),
            },
            {
                name:      'PopoverDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Overlays/Popover/PopoverDocs.vue')),
            },
            {
                name:      'RadioDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Forms/Radio/RadioDocs.vue')),
            },
            {
                name:      'RangeDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Forms/Range/RangeDocs.vue')),
            },
            {
                name:      'RadialProgressDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Components/RadialProgress/RadialProgressDocs.vue')),
            },
            {
                name:      'SkeletonDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Components/Skeleton/SkeletonDocs.vue')),
            },
            {
                name:      'StatsDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Components/Stats/StatsDocs.vue')),
            },
            {
                name:      'StatusDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Components/Status/StatusDocs.vue')),
            },
            {
                name:      'SwapDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Components/Swap/SwapDocs.vue')),
            },
            {
                name:      'SelectDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Forms/Select/SelectDocs.vue')),
            },
            {
                name:      'SwitchDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Forms/Switch/SwitchDocs.vue')),
            },
            {
                name:      'TabsDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Navigations/Tabs/TabsDocs.vue')),
            },
            {
                name:      'TableDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Tables/Table/TableDocs.vue')),
            },
            {
                name:      'TextareaDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Forms/Textarea/TextareaDocs.vue')),
            },
            {
                name:      'TextDirectionDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Customisation/TextDirection/TextDirectionDocs.vue')),
            },

            {
                name:      'TooltipDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Overlays/Tooltip/TooltipDocs.vue')),
            },
            {
                name:      'SelectThemeController',
                component: FoSelectThemeController,
            },
            {
                name:      'Playground',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Playground/Playground.vue')),
            },
            {
                name:      'BuildSizeVisualizer',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Extra/BuildSizeVisualizer/BuildSizeVisualizer.vue')),
            },
            {
                name:      'CodePreview',
                component: CodePreview,
            },
            {
                name:      'CreateFlyonUIVueAppDocs',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/QuickStart/CreateFlyonUIVueApp/CreateFlyonUIVueAppDocs.vue')),
            },
            {
                name:      'ComponentsApi',
                component: defineAsyncDocsComponent((): AsyncDocsComponentImport => import('@/Api/UI/ComponentsApi.vue')),
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
        'logos:html-5',
        'logos:react',
        'logos:vue',
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
        'tabler:brand-facebook',
        'tabler:brand-github',
        'tabler:brand-linkedin',
        'tabler:brand-mailgun',
        'tabler:brand-mastercard',
        'tabler:brand-x',
        'tabler:calendar',
        'tabler:calendar-event',
        'tabler:caret-down-filled',
        'tabler:caret-left-filled',
        'tabler:caret-right-filled',
        'tabler:caret-up-filled',
        'tabler:cash',
        'tabler:check',
        'tabler:chevron-down',
        'tabler:chevron-left',
        'tabler:chevron-right',
        'tabler:chevron-up',
        'tabler:circle-check',
        'tabler:circle-dot',
        'tabler:circle-minus',
        'tabler:circle-plus',
        'tabler:circle-x-filled',
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
        'tabler:search',
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
