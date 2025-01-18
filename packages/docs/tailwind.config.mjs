import flyonui from 'flyonui';

export default {
    content: [
        './.vitepress/**/*.{js,ts,vue}',
        './**/*.{js,md,ts,vue}',
        '!./node_modules',
    ],
    plugins: [
        flyonui,
    ],
    theme:   {},
    flyonui: {
        themes: true,
    },
};
