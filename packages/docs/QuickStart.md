# Getting Started

Make sure that you have [FlyonUI](https://flyonui.com/docs/getting-started/quick-start/)
and [Tailwind CSS](https://tailwindcss.com/) installed.

1. Install `flyonui-vue` as a dependency using NPM or Yarn by running the following command:

<VueCodeHighlighter title="Bash"
                    lang="bash"
                    code="npm i flyonui-vue"
/>

or

<VueCodeHighlighter title="Bash"
                    lang="bash"
                    code="yarn add flyonui-vue"
/>

if you also want to use components with icons, you need to install `@iconify/vue`:

<VueCodeHighlighter title="Bash"
                    lang="bash"
                    code="yarn add @iconify/vue"
/>

2. Add the `flyonui-vue` dist folder to tailwind.config.js content:

<VueCodeHighlighter title="Javascript"
                    lang="js"
                    code="import path from 'node:path';
module.exports = {
    content: [
        'node_modules/flyonui-vue/**/*.{js,jsx,ts,tsx,vue}',
        'node_modules/flyonui/dist/js/*.js',
        `${path.dirname(require.resolve('flyonui-vue'))}/**/*.{html,js,ts,vue}`,
    ],
    ...
};"
/>

3. Now you can use `flyonui-vue` anywhere in your project by importing the components you need.
