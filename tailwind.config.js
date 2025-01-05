module.exports = {
    content: [
        './docs/.vitepress/**/*.{js,ts,vue}',
        './docs/**/*.{js,ts,vue,md}',
        './src/**/*.{js,ts,vue}',
        './node_modules/flyonui/dist/js/*.js',
    ],
    plugins: [
        require('flyonui'),
        require('flyonui/plugin'),
    ],
    theme:   {},
    flyonui: {
        themes: true,
    },
    darkMode: ['class', '[data-theme="dark"]'],
};
