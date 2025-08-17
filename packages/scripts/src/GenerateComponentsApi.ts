import type { ComponentName }                     from 'flyonui-vue';
import type { ComponentMeta, MetaCheckerOptions } from 'vue-component-meta';
import { writeFile }                              from 'node:fs/promises';
import * as path                                  from 'node:path';
import { join, resolve }                          from 'node:path';
import process                                    from 'node:process';
import glob                                       from 'fast-glob';
import { createChecker }                          from 'vue-component-meta';
import MonorepoPathResolver                       from './MonorepoPathResolver.ts';

async function generateComponentsApi(): Promise<void> {
    const packagesPath      = MonorepoPathResolver.resolvePackagesPath();
    const corePath          = MonorepoPathResolver.resolvePackagePath('core');
    const vueComponentsPath = resolve(corePath, 'src/UI');

    const checkerOptions: MetaCheckerOptions = {
        forceUseTs: true,
        printer:    { newLine: 1 },
    };

    const tsconfigChecker = createChecker(
        resolve(corePath, 'tsconfig.build.json'),
        checkerOptions,
    );

    return glob(['**/*.vue'], {
        cwd:      vueComponentsPath,
        absolute: true,
    }).then((componentsPaths: string[]) => {
        const componentsApi: Record<ComponentName, ComponentMeta> = {} as Record<ComponentName, ComponentMeta>;

        for (const componentPath of componentsPaths) {
            const { name } = path.parse(componentPath);

            componentsApi[name as ComponentName] = tsconfigChecker.getComponentMeta(componentPath);
        }

        const componentApiDocsPath = resolve(packagesPath, 'docs/Api/Lib');

        writeFile(
            join(componentApiDocsPath, 'ComponentsApi.json'),
            `${JSON.stringify(componentsApi, null, 4).replaceAll(
                // Replaces the absolute path of the file with the GitHub url
                /(?<="file":\s*")(?:[A-Za-z]:)?(?:(?:\/|\\\\)[^"\\/]+)*(?:\/|\\\\)flyonui-vue(?=\/|\\\\|")/g,
                'https://github.com/michaelcozzolino/flyonui-vue/blob/2.x', // todo: the 2.x must be dynamic
            )}\n`,
            'utf-8',
        );
    });
}

await generateComponentsApi().catch((e: unknown) => {
    console.error(e);

    process.exit(1);
});
