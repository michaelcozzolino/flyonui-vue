---
name: generate-components-api
description: Regenerate FlyonUI Vue component API metadata, align array ordering with the current branch's base branch, and preserve substantive metadata changes and local edits.
---

# Generate components API

Perform this workflow manually using generation, diff inspection, and targeted edits. Do not create or use a custom normalization script. The current branch's base branch is the ordering reference; the working copy and `HEAD` are not substitutes for it.

1. Resolve the current branch's base branch before generation. Prefer the base branch of its open pull request. Otherwise check `git config --get branch.<current-branch>.base`, then use a base branch identified by the user in the conversation. Do not assume `3.x`, the default branch, the current branch's upstream, `HEAD`, or the working copy is the base. If the base cannot be identified unambiguously, ask the user before ordering cleanup. Verify the base ref is available and save its `packages/docs/Api/Lib/ComponentsApi.json` as a temporary ordering reference.
2. Inspect the working-tree status and existing diff for `packages/docs/Api/Lib/ComponentsApi.json`. Save a separate temporary copy of its current contents before generation. This working copy is the baseline for detecting pre-existing and generation changes, including uncommitted edits; it is not the ordering reference.
3. Run `yarn generate:components-api` from `packages/scripts`.
4. Compare the saved working copy with the generated file to identify generation changes. Inspect changed metadata arrays and nested values. Arrays contain the same metadata only when all entries, values, and duplicate counts match; account for nested array reordering when comparing entries. Match named entries by name rather than array position. Also compare array order with the saved base-branch reference, including order differences that were already present in the working copy.
5. Manually align order-only differences with the base branch. Preserve substantive additions, removals, and modified metadata values from the working copy and generation. For arrays with branch-specific entries, order shared entries as in the base while retaining branch-specific entries and their metadata. In arrays containing substantive changes, restore order-only differences in unchanged entries and nested arrays where applicable. Do not revert an entire diff hunk if it also contains substantive changes.
6. Compare the cleaned file against the saved working copy, the base-branch reference, and Git's diff. Verify that substantive pre-existing edits and generation changes remain, while shared array entries follow base-branch order. If generation made no substantive changes, retain the pre-existing metadata values and edits while still aligning order with the base branch.

This workflow specifically permits generation and order cleanup of this generated file despite the general repository instruction against editing it. Do not change metadata values or the generator as part of cleanup.

If generation fails or produces invalid JSON, stop and report the failure and temporary backup locations. Keep both references until verification succeeds. Report the remaining substantive changes, distinguishing this run from pre-existing edits. Do not stage or commit automatically.
