---
name: update-readme-roadmap
description: Update the root README.md roadmap for FlyonUI Vue by checking current implementation and documentation, correcting component mappings and links, and recalculating coverage. Use when asked to refresh or reconcile the README roadmap.
---

# Update the README roadmap

Update the `## Roadmap` section of the repository's root `README.md` to reflect the current working tree. Make the edits when invoked; do not stop at a proposed update.

## Check the evidence

- Read applicable `AGENTS.md` instructions, the current roadmap, and `git status --short`. Preserve existing user edits and work from current files, including uncommitted implementation and documentation changes.
- Inspect implementations under `packages/core/src/UI/` and reusable features under `packages/core/src/Lib/`. Trace public exports from `packages/core/src/index.ts`; a folder, type declaration, or scaffold alone does not establish implementation.
- Inspect Markdown pages and their Vue documentation wrappers/examples under `packages/docs/`, together with `.vitepress/config.ts` and `.vitepress/theme/Components/Layout/Features/Sidebar/Lib/UseSidebarItems.ts` within that package. A placeholder page alone does not establish documentation. Derive public documentation URLs from the actual route configuration and follow the roadmap's existing URL style.
- Resolve mappings by behavior and exports rather than exact names or directory placement. Existing examples include Blockquote → BlockQuote, Typography → Heading, Stat → Stats, Input → Input Text, and Tabs & Pills → Tabs. Theme Controller may be implemented without a documentation link. A third-party feature may have a native implementation in a different section, such as Datatables → DataTable.
- Use the existing FlyonUI rows as the comparison inventory. When asked to refresh the upstream inventory or check upstream links, consult the current official FlyonUI documentation navigation and relevant pages. Do not invent additions or remove rows because a remote source is unavailable; report any unverified upstream changes.

## Edit the table

- Limit edits to the roadmap section, ending before the next level-two heading. Preserve its HTML table, four columns, section order, colors, emoji, indentation, and coverage-row styling.
- Update each row's implementation status and Vue documentation link independently using the evidence above. Preserve the existing missing-component or missing-feature wording where no implementation exists. Use `—` where documentation is absent.
- Preserve `Not planned 🚫` decisions unless the user changes the plan or an actual implementation now exists. Preserve `Not production ready ⚠️` warnings unless the request or clear repository evidence establishes a readiness change. Do not infer production readiness from file existence, an unreleased badge, or passing tests alone.
- Do not mark skeletons containing placeholders such as `Implement Fo<Component>` as implemented, or count empty documentation wrappers as documented.
- If a mapping or readiness change remains ambiguous, retain the existing value for that item, update the independently verified items, and report the uncertainty.

## Recalculate and verify

- Count each upstream feature row once, even when several Vue components map to it. Exclude `Not planned` rows from coverage denominators; exclude coverage and summary rows from feature counts.
- For each section, calculate implemented and documented counts separately against the same eligible-feature denominator. Count an implemented feature with a readiness warning as implemented. Documentation requires substantive, reachable docs, not merely an existing hyperlink.
- Recompute `Full Coverage` from the summed section counts. Recompute `Production ready` as implemented features without a readiness warning divided by all implemented features, preserving any unresolved existing warnings.
- Format percentages to at most one decimal place, omitting a trailing `.0`. If a denominator is zero, show `0/0` with `N/A` rather than dividing by zero.
- When rows change, update each section's `rowspan` to include its feature rows and coverage row. Keep the summary cells aligned with the existing four-column table.
- Review the README diff, verify counts and mapped local documentation routes, and confirm that content outside the roadmap is unchanged. If the roadmap already matches the evidence, leave it unchanged and say so.
- Report changed statuses, links, and coverage totals concisely, along with any unresolved items. Do not modify source code, documentation pages, or generated files to make the roadmap agree; in particular, never edit `packages/docs/Api/Lib/ComponentsApi.json`.
