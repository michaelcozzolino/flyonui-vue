import type { DefaultTheme } from 'vitepress';
import { kebabCase }         from 'change-case';
import { defineConfig }      from 'vitepress';

export default defineConfig({
    base:     '/flyonui-vue/',
    rewrites: (id) => {
        const format = '.md';

        // E.G: Forms/InputText.md
        return id.replace(format, '') // removes .md because the kebabCase function would replace the "." with "-": Forms/InputText
            .split('/') // ['Forms', 'InputText']
            .map(id => kebabCase(id)) // ['forms', 'input-text']
            .join('/') // forms/input-text
            + format; // forms/input-text.md
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
                    text:  'Content',
                    base:  '/content/',
                    items: [
                        { text: 'Link', link: 'link' },
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
