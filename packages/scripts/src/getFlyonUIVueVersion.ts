import fs                   from 'node:fs';
import MonorepoPathResolver from '@/MonorepoPathResolver';

function getFlyonUIVueVersion(): string {
    const packageJsonPath = MonorepoPathResolver.resolvePackageJsonPath('core');

    return JSON.parse(fs.readFileSync(packageJsonPath).toString()).version;
}

console.log(getFlyonUIVueVersion());
