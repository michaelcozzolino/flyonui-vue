# Repo Instructions

This file is the repo-local instruction source to work in this repository.

When working in this repo:
- Read this file first.
- Prefer following this file over inferred conventions when they conflict.
- Do not overwrite user changes unless explicitly asked or it is a part of a refactoring related to a new feature.

## Coding Rules
- Prefer using the original reactive source directly, like `props.filter`, instead of introducing local aliases such as `const selectFilter = props.filter`, unless there is a clear technical need.
- Use Vue single-file components with `<template>` before `<script setup lang="ts">`, following the surrounding component's structure.
- Use the Composition API and typed Vue macros: `defineProps`, `withDefaults` for defaults, `defineModel` for two-way bindings, and `defineEmits` and `defineSlots` where applicable. Keep prop, model, event, and slot types explicit.
- Use `ref` and `computed` for reactive state and derived values, and `watch` or lifecycle hooks for side effects. Preserve reactivity when passing props to composables, for example with a getter when needed.
- Prefer existing composables and VueUse utilities when they fit the problem. Name composables `use...` and place reusable logic and types in the feature's existing `Lib` and `Types` structure.
- Use TypeScript types for public contracts and function parameters and return values where useful. Use `import type` for type-only imports, and follow the existing feature's type and barrel-export organization.
- Never include the `.ts` extension in import paths for TypeScript files.
- Follow the existing formatting: four-space indentation, single-quoted TypeScript strings, semicolons, and trailing commas in multiline structures. Align adjacent imports, declarations, object properties, and multiline template attributes where the surrounding code does so.
- Use descriptive camelCase names for variables and functions, PascalCase for components and types, and `is` or `has` prefixes for boolean state when appropriate. Prefer named handler functions for substantial event logic.
- Keep component templates readable by splitting attributes across lines on longer tags and separating distinct blocks with blank lines. Match the surrounding component's conventions for bindings, slots, and class styling.
- Add concise comments or documentation when they explain a non-obvious behavior or public component contract; avoid comments that merely restate the code.

## Testing Rules

## Editing Constraints
- Never edit the file packages/docs/Api/Lib/ComponentsApi.json as it is a generated file

## Workflow Preferences
- Refresh files before editing if the user says he changed them.
- When renaming tracked files, use `git mv` so Git records the change as a rename instead of delete-plus-add.
