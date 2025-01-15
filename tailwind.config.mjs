import flyonui from 'flyonui';

export default {
    content: [
        './docs/.vitepress/**/*.{js,ts,vue}',
        './docs/**/*.{js,ts,vue,md}',
        './src/**/*.{js,ts,vue}',
    ],
    plugins: [
        flyonui,
    ],
    theme:   {},
    flyonui: {
        themes: true,
    },
};
