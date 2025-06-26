import type { DefaultTheme } from 'vitepress';

export function getSidebarItems(): DefaultTheme.SidebarItem[] {
    return [
        {
            text:  'Getting Started',
            items: [
                {
                    base:  '/',
                    items: [
                        {
                            text: 'Quick Start',
                            link: 'quick-start',
                        },
                    ],
                },
            ],
        },
        {
            text:  'Vue Components',
            items: [
                {
                    text:  'Customisation',
                    base:  '/customisation/',
                    items: [
                        { text: 'Icons', link: 'icons' },
                    ],
                },
                {
                    text:  'Content',
                    base:  '/content/',
                    items: [
                        { text: 'Link', link: 'link' },
                        { text: 'Keyboard', link: 'keyboard' },
                        { text: 'Mask', link: 'mask' },
                        { text: 'Heading', link: 'heading' },
                    ],
                },
                {
                    text:  'Components',
                    base:  '/components/',
                    items: [
                        // { text: 'Accordion', link: 'accordion' },
                        // { text: 'Alert', link: 'alert' },
                        // { text: 'Avatar', link: 'avatar' },
                        { text: 'Badge', link: 'badge' },
                        { text: 'Button', link: 'button' },
                        // { text: 'Card', link: 'card' },
                        // { text: 'Carousel', link: 'carousel' },
                        // { text: 'Chat Bubble', link: 'chat-bubble' },
                        // { text: 'Collapse', link: 'collapse' },
                        // { text: 'Diff', link: 'diff' },
                        // { text: 'Indicator', link: 'indicator' },
                        { text: 'List Group', link: 'list-group' },
                        { text: 'Loading', link: 'loading' },
                        // { text: 'Progress', link: 'progress' },
                        // { text: 'Radial Progress', link: 'radial-progress' },
                        // { text: 'Remove Element', link: 'remove-element' },
                        // { text: 'Skeleton', link: 'skeleton' },
                        // { text: 'Stack', link: 'stack' },
                        { text: 'Stats', link: 'stats' },
                        { text: 'Swap', link: 'swap' },
                        // { text: 'Theme Controller', link: 'theme-controller' },
                        // { text: 'Timeline', link: 'timeline' },
                        // { text: 'Tree View', link: 'tree-view' },
                    ],
                },
                {
                    text:  'Navigations',
                    base:  '/navigations/',
                    items: [
                        { text: 'Menu', link: 'menu' },
                        { text: 'Navbar', link: 'navbar' },
                    ],
                },
                {
                    text:  'Overlays',
                    base:  '/overlays/',
                    items: [
                        { text: 'Popover', link: 'popover' },
                        { text: 'Tooltip', link: 'tooltip' },
                    ],
                },
                {
                    text:  'Forms',
                    base:  '/forms/',
                    items: [
                        { text: 'Checkbox', link: 'checkbox' },
                        { text: 'Input Text', link: 'input-text' },
                        { text: 'Join', link: 'join' },
                        { text: 'Select', link: 'select' },
                        { text: 'Textarea', link: 'textarea' },
                    ],
                },
            ],
        },
        {
            items: [
                {
                    text:  'Extra',
                    base:  '/extra/',
                    items: [
                        {
                            text: 'Build Size Visualizer',
                            link: 'build-size-visualizer',
                        },
                    ],
                },
            ],
        },
    ];
}
