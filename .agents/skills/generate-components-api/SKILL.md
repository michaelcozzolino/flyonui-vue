---
name: generate-components-api
description: Regenerate FlyonUI Vue component API metadata and manually revert array-order-only changes while preserving real metadata changes and existing local edits.
---

# Generate components API

Perform this workflow manually using generation, diff inspection, and targeted edits. Do not create or use a custom normalization script.

1. Inspect the working-tree status and existing diff for `packages/docs/Api/Lib/ComponentsApi.json`. Save a temporary copy of its current contents before generation. This working copy is the baseline, including any uncommitted edits; do not substitute HEAD or the index.
2. Run `yarn generate:components-api` from `packages/scripts`.
3. Compare the saved copy with the generated file, inspecting each changed metadata array and its nested values. Arrays contain the same metadata only when all entries, values, and duplicate counts match; account for nested array reordering when comparing entries. Match named entries by name rather than array position.
4. Manually restore the previous order of arrays whose contents are unchanged. Preserve additions, removals, and modified metadata values. When an array contains substantive changes, retain those changes and restore order-only differences in unchanged nested arrays where applicable. Do not revert an entire diff hunk if it also contains substantive changes.
5. Compare the cleaned file against both the saved baseline and Git's diff. Verify that only substantive changes from this generation remain relative to the baseline and that pre-existing edits are preserved. If generation changed only ordering, restore the exact saved contents.

This workflow specifically permits generation and order cleanup of this generated file despite the general repository instruction against editing it. Do not change metadata values or the generator as part of cleanup.

If generation fails or produces invalid JSON, stop and report the failure and temporary backup location. Keep the backup until verification succeeds. Report the remaining substantive changes, distinguishing this run from pre-existing edits. Do not stage or commit automatically.
