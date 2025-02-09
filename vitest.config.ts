import path                                            from 'node:path';
import { defineConfig, type TestProjectConfiguration } from 'vitest/config';

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

const workspace: TestProjectConfiguration[] = testablePackages.map((testablePackage: TestablePackage) => {
    const name = testablePackage.name;

    return {
        resolve: {
            alias: {
                '@':       path.resolve(`packages/${name}/${name === 'docs' ? '' : 'src'}`),
                '@/tests': path.resolve(`packages/${name}/tests`),
            },
        },
        test: {
            name,
            include:       [`packages/${name}/tests/**/*.ts`],
            includeSource: [`packages/${name}/src/**/*.{{ts,vue}}`],
        },
    };
});

export default defineConfig({
    test: {
        workspace,
        clearMocks:   true,
        mockReset:    true,
        restoreMocks: true,
        environment:  'jsdom',
        coverage:     {
            provider:   'v8',
            include:    ['packages/*/src/**/*', 'packages/docs/**/*'],
            clean:      true,
            all:        true,
            thresholds: Object.assign({}, {}, ...coverageThresholds),
        },
    },
});
