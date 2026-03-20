import { spawnSync }        from 'node:child_process';
import { readFileSync }     from 'node:fs';
import { resolve }          from 'node:path';
import process              from 'node:process';
import MonorepoPathResolver from '../../MonorepoPathResolver.ts';

function loadDocsIcons(): void {
    const rootPath = MonorepoPathResolver.resolveRootPath();

    const promptPath = resolve(
        MonorepoPathResolver.resolvePackagePath('scripts'),
        'src/Codex/LoadDocsIcons/LoadDocsIconsPrompt.md',
    );

    const prompt = readFileSync(promptPath, 'utf8');

    const result = spawnSync(
        'codex',
        ['exec', '--full-auto', '--cd', rootPath, '-'],
        {
            cwd:   rootPath,
            input: prompt,
            stdio: ['pipe', 'inherit', 'inherit'],
        },
    );

    if (result.error !== undefined) {
        throw result.error;
    }

    process.exit(result.status ?? 0);
}

loadDocsIcons();
