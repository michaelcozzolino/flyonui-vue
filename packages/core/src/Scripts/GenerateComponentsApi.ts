import type { ComponentDoc }      from 'vue-docgen-api';
import { writeFile }              from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath }          from 'node:url';
import glob                       from 'fast-glob';
import { parse }                  from 'vue-docgen-api';

async function generateComponentsApi(): Promise<void> {
    const __dirname           = dirname(fileURLToPath(import.meta.url));
    const vueComponentsFolder = resolve(__dirname, '../Components');

    return glob(['**/*.vue'], {
        cwd:      vueComponentsFolder,
        absolute: true,
    }).then((filePaths: string[]) => {
        Promise.all(
            filePaths.map(filePath =>
                parse(filePath, {
                    alias: { '@': resolve(__dirname, '../') },
                }),
            ),
        ).then((docs: ComponentDoc[]) => {
            writeFile(
                join(vueComponentsFolder, 'ComponentsApi.json'),
                JSON.stringify(docs, null, 2),
                'utf-8',
            );
        });
    });
}

generateComponentsApi();
