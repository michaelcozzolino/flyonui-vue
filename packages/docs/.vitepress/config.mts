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
            { async: '', src: 'https://www.googletagmanager.com/ns.html?id=GTM-NMKFSDZW' },
        ],
        [
            'script',
            {},
            `<!-- Google Tag Manager -->
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NMKFSDZW');
            <!-- End Google Tag Manager -->`,
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
