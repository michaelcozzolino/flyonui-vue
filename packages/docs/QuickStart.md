# Getting Started

### New Projects

If you are starting a new `Vite` + `Vue` project you can use our automatic flyonui-vue installation tool 
[create-flyonui-vue](https://github.com/michaelcozzolino/flyonui-vue/blob/2.x/packages/create-flyonui-vue/README.md):

<VueCodeHighlighter title="Bash"
                    lang="bash"
                    code="yarn create flyonui-vue"
/>

### Already existing Projects

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

in order to use icons, `@iconify/vue` is required:

<VueCodeHighlighter title="Bash"
                    lang="bash"
                    code="yarn add @iconify/vue"
/>

2. Import styles:

<VueCodeHighlighter title="Bash"
                    lang="css"
                    code="@import 'flyonui-vue/index.css';"
/>

3. Now you can use `flyonui-vue` anywhere in your project by importing the components you need.
