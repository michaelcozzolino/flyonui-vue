import { kebabCase }       from 'change-case';
import { defineConfig }    from 'vitepress';
import { getSidebarItems } from './theme/Shared/Config/Lib/getSidebarItems';

export default defineConfig({
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
        [
            'link',
            { rel: 'icon', type: 'image/svg', href: '/assets/logo.svg' },
        ],
        [
            'script',
            { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-5TX4XTLE62' },
        ],
        [
            'script',
            {},
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5TX4XTLE62');`,
        ],
    ],
    themeConfig: {
        outline: 'deep',
        sidebar: getSidebarItems(),
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
