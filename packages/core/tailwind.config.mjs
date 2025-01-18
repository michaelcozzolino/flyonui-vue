import flyonui from 'flyonui';

export default {
    content: [
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
