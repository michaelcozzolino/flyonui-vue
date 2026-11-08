---
name: load-docs-icons
description: Refresh the Iconify icon preload list in the VitePress theme from icons used in packages/docs and packages/core source.
---

# Load docs icons

Use this skill when the docs theme's Iconify preload list needs to match icons used in the docs and core source.

Scan `packages/docs` (including hidden directories such as `.vitepress`) and `packages/core` for Iconify IDs in source and documentation files. Include `.vue`, `.ts`, `.md`, and other relevant source files. Search for candidate `prefix:name` strings, then inspect their context and keep only actual Iconify icon IDs; exclude CSS variants, event and slot names, URLs, type fragments, and unrelated strings.

Deduplicate and sort the IDs, then update only the `loadIcons([...])` call in `packages/docs/.vitepress/theme/index.ts`. Preserve unrelated edits in that file. Do not change other source files as part of this task. If no existing preload call is present, report that instead of adding one elsewhere.
