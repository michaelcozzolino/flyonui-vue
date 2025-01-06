module.exports = {
    content: [
        './docs/.vitepress/**/*.{js,ts,vue}',
        './docs/**/*.{js,ts,vue,md}',
        './src/**/*.{js,ts,vue}',
    ],
    plugins: [
        require('flyonui'),
    ],
    theme:   {},
    flyonui: {
        themes: true,
    },
    darkMode: ['class', '[data-theme="dark"]'],
};
