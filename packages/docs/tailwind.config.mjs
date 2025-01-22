import flyonui from 'flyonui';

export default {
    content: [
        './.vitepress/**/*.{html,js,ts,vue}',
        '../../node_modules/flyonui-vue/**/*.{html,js,ts,vue}',
    ],
    plugins: [
        flyonui,
    ],
    theme:   {},
    flyonui: {
        themes: true,
    },
};
