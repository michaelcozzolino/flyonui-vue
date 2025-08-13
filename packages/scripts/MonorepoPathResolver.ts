import { resolve }       from 'node:path';
import { fileURLToPath } from 'node:url';

export type PackageName = 'core' | 'create-flyonui-vue' | 'docs' | 'web-components';

class MonorepoPathResolver {
    public resolveRootPath() {
        return resolve(fileURLToPath(import.meta.url), '../../');
    };

    public resolvePackagesPath() {
        return this.resolvePathFromRootPath('packages');
    }

    public resolvePackagePath(packageName: PackageName) {
        return resolve(this.resolvePackagesPath(), packageName);
    }

    public resolvePackageJsonPath(packageName: PackageName | 'root') {
        const packageJson = 'package.json';
        return packageName === 'root'
            ? this.resolvePathFromRootPath(packageJson)
            : resolve(this.resolvePackagePath(packageName), packageJson);
    }

    protected resolvePathFromRootPath(path: string) {
        return resolve(this.resolveRootPath(), path);
    }
}

export default new MonorepoPathResolver();
