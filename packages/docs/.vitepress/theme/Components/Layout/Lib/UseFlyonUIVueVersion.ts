import type { WithRequiredTo } from 'flyonui-vue';

interface FlyonUIVueVersion extends WithRequiredTo {
    name: string;
}

export function useFlyonUIVueVersion(): { currentVersion: string; oldVersions: FlyonUIVueVersion[] } {
    const currentVersion = getPrefixedVersion(FLYONUI_VUE_VERSION);

    const oldVersions = OLD_FLYONUI_VUE_VERSIONS.map((version: string): FlyonUIVueVersion => ({
        name: getPrefixedVersion(version),
        to:   getOldVersionDocsUrl(version),
    }));

    function getPrefixedVersion(version: string): string {
        return `v${version}`;
    }

    function getOldVersionDocsUrl(version: string): string {
        const v = version.slice(0, version.indexOf('.') + 1);

        return `https://${getPrefixedVersion(v)}${FLYONUI_VUE_DOMAIN}`;
    }

    return { currentVersion, oldVersions };
}
