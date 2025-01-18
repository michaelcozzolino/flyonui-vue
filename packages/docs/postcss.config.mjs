import autoprefixer             from 'autoprefixer';
import tailwindcss              from 'tailwindcss';
import { postcssIsolateStyles } from 'vitepress';

export default {
    plugins: [
        postcssIsolateStyles({
            includeFiles: [/base\.css/, /vp-doc\.css/],
        }),
        tailwindcss,
        autoprefixer,
    ],
};
