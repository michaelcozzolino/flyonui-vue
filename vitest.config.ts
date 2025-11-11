import type { TestProjectConfiguration } from 'vitest/config';
import path                              from 'node:path';
import vue                               from '@vitejs/plugin-vue';
import { defineConfig }                  from 'vitest/config';

interface TestablePackage {
    name:               string;
    coverageThresholds: {
        lines?:      number;
        functions?:  number;
        branches?:   number;
        statements?: number;
    };
}

const testablePackages: TestablePackage[] = [
    {
        name:               'core',
        coverageThresholds: {},
    },
    {
        name:               'docs',
        coverageThresholds: {},
    },
];

const coverageThresholds = testablePackages.map((testablePackage: TestablePackage) => {
    const name = testablePackage.name;

    return { [`packages/${name}${name === 'docs' ? '/src' : ''}/**/*`]: testablePackage.coverageThresholds };
});

const projects: TestProjectConfiguration[] = testablePackages.map((testablePackage: TestablePackage) => {
    const name = testablePackage.name;

    return {
        resolve: {
            alias: {
                '@':       path.resolve(`packages/${name}/${name === 'docs' ? '' : 'src'}`),
                '@/tests': path.resolve(`packages/${name}/tests`),
            },
        },
        plugins: [
            vue(),
        ],
        test: {
            name,
            environment:   'jsdom',
            include:       [`packages/${name}/tests/**/*.spec.ts`],
            includeSource: [`packages/${name}/src/**/*.{{ts,vue}}`],
            exclude:       [`packages/${name}/tests/EndToEnd/*.spec.ts`],
        },
    };
});

export default defineConfig({
    test: {
        projects,
        clearMocks:   true,
        mockReset:    true,
        restoreMocks: true,
        environment:  'jsdom',
        coverage:     {
            provider:          'v8',
            include:           ['packages/*/src/**/*', 'packages/docs/**/*'],
            exclude:           ['packages/core/src/**/index.ts', 'packages/*/src/**/Types/**/*', 'node_modules/**/*'],
            excludeAfterRemap: true,
            clean:             true,
            all:               true,
            thresholds:        Object.assign({}, {}, ...coverageThresholds),
        },
    },
});
