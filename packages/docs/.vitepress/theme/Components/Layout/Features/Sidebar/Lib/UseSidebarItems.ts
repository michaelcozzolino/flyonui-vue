import type {
    ParentSidebarItem,
    SidebarBadge,
}                   from '@/.vitepress/theme/Components/Layout/Features/Sidebar/Types/Sidebar';
import type { Ref } from 'vue';
import { ref }      from 'vue';

export function useSidebarItems(): Ref<ParentSidebarItem[]> {
    const _unreleasedBadge: SidebarBadge = {
        color: 'warning',
        text:  'Unreleased',
    };

    return ref<ParentSidebarItem[]>([
        {
            text:        'Getting Started',
            isCollapsed: false,
                children: [
                    {
                        text:     'Quick Start',
                        to:       '/quick-start',
                        icon:     'tabler:rocket',
                        children: [],
                    },
                    {
                        text:     'Upgrade Guide',
                        to:       '/upgrade-guide',
                        icon:     'tabler:arrow-up-circle',
                        children: [],
                    },
                ],
            },
            {
                text:     'Customization',
            isCollapsed: false,    children: [
                    {
                        text:     'Icons',
                        to:       '/customisation/icons',
                        icon:     'uil:icons',
                        children: [],
                    },
                    {
                        text:     'Class and Style',
                        to:       '/customisation/class-and-style',
                        icon:     'logos:tailwindcss-icon',
                        children: [],
                    },
                    {
                        text:     'Text Direction (LTR | RTL)',
                        to:       '/customisation/text-direction',
                        icon:     'fluent:text-direction-horizontal-rtl-20-regular',
                    children: [],
                },
            ],
        },
        {
            text:        'Content',
            isCollapsed: false,
            children:    [
                {
                    text:     'BlockQuote',
                    to:       '/content/block-quote',
                    icon:     'tabler:quote',
                    children: [],
                },
                {
                    text:     'Divider',
                    to:       '/content/divider',
                    icon:     'tabler:separator-horizontal',
                    children: [],
                },
                {
                    text:     'Keyboard',
                    to:       '/content/keyboard',
                    icon:     'mdi:keyboard-outline',
                    children: [],
                },
                {
                    text:     'Link',
                    to:       '/content/link',
                    icon:     'ic:round-link',
                    children: [],
                },
                {
                    text:     'Mask',
                    to:       '/content/mask',
                    icon:     'mdi:face-mask',
                    children: [],
                },
                {
                    text:     'Heading',
                    to:       '/content/heading',
                    icon:     'mdi:format-header-1',
                    children: [],
                },
            ],
        },
        {
            text:        'Components',
            isCollapsed: false,
            children:    [
                {
                    text:     'Alert',
                    to:       '/components/alert',
                    icon:     'line-md:alert',
                    children: [],
                },
                {
                    text:     'Avatar',
                    to:       '/components/avatar',
                    icon:     'carbon:user-avatar',
                    children: [],
                },
                {
                    text:     'Badge',
                    to:       '/components/badge',
                    icon:     'mdi:badge-account-outline',
                    children: [],
                },
                {
                    text:     'Button',
                    to:       '/components/button',
                    icon:     'mdi:gesture-tap-button',
                    children: [],
                },
                {
                    text:     'Diff',
                    to:       '/components/diff',
                    icon:     'tabler:git-compare',
                    children: [],
                },
                {
                    text:     'List Group',
                    to:       '/components/list-group',
                    icon:     'mdi:format-list-bulleted',
                    children: [],
                },
                {
                    text:     'Loading',
                    to:       '/components/loading',
                    icon:     'line-md:loading-twotone-loop',
                    children: [],
                },
                {
                    text:     'Radial Progress',
                    to:       '/components/radial-progress',
                    icon:     'tabler:progress',
                    children: [],
                },
                {
                    text:     'Skeleton',
                    to:       '/components/skeleton',
                    icon:     'tdesign:placeholder-filled',
                    children: [],
                },
                {
                    text:     'Stats',
                    to:       '/components/stats',
                    icon:     'mdi:chart-bar',
                    children: [],
                },
                {
                    text:     'Status',
                    to:       '/components/status',
                    icon:     'tabler:circle-dot',
                    children: [],
                },
                {
                    text:     'Swap',
                    to:       '/components/swap',
                    icon:     'mdi:swap-horizontal',
                    children: [],
                },
            ],
        },
        {
            text:        'Navigations',
            isCollapsed: false,
            children:    [
                {
                    text:     'Menu',
                    to:       '/navigations/menu',
                    icon:     'mdi:menu',
                    children: [],
                },
                {
                    text:     'Navbar',
                    to:       '/navigations/navbar',
                    icon:     'mdi:view-sequential',
                    children: [],
                },
                {
                    text:     'Pagination',
                    to:       '/navigations/pagination',
                    icon:     'carbon:insert-page',
                    children: [],
                },
                {
                    text:     'Tabs',
                    to:       '/navigations/tabs',
                    icon:     'mdi:tab',
                    children: [],
                },
            ],
        },
        {
            text:        'Overlays',
            isCollapsed: false,
            children:    [
                {
                    text:     'Modal',
                    to:       '/overlays/modal',
                    icon:     'mdi-window-maximize',
                    children: [],
                },
                {
                    text:     'Popover',
                    to:       '/overlays/popover',
                    icon:     'mdi:tooltip-outline',
                    children: [],
                },
                {
                    text:     'Tooltip',
                    to:       '/overlays/tooltip',
                    icon:     'mdi:tooltip-text',
                    children: [],
                },
            ],
        },
        {
            text:        'Forms',
            isCollapsed: false,
            children:    [
                {
                    text:     'Checkbox',
                    to:       '/forms/checkbox',
                    icon:     'mdi:checkbox-marked',
                    children: [],
                },
                {
                    text:     'Input File',
                    to:       '/forms/input-file',
                    icon:     'mdi:file-upload',
                    children: [],
                },
                {
                    text:     'Input Text',
                    to:       '/forms/input-text',
                    icon:     'mdi:form-textbox',
                    children: [],
                },
                {
                    text:     'Join',
                    to:       '/forms/join',
                    icon:     'mdi:account-plus',
                    children: [],
                },
                {
                    text:     'Radio',
                    to:       '/forms/radio',
                    icon:     'mdi:radio-button-checked',
                    children: [],
                },
                {
                    text:     'Range',
                    to:       '/forms/range',
                    icon:     'radix-icons:slider',
                    children: [],
                },
                {
                    text:     'Select',
                    to:       '/forms/select',
                    icon:     'mdi:chevron-down-box',
                    children: [],
                },
                {
                    text:     'Switch',
                    to:       '/forms/switch',
                    icon:     'mdi:toggle-switch',
                    children: [],
                },
                {
                    text:     'Textarea',
                    to:       '/forms/textarea',
                    icon:     'mdi:textarea',
                    children: [],
                },
            ],
        },
        {
            text:        'Tables',
            isCollapsed: false,
            children:    [
                {
                    text:     'Table',
                    to:       '/tables/table',
                    icon:     'mdi:table',
                    children: [],
                },
                {
                    text:     'Data Table',
                    to:       '/tables/data-table',
                    icon:     'carbon:data-table',
                    children: [],
                },
            ],
        },
        {
            text:        'Extra',
            isCollapsed: false,
            children:    [
                {
                    text:     'Build Size Visualizer',
                    to:       '/extra/build-size-visualizer',
                    icon:     'mdi:chart-pie',
                    children: [],
                },
            ],
        },
    ]);
}
