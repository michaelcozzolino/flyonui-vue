# flyonui-vue
VueJS components built on top of the [flyonui](https://github.com/themeselection/flyonui) framework. 

<a href="https://npmjs.com/package/flyonui-vue">
    <img src="https://badgen.net/npm/v/flyonui-vue" alt="npm package">
</a>

<a href="https://www.npmjs.com/package/flyonui-vue">
    <img src="https://img.shields.io/npm/dt/flyonui-vue.svg" alt="Total Downloads">
</a>

## Quick start

To quickly create a new `Vite` + `Vue` + `FlyonUI Vue` project you can use our automatic `flyonui-vue` installation tool
[create-flyonui-vue](https://github.com/michaelcozzolino/flyonui-vue/blob/2.x/packages/create-flyonui-vue/README.md):

```sh
yarn create flyonui-vue
```

## Documentation

This monorepo contains the following:

### Public packages
1) [flyonui-vue (core)](https://michaelcozzolino.github.io/flyonui-vue): The core set of Vue components built on top of [FlyonUI](https://github.com/themeselection/flyonui).
2) [create-flyonui-vue](https://github.com/michaelcozzolino/flyonui-vue/tree/2.x/packages/create-flyonui-vue): A tool that allows you to quickly create a new and already set `Vite` + `Vue` + `FlyonUI-vue` project.
3) [flyonui-web-components](https://github.com/michaelcozzolino/flyonui-vue/tree/2.x/packages/web-components) (**experimental**): Framework agnostic `FlyonUI Vue` web components, built for a better web.

### Private packages
1) [docs](https://github.com/michaelcozzolino/flyonui-vue/tree/2.x/packages/docs): The documentation of the `Public Packages` built with `Vitepress`.
2) [scripts](https://github.com/michaelcozzolino/flyonui-vue/tree/2.x/packages/scripts): A set of useful scripts for development.

## Roadmap

<table style="width: fit-content; max-width: 100%; margin-inline: auto;">
    <thead>
        <tr><th colspan="4">FlyonUI Vue roadmap</th></tr>
        <tr><th>Section</th><th>FlyonUI</th><th>Status</th><th>FlyonUI Vue</th></tr>
    </thead>
    <tbody>
        <tr><th scope="rowgroup" rowspan="8" style="text-align: center; vertical-align: middle;">Content</th><td><a href="https://flyonui.com/docs/content/blockquote/">Blockquote</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/content/block-quote">BlockQuote</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/content/divider/">Divider</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/content/divider">Divider</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/content/keyboard/">Keyboard</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/content/keyboard">Keyboard</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/content/link/">Link</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/content/link">Link</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/content/list/">List</a></td><td><strong><span style="color: #b91c1c">Not planned 🚫</span></strong></td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/content/mask/">Mask</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/content/mask">Mask</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/content/typography/">Typography</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/content/heading">Heading</a></td></tr>
        <tr><td style="background-color: color-mix(in srgb, var(--vp-c-brand-1) 20%, var(--vp-c-bg));"><strong>Coverage</strong></td><td style="background-color: color-mix(in srgb, var(--vp-c-brand-1) 20%, var(--vp-c-bg));"><strong>6/6 implemented (100%)</strong></td><td style="background-color: color-mix(in srgb, var(--vp-c-brand-1) 20%, var(--vp-c-bg));"><strong>6/6 documented (100%)</strong></td></tr>
        <tr><th scope="rowgroup" rowspan="25" style="text-align: center; vertical-align: middle;">Components</th><td><a href="https://flyonui.com/docs/components/accordion/">Accordion</a></td><td>No matching Vue component found</td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/components/alert/">Alert</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/components/alert">Alert</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/components/avatar/">Avatar</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/components/avatar">Avatar</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/components/badge/">Badge</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/components/badge">Badge</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/components/button/">Button</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/components/button">Button</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/components/card/">Card</a></td><td>No matching Vue component found</td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/components/carousel/">Carousel</a></td><td>No matching Vue component found</td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/components/chat-bubble/">Chat Bubble</a></td><td>No matching Vue component found</td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/components/collapse/">Collapse</a></td><td><strong><span style="color: #b91c1c">Not planned 🚫</span></strong></td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/components/diff/">Diff</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/components/diff">Diff</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/components/indicator/">Indicator</a></td><td>No matching Vue component found</td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/components/list-group/">List Group</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/components/list-group">List Group</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/components/loading/">Loading</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/components/loading">Loading</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/components/progress/">Progress</a></td><td>No matching Vue component found</td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/components/radial-progress/">Radial Progress</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/components/radial-progress">Radial Progress</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/components/remove-element/">Remove Element</a></td><td><strong><span style="color: #b91c1c">Not planned 🚫</span></strong></td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/components/skeleton/">Skeleton</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/components/skeleton">Skeleton</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/components/stack/">Stack</a></td><td>No matching Vue component found</td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/components/stat/">Stat</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/components/stats">Stats</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/components/status/">Status</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/components/status">Status</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/components/swap/">Swap</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/components/swap">Swap</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/components/theme-controller/">Theme Controller</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/components/timeline/">Timeline</a></td><td>No matching Vue component found</td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/components/tree-view/">Tree View</a></td><td>No matching Vue component found</td><td>—</td></tr>
        <tr><td style="background-color: color-mix(in srgb, var(--vp-c-brand-1) 20%, var(--vp-c-bg));"><strong>Coverage</strong></td><td style="background-color: color-mix(in srgb, var(--vp-c-brand-1) 20%, var(--vp-c-bg));"><strong>13/22 implemented (59.1%)</strong></td><td style="background-color: color-mix(in srgb, var(--vp-c-brand-1) 20%, var(--vp-c-bg));"><strong>12/22 documented (54.5%)</strong></td></tr>
        <tr><th scope="rowgroup" rowspan="10" style="text-align: center; vertical-align: middle;">Navigations</th><td><a href="https://flyonui.com/docs/navigations/breadcrumb/">Breadcrumb</a></td><td>No matching Vue component found</td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/navigations/footer/">Footer</a></td><td>No matching Vue component found</td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/navigations/menu/">Menu</a></td><td><strong><span style="color: #15803d">Implemented ✅</span> <span style="color: #b45309">Not production ready ⚠️</span></strong></td><td><a href="https://flyonui-vue.com/navigations/menu">Menu</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/navigations/navbar/">Navbar</a></td><td><strong><span style="color: #15803d">Implemented ✅</span> <span style="color: #b45309">Not production ready ⚠️</span></strong></td><td><a href="https://flyonui-vue.com/navigations/navbar">Navbar</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/navigations/pagination/">Pagination</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/navigations/pagination">Pagination</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/navigations/scrollspy/">Scrollspy</a></td><td><strong><span style="color: #b91c1c">Not planned 🚫</span></strong></td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/navigations/sidebar/">Sidebar</a></td><td>No matching Vue component found</td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/navigations/stepper/">Stepper</a></td><td>No matching Vue component found</td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/navigations/tabs-pills/">Tabs & Pills</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/navigations/tabs">Tabs</a></td></tr>
        <tr><td style="background-color: color-mix(in srgb, var(--vp-c-brand-1) 20%, var(--vp-c-bg));"><strong>Coverage</strong></td><td style="background-color: color-mix(in srgb, var(--vp-c-brand-1) 20%, var(--vp-c-bg));"><strong>4/8 implemented (50%)</strong></td><td style="background-color: color-mix(in srgb, var(--vp-c-brand-1) 20%, var(--vp-c-bg));"><strong>4/8 documented (50%)</strong></td></tr>
        <tr><th scope="rowgroup" rowspan="7" style="text-align: center; vertical-align: middle;">Overlays</th><td><a href="https://flyonui.com/docs/overlays/context-menu/">Context Menu</a></td><td>No matching Vue component found</td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/overlays/drawer/">Drawer (Offcanvas)</a></td><td>No matching Vue component found</td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/overlays/dropdown/">Dropdown</a></td><td>No matching Vue component found</td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/overlays/modal/">Modal</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/overlays/modal">Modal</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/overlays/popover/">Popover</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/overlays/popover">Popover</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/overlays/tooltip/">Tooltip</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/overlays/tooltip">Tooltip</a></td></tr>
        <tr><td style="background-color: color-mix(in srgb, var(--vp-c-brand-1) 20%, var(--vp-c-bg));"><strong>Coverage</strong></td><td style="background-color: color-mix(in srgb, var(--vp-c-brand-1) 20%, var(--vp-c-bg));"><strong>3/6 implemented (50%)</strong></td><td style="background-color: color-mix(in srgb, var(--vp-c-brand-1) 20%, var(--vp-c-bg));"><strong>3/6 documented (50%)</strong></td></tr>
        <tr><th scope="rowgroup" rowspan="11" style="text-align: center; vertical-align: middle;">Forms</th><td><a href="https://flyonui.com/docs/forms/checkbox/">Checkbox</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/forms/checkbox">Checkbox</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/forms/file-input/">File Input</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/forms/input-file">Input File</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/forms/filter/">Filter</a></td><td><strong><span style="color: #b91c1c">Not planned 🚫</span></strong></td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/forms/input/">Input</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/forms/input-text">Input Text</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/forms/join/">Join (Group Items)</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/forms/join">Join</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/forms/radio/">Radio</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/forms/radio">Radio</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/forms/range/">Range</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/forms/range">Range</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/forms/select/">Select</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/forms/select">Select</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/forms/switch/">Switch</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/forms/switch">Switch</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/forms/textarea/">Textarea</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/forms/textarea">Textarea</a></td></tr>
        <tr><td style="background-color: color-mix(in srgb, var(--vp-c-brand-1) 20%, var(--vp-c-bg));"><strong>Coverage</strong></td><td style="background-color: color-mix(in srgb, var(--vp-c-brand-1) 20%, var(--vp-c-bg));"><strong>9/9 implemented (100%)</strong></td><td style="background-color: color-mix(in srgb, var(--vp-c-brand-1) 20%, var(--vp-c-bg));"><strong>9/9 documented (100%)</strong></td></tr>
        <tr><th scope="rowgroup" rowspan="10" style="text-align: center; vertical-align: middle;">Advanced forms</th><td><a href="https://flyonui.com/docs/advanced-forms/advanced-select/">Advanced Select</a></td><td>No matching Vue component found</td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/advanced-forms/combo-box/">Combo Box</a></td><td>No matching Vue component found</td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/advanced-forms/copy-markup/">Copy Markup</a></td><td><strong><span style="color: #b91c1c">Not planned 🚫</span></strong></td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/advanced-forms/form-wizard/">Form Wizard</a></td><td><strong><span style="color: #b91c1c">Not planned 🚫</span></strong></td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/advanced-forms/input-number/">Input Number</a></td><td>No matching Vue component found</td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/advanced-forms/pin-input/">Pin Input</a></td><td>No matching Vue component found</td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/advanced-forms/strong-password/">Strong Password</a></td><td>No matching Vue component found</td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/advanced-forms/toggle-count/">Toggle Count</a></td><td><strong><span style="color: #b91c1c">Not planned 🚫</span></strong></td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/advanced-forms/toggle-password/">Toggle Password</a></td><td>No matching Vue component found</td><td>—</td></tr>
        <tr><td style="background-color: color-mix(in srgb, var(--vp-c-brand-1) 20%, var(--vp-c-bg));"><strong>Coverage</strong></td><td style="background-color: color-mix(in srgb, var(--vp-c-brand-1) 20%, var(--vp-c-bg));"><strong>0/6 implemented (0%)</strong></td><td style="background-color: color-mix(in srgb, var(--vp-c-brand-1) 20%, var(--vp-c-bg));"><strong>0/6 documented (0%)</strong></td></tr>
        <tr><th scope="rowgroup" rowspan="2" style="text-align: center; vertical-align: middle;">Tables</th><td><a href="https://flyonui.com/docs/tables/table/">Table</a></td><td><strong><span style="color: #15803d">Implemented ✅</span></strong></td><td><a href="https://flyonui-vue.com/tables/table">Table</a></td></tr>
        <tr><td style="background-color: color-mix(in srgb, var(--vp-c-brand-1) 20%, var(--vp-c-bg));"><strong>Coverage</strong></td><td style="background-color: color-mix(in srgb, var(--vp-c-brand-1) 20%, var(--vp-c-bg));"><strong>1/1 implemented (100%)</strong></td><td style="background-color: color-mix(in srgb, var(--vp-c-brand-1) 20%, var(--vp-c-bg));"><strong>1/1 documented (100%)</strong></td></tr>
        <tr><th scope="rowgroup" rowspan="5" style="text-align: center; vertical-align: middle;">Mockups</th><td><a href="https://flyonui.com/docs/mockups/browser/">Browser</a></td><td>No matching Vue component found</td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/mockups/code/">Code</a></td><td>No matching Vue component found</td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/mockups/phone/">Phone</a></td><td>No matching Vue component found</td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/mockups/window/">Window</a></td><td>No matching Vue component found</td><td>—</td></tr>
        <tr><td style="background-color: color-mix(in srgb, var(--vp-c-brand-1) 20%, var(--vp-c-bg));"><strong>Coverage</strong></td><td style="background-color: color-mix(in srgb, var(--vp-c-brand-1) 20%, var(--vp-c-bg));"><strong>0/4 implemented (0%)</strong></td><td style="background-color: color-mix(in srgb, var(--vp-c-brand-1) 20%, var(--vp-c-bg));"><strong>0/4 documented (0%)</strong></td></tr>
        <tr><th scope="rowgroup" rowspan="16" style="text-align: center; vertical-align: middle;">Natively ported third-party plugins</th><td><a href="https://flyonui.com/docs/third-party-plugins/advance-range-slider/">Advance Range Slider</a></td><td>No matching Vue feature found</td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/third-party-plugins/animation/">Animation</a></td><td><strong><span style="color: #b91c1c">Not planned 🚫</span></strong></td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/third-party-plugins/fullcalendar/">Calendar</a></td><td><strong><span style="color: #b91c1c">Not planned 🚫</span></strong></td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/third-party-plugins/apex-charts/">Charts</a></td><td><strong><span style="color: #b91c1c">Not planned 🚫</span></strong></td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/third-party-plugins/clipboard/">Copy To Clipboard</a></td><td><strong><span style="color: #b91c1c">Not planned 🚫</span></strong></td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/third-party-plugins/datamaps/">Data Maps</a></td><td><strong><span style="color: #b91c1c">Not planned 🚫</span></strong></td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/third-party-plugins/datatables/">Datatables</a></td><td><strong><span style="color: #15803d">Implemented ✅</span> <span style="color: #b45309">Not production ready ⚠️</span></strong></td><td><a href="https://flyonui-vue.com/tables/data-table">DataTable</a></td></tr>
        <tr><td><a href="https://flyonui.com/docs/third-party-plugins/flatpickr/">DatePicker</a></td><td>No matching Vue feature found</td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/third-party-plugins/drag-and-drop/">Drag & Drop</a></td><td><strong><span style="color: #b91c1c">Not planned 🚫</span></strong></td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/third-party-plugins/file-upload/">File Upload</a></td><td>No matching Vue feature found</td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/third-party-plugins/form-validation/">Form Validation</a></td><td><strong><span style="color: #b91c1c">Not planned 🚫</span></strong></td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/third-party-plugins/notyf/">Notyf (Toasts)</a></td><td>No matching Vue feature found</td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/third-party-plugins/rating/">Rating</a></td><td>No matching Vue feature found</td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/third-party-plugins/wave-effect/">Wave Effect</a></td><td>No matching Vue feature found</td><td>—</td></tr>
        <tr><td><a href="https://flyonui.com/docs/third-party-plugins/editor/">WYSIWYG Editor</a></td><td><strong><span style="color: #b91c1c">Not planned 🚫</span></strong></td><td>—</td></tr>
        <tr><td style="background-color: color-mix(in srgb, var(--vp-c-brand-1) 20%, var(--vp-c-bg));"><strong>Coverage</strong></td><td style="background-color: color-mix(in srgb, var(--vp-c-brand-1) 20%, var(--vp-c-bg));"><strong>1/7 implemented (14.3%)</strong></td><td style="background-color: color-mix(in srgb, var(--vp-c-brand-1) 20%, var(--vp-c-bg));"><strong>1/7 documented (14.3%)</strong></td></tr>
        <tr><th colspan="2" rowspan="2">Full Coverage</th><td><strong>37 / 69 implemented (53.6%)</strong></td><td><strong>36 / 69 documented (52.2%)</strong></td></tr>
        <tr><td><strong>Production ready</strong></td><td><strong>34 / 37 implemented (91.9%)</strong></td></tr>
    </tbody>
</table>

## Credits 🤘

We are grateful for the contributions of the open-source community, particularly:

- [FlyonUI](https://flyonui.com/)

These projects form the backbone of FlyonUI Vue, allowing us to build a powerful and user-friendly Vue components UI kit.

[//]: # (todo: add contribution guide and versioning)
