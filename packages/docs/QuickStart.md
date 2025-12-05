# Getting Started

## Installation

### New Projects

If you are starting a new `Vite` + `Vue` project you can use our automatic flyonui-vue installation tool 
[create-flyonui-vue](https://github.com/michaelcozzolino/flyonui-vue/blob/2.x/packages/create-flyonui-vue/README.md):

<CodePreview lang="bash"
             code="yarn create flyonui-vue"
/>

### Already existing Projects

Make sure that you have [FlyonUI](https://flyonui.com/docs/getting-started/quick-start/)
and [Tailwind CSS](https://tailwindcss.com/) installed.

1. Install `flyonui-vue` as a dependency using NPM or Yarn by running the following command:

<CodePreview lang="bash" 
             code="npm i flyonui-vue"
/>

or

<CodePreview lang="bash"
             code="yarn add flyonui-vue"
/>

in order to use icons, `@iconify/vue` is required:

<CodePreview lang="bash"
             code="yarn add @iconify/vue"
/>

2. Import styles:

<CodePreview lang="css"
             code="@import 'flyonui-vue/index.css';"
/>

3. source the tailwind components' classes:

<CodePreview lang="css"
             code="@source '../../node_modules/flyonui-vue';"
/>

4. Now you can use `flyonui-vue` anywhere in your project by importing the components you need.

## Configuration (Optional)

### Usage

FlyonUI Vue comes with a plugin that allows to customize the behaviour of default values. In order to use it just import 
it and use through your Vue app instance:

<CreateFlyonUIVueAppDocs />

As you can see you have two properties `global` and `components`. The first one will let you configure the style of all
components, while the second one will let you override it depending on the specific component you want it to be overridden.
With the configuration above you will automatically have a default `accent` color and `small` size for all the 
components supporting them, except that the `FoButton.vue` will have a `large` size and the `FoBadge.vue` will have an
`info` color as defaults. By doing this you will be able to use your vue components without specifying those props, 
for example:

<CodePreview title="CustomButton.vue"
             lang="js"
             code="<FoButton>Large Accent Button</FoButton>"
/>

<br>

<CodePreview title="CustomBadge.vue"
             lang="js"
             code="<FoBadge>Small Info Badge</FoBadge>"
/>

A common use case is with icons and helper text, some components supports those to be positioned, so that you can either have 
an icon/helper-text on the left or on the right. In the provided configuration we specified to have the icon on all 
the components on the left and the helper text on the right, when available. Without configuration, you might end up in having a more 
complex structure for the icon and helper text.
We suggest you to play with the configuration settings menu in the top right corner of this website and check the 
changes around the websites and the docs of each component.
If you do not use any configuration at all the [default values](https://github.com/michaelcozzolino/flyonui-vue/blob/2.x/packages/core/src/Shared/UseFlyonUIVueAppConfig/Lib/CreateFlyonUIVueApp.ts) 
are used.


### On demand manipulation
The configuration is saved into the local storage under the `flyonui-vue-config` key and provided through the vue app.
A Vue Ref is exposed and can be manipulated on demand based on your desired behaviour if a dynamic configuration is needed.
All you need to do is to use the composable:

<CodePreview title="Vue"
             lang="js"
             code="const config = useFlyonUIVueAppConfig();"
/>

if you want to be able to manipulate the configuration, where the initial one is the default one, you will still have to 
use the plugin:

<CodePreview title="App.ts"
             lang="js"
             code="app.use(createFlyonUIVueApp, {});"
/>
