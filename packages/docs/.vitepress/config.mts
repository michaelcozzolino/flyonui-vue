import type { DefaultTheme } from 'vitepress';
import { defineConfig }      from 'vitepress';

export default defineConfig({
    base: '/flyonui-vue/',
    rewrites(id) {
        // PascalCase to kebab-case for route urls
        return id.replace(/([a-z0–9])([A-Z])/g, '$1-$2').toLowerCase();
    },
    title:     'FlyonUI Vue',
    cleanUrls: true,
    head:      [
        ['link', { rel: 'icon', type: 'image/svg', href: '/assets/logo.svg' }],
    ],
    themeConfig: {
        sidebar: getSidebar(),
        logo:    '/assets/logo.svg',
        search:  {
            provider: 'local',
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/michaelcozzolino/flyonui-vue' },
        ],

        footer: {
            message:   'Released under the MIT License.',
            copyright: '© 2025 FlyonUI Vue', // todo: add automatic date change
        },
    },
});

function getSidebar(): DefaultTheme.SidebarItem[] {
    return [
        {
            text:  'Getting Started',
            items: [
                {
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
                        // { text: 'List Group', link: 'list-group' },
                        // { text: 'Loading', link: 'loading' },
                        // { text: 'Progress', link: 'progress' },
                        // { text: 'Radial Progress', link: 'radial-progress' },
                        // { text: 'Remove Element', link: 'remove-element' },
                        // { text: 'Skeleton', link: 'skeleton' },
                        // { text: 'Stack', link: 'stack' },
                        { text: 'Stat List', link: 'stat-list' },
                        // { text: 'Swap', link: 'swap' },
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
                    text:  'Forms',
                    base:  '/forms/',
                    items: [
                        { text: 'Select', link: 'select' },
                    ],
                },
            ],
        },
    ];
}
