import type { SidebarBadge, SidebarItem } from '@/.vitepress/theme/Components/Layout/Features/Sidebar/Types/Sidebar';
import type { ComputedRef }               from 'vue';
import { flyonUIVueNextPath }             from '@/Next/Lib/Next';
import { computed }                       from 'vue';

export function useSidebarItems(): ComputedRef<SidebarItem[]> {
    return computed((): SidebarItem[] => {
        const _unreleasedBadge: SidebarBadge = {
            color: 'warning',
            text:  'Unreleased',
        };

        return [
            {
                text:     'Getting Started',
                children: [
                    {
                        text:     'Quick Start',
                        to:       '/quick-start',
                        icon:     'tabler:rocket',
                        children: [],
                    },
                ],
            },
            {
                text:     'Customization',
                children: [
                    {
                        text:     'Icons',
                        to:       '/customisation/icons',
                        icon:     'uil:icons',
                        children: [],
                    },
                ],
            },
            {
                text:     'Content',
                children: [
                    {
                        text:     'Link',
                        to:       '/content/link',
                        icon:     'ic:round-link',
                        children: [],
                    },
                    {
                        text:     'Keyboard',
                        to:       '/content/keyboard',
                        icon:     'mdi:keyboard-outline',
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
                text:     'Components',
                children: [
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
                        text:     'Stats',
                        to:       '/components/stats',
                        icon:     'mdi:chart-bar',
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
                text:     'Navigations',
                children: [
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
                text:     'Overlays',
                children: [
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
                text:     'Forms',
                children: [
                    {
                        text:     'Checkbox',
                        to:       '/forms/checkbox',
                        icon:     'mdi:checkbox-marked',
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
                text:     'Tables',
                children: [
                    {
                        text:     'Table',
                        to:       '/tables/table',
                        icon:     'mdi:table',
                        children: [],
                    },
                    {
                        text:     'Data Table',
                        to:       `${flyonUIVueNextPath}/tables/data-table`,
                        icon:     'carbon:data-table',
                        children: [],
                        badge:    _unreleasedBadge,
                    },
                ],
            },
            {
                text:     'Extra',
                children: [
                    {
                        text:     'Build Size Visualizer',
                        to:       '/extra/build-size-visualizer',
                        icon:     'mdi:chart-pie',
                        children: [],
                    },
                ],
            },
        ];
    });
}
