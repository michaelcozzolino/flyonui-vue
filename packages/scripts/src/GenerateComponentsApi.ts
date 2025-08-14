import type { ComponentName }                     from 'flyonui-vue';
import type { ComponentMeta, MetaCheckerOptions } from 'vue-component-meta';
import { writeFile }                              from 'node:fs/promises';
import * as path                                  from 'node:path';
import { join, resolve }                          from 'node:path';
import { fileURLToPath }                          from 'node:url';
import glob                                       from 'fast-glob';
import { createChecker }                          from 'vue-component-meta';

async function generateComponentsApi(): Promise<void> {
    const packagesPath      = resolve(fileURLToPath(import.meta.url), '../../packages');
    const corePath          = resolve(packagesPath, 'core');
    const vueComponentsPath = resolve(corePath, 'src/Components');

    const checkerOptions: MetaCheckerOptions = {
        forceUseTs: true,
        printer:    { newLine: 1 },
    };

    const tsconfigChecker = createChecker(
        resolve(corePath, 'tsconfig.json'),
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
    }).catch((e: unknown) => console.error(e));
}

await generateComponentsApi().catch((e: unknown) => console.error(e));
