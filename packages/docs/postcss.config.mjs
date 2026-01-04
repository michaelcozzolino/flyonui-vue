import tailwindcss              from '@tailwindcss/postcss';
import { postcssIsolateStyles } from 'vitepress';

export default {
    plugins: [
        postcssIsolateStyles(),
        tailwindcss(),
    ],
};
