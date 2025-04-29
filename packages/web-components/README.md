# flyonui-web-components
web components built in VueJS.

<a href="https://npmjs.com/package/flyonui-web-components">
    <img src="https://badgen.net/npm/v/flyonui-web-components" alt="npm package">
</a>

<a href="https://www.npmjs.com/package/flyonui-web-components">
    <img src="https://img.shields.io/npm/dt/flyonui-web-components.svg" alt="Total Downloads">
</a>

## Getting Started

This is an experimental package and its api might change. DO NOT use on production.

in any non vue project install the package:

`yarn add flyonui-web-components`

you can start using the flyonui web components as if they are normal html elements. Check the core package docs to see
the available components. Note: in web components the web components' names MUST be in kebab-case. 

So if in Vue we use it as:

```vue
<FoButton color="secondary">secondary button</FoButton>
```

as a web component we use it as:

```html
<fo-button color="secondary">secondary button</fo-button>
```
