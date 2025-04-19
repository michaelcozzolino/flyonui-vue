#!/usr/bin/env node

import path              from 'node:path';
import process           from 'node:process';
import { fileURLToPath } from 'node:url';
import { copy }          from 'fs-extra';
import prompts           from 'prompts';

const templates = path.resolve(path.dirname(fileURLToPath(import.meta.url)), './Templates/Vue');

async function main(): Promise<void> {
    log('🚀  Create a new FlyonUI‑powered project');

    const { name } = await prompts([
        { name: 'name', type: 'text', message: 'Project name', initial: 'my-app' },
    ]);

    const targetDir = path.resolve(process.cwd(), name);
    log(`⛓  Generating into ${targetDir}`);

    await copy(templates, targetDir);

    log('✅  Done!');
    log('Next steps:');
    log(`cd ${name} && yarn install && yarn dev`);
}

function log(message: string): void {
    // eslint-disable-next-line no-console
    console.log(message);
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
