import path                  from 'node:path';
import { fileURLToPath }     from 'node:url';
import antfu                 from '@antfu/eslint-config';
import { includeIgnoreFile } from '@eslint/compat';
import alignImport           from 'eslint-plugin-align-import';

export default antfu(
    {
        plugins: {
            'align-import': alignImport,
        },
        type:      'lib',
        stylistic: {
            indent: 4,
            semi:   true,
        },
        ignores: includeIgnoreFile(path.resolve(path.dirname(fileURLToPath(import.meta.url)), '.gitignore')).ignores,
    },
    {
        files: ['**/*.vue'],
        rules: {
            'vue/block-order': [
                'error',
                {
                    order: ['template', 'script', 'style'],
                },
            ],
            'vue/first-attribute-linebreak': [
                'error',
                {
                    singleline: 'ignore',
                    multiline:  'beside',
                },
            ],
            'vue/no-empty-component-block': ['error'],
        },
    },
    {
        rules: {
            '@stylistic/brace-style': ['error', '1tbs'],
            '@stylistic/key-spacing': [
                'error',
                {
                    align: { afterColon: true, beforeColon: false, on: 'value' },
                },
            ],
            '@stylistic/no-multi-spaces': [
                'error',
                {
                    exceptions: {
                        Property:           true,
                        ImportDeclaration:  true,
                        TSTypeAnnotation:   true,
                        VariableDeclarator: true,
                    },
                },
            ],
            'align-import/align-import': ['error'],
            'align-import/trim-import':  ['error'],
        },
    },
);
