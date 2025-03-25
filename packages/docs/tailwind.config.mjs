import path from 'node:path';

export default {
    content: [
        './.vitepress/**/*.{html,js,ts,vue}',
        './{Components,Forms,Navigations}/**/*.{html,js,ts,vue}',
        `${path.dirname(require.resolve('flyonui-vue'))}/**/*.{html,js,ts,vue}`,
    ],
};
