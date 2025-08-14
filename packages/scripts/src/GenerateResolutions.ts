import type { PackageName }             from './MonorepoPathResolver.ts';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import MonorepoPathResolver             from './MonorepoPathResolver.ts';

interface DependencyInfo {
    count:   number;
    version: string;
}

async function generateResolutions(): Promise<void> {
    const rootPackageJsonPath = MonorepoPathResolver.resolvePackageJsonPath('root');
    const rootPackage         = JSON.parse(await readFile(rootPackageJsonPath, 'utf8'));

    const packagesPath = MonorepoPathResolver.resolvePackagesPath();
    const packageNames = await readdir(packagesPath) as PackageName[];

    const dependenciesMap = new Map<string, DependencyInfo>();

    await collectDependencies(rootPackageJsonPath, dependenciesMap);

    for (const packageName of packageNames) {
        await collectDependencies(MonorepoPathResolver.resolvePackageJsonPath(packageName), dependenciesMap);
    }

    const resolutions: Record<string, string> = rootPackage.resolutions ?? {};

    for (const [name, info] of dependenciesMap.entries()) {
        if (info.count > 1) {
            resolutions[name] = info.version;
        }
    }

    rootPackage.resolutions = Object.keys(resolutions).sort().reduce((acc, key) => {
        acc[key] = resolutions[key];

        return acc;
    }, {} as Record<string, string>);

    await writeFile(rootPackageJsonPath, `${JSON.stringify(rootPackage, null, 4)}\n`);
}

async function collectDependencies(packagePath: string, dependenciesMap: Map<string, DependencyInfo>): Promise<void> {
    const packageJson = JSON.parse(await readFile(packagePath, 'utf8'));

    for (const dependencyType of ['dependencies', 'devDependencies'] as const) {
        const dependencies: Record<string, string> = packageJson[dependencyType] ?? null;

        if (dependencies === null) {
            continue;
        }

        for (const [name, version] of Object.entries(dependencies)) {
            const dependency = dependenciesMap.get(name) ?? { count: 0, version: '0.0.0' };
            dependency.count += 1;

            if (version.startsWith('workspace:')) {
                dependency.version = version;
            } else if (isVersionGreater(version, dependency.version)) {
                dependency.version = version;
            }

            dependenciesMap.set(name, dependency);
        }
    }
}

/**
 * Checks if versionA is greater than versionB, by comparing each number of the versions singularly
 *
 * @param versionA
 * @param versionB
 */
function isVersionGreater(versionA: string, versionB: string): boolean {
    const parsedVersionA = parseVersion(versionA); // E.G: 1.2.3 -> [1, 2, 3]
    const parsedVersionB = parseVersion(versionB);

    const len = Math.max(parsedVersionA.length, parsedVersionB.length);

    for (let i = 0; i < len; i++) {
        const versionNumberA = parsedVersionA[i] ?? 0;
        const versionNumberB = parsedVersionB[i] ?? 0;

        if (versionNumberA > versionNumberB) {
            return true;
        }

        if (versionNumberA < versionNumberB) {
            return false;
        }
    }

    return false;
}

function parseVersion(version: string): number[] {
    /**
     * This regex matches the following:
     * \d+ → one or more digits
     * (?:.\d+) → zero or more groups of a dot followed by one or more digits
     * Overall it matches versions like: "1", "1.2", "10.0.3" and stops before any non-numeric suffixes such as -beta.2
     */
    const match = version.match(/\d+(?:\.\d+)*/);

    return match ? match[0].split('.').map(Number) : [0];
}

await generateResolutions().catch((e: unknown) => console.error(e));
