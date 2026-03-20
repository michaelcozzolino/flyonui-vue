Scan `packages/docs` including `.vitepress` and `packages/core`, for all Iconify icon ids used in the codebase.

Rules:
- Only collect real icon ids such as `tabler:user` or `mdi:menu`.
- Include icons used in `.vue`, `.ts`, `.md`, and other docs source files.
- Ignore event names, slot names, CSS values, and unrelated `prefix:name` strings.
- Dedupe and sort the icon ids.
- Update the `loadIcons([...])` call in `packages/docs/.vitepress/theme/index.ts`.
- Keep the change scoped to that preload list unless another minimal edit is required.
- Do not modify anything outside the docs icon preload task.
