# Getting Started

Make sure that you have [FlyonUI](https://flyonui.com/docs/getting-started/quick-start/)
and [Tailwind CSS](https://tailwindcss.com/) installed.

1. Install `flyonui-vue` as a dependency using NPM or Yarn by running the following command:

```bash
  npm i flyonui-vue
```

or

```bash
  yarn add flyonui-vue
```

2. Add the `flyonui-vue` dist folder to tailwind.config.js content:

```javascript
module.exports = {
    content: [
        'node_modules/flyonui-vue/**/*.{js,jsx,ts,tsx,vue}',
        'node_modules/flyonui/dist/js/*.js'
    ],
    ...
};
```

3. Now you can use `flyonui-vue` anywhere in your project by importing the right component:

```vue
<template>
    <FoButton color="primary">Primary Button</FoButton>
</template>

<script setup>
    import {FoButton} from 'flyonui-vue';
</script>
```
