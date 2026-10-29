import type { Dirent }                               from 'node:fs';
import type { PluginOption, ResolvedConfig }         from 'vite';
import {  readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join }                                      from 'node:path';
import { kebabCase }                                 from 'change-case';
import llmstxt                                       from 'vitepress-plugin-llms';

export function createLlmsPlugin(docsDomain: string): PluginOption[] {
    return [llmstxt({
        domain:      `https://${docsDomain}`,
        description: 'FlyonUI Vue is an open-source Vue 3 and web components library built on FlyonUI and Tailwind CSS.',
        ignoreFiles: ['Extra/BuildSizeVisualizer.md', 'Playground/**', 'tests/**'],
        sidebar:     [
            {
                text:  'Getting started',
                items: [
                    { text: 'Getting Started', link: '/quick-start' },
                    { text: 'Upgrade Guide', link: '/upgrade-guide' },
                ],
            },
            ...getDocumentationSections().map(({ section, items }) => ({ text: section, items })),
        ],
    }), useCleanLlmsLinks()];
}

interface DocumentationSection {
    section: string;
    items:   DocumentationSectionItem[];
}

interface DocumentationSectionItem {
    text: string;
    link: string;
}

function getDocumentationSections(): DocumentationSection[] {
    const docsDir = join(import.meta.dirname, '..');

    const ignoredDirectories = new Set([
        'Extra',
        'Playground',
        'tests',
        'node_modules',
        'dist',
        'coverage',
        'assets',
        'public',
    ]);

    function getSectionItems(directory: string, segments: string[]): DocumentationSectionItem[] {
        return readdirSync(directory, { withFileTypes: true }).flatMap((entry: Dirent): DocumentationSectionItem[] => {
            if (entry.name.startsWith('.') || ignoredDirectories.has(entry.name)) {
                return [];
            }

            if (entry.isDirectory()) {
                return getSectionItems(join(directory, entry.name), [...segments, entry.name]);
            }

            if (!entry.isFile() || !entry.name.endsWith('.md')) {
                return [];
            }

            // removes the ".md"
            const name = entry.name.slice(0, -3);

            /**
             * For the Checkbox the segments are ['Forms', 'Checkbox'],
             * in case of index we only get the segments without index.md
             */
            const path = name === 'index' ? segments : [...segments, name];

            return [
                {
                    text: name,
                    link: `/${path.map(segment => kebabCase(segment)).join('/')}`,
                },
            ];
        });
    }

    return readdirSync(docsDir, { withFileTypes: true })
        .filter(entry => entry.isDirectory() && !entry.name.startsWith('.') && !ignoredDirectories.has(entry.name))
        .map(entry => ({ section: entry.name, items: getSectionItems(join(docsDir, entry.name), [entry.name]) }))
        .filter(section => section.items.length > 0);
}

/**
 * Removes the .md extension from URLs
 */
function useCleanLlmsLinks(): PluginOption {
    let outputDirectory: string = '';
    let isServerBuild: boolean  = false;

    return {
        name:  'clean-llms-links',
        apply: 'build',
        configResolved(config: ResolvedConfig): void {
            if (config.vitepress === undefined) {
                throw new Error('VitePress configuration is required to update llms.txt links.');
            }

            outputDirectory = config.vitepress.outDir;
            isServerBuild = Boolean(config.build.ssr);
        },
        writeBundle() {
            if (isServerBuild) {
                return;
            }

            const path = join(outputDirectory, 'llms.txt');
            const content = readFileSync(path, 'utf8');

            writeFileSync(path, content.replace(/(\]\(https?:\/\/[^)\s]+)\.md(?=\))/g, '$1'));
        },
    };
}
