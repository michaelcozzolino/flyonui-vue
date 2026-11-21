---
name: publish-components-api
description: Publish the current FlyonUI Vue ComponentsApi.json to the current branch's base branch, restore the local JSON change, then merge that base branch into the current implementation branch and push it. Use when asked to commit or push this generated metadata, not to regenerate it.
---

# Publish ComponentsApi.json

Publish only `packages/docs/Api/Lib/ComponentsApi.json` from the user's current working tree to the current implementation branch's base branch. Resolve that base before any publication: prefer the base branch of the current branch's open pull request; otherwise check `git config --get branch.<current-branch>.base`, then use a base branch identified by the user in the conversation. Do not assume `3.x`, the default branch, the current branch's upstream, or `HEAD` is the base. If the base cannot be identified unambiguously, ask the user before publishing. After publication, restore the JSON in the current implementation branch, merge the updated base branch into that branch, and push it. Default to the commit message `chore: Update ComponentsApi.json`, unless the user specifies another message. Invoking this workflow to publish authorizes these commits, merges, and branch updates; respect execution approvals required by the environment.

## Prepare

- Read the repository's `AGENTS.md`, inspect Git status and remotes, resolve and record the current implementation branch's base branch and its remote, then fetch that base branch. Record the implementation branch's HEAD, index state, and push destination. Derive the GitHub repository from the remote rather than hardcoding an account.
- Save a temporary snapshot of the exact current file contents, including uncommitted edits, and record its Git blob hash. Do not regenerate or normalize this generated file. Do not stage unrelated files, switch the user's active branch, or stash their changes. The targeted restoration below is authorized as part of this workflow despite the general restriction against editing generated metadata.
- Parse the snapshot as JSON. Compare it with the latest base branch's file and inspect the diff and whitespace checks. If identical, skip publication and continue with verification and branch synchronization. If the base contains substantive metadata absent from the snapshot, resolve the discrepancy with the user before replacing it; do not silently discard newer base changes.

## Publish

Prefer the connected GitHub app when it supports the operation. Discover the current tool schemas rather than assuming parameter names.

- Read the base branch file's current blob SHA and base branch head. The fetched Git objects can supply these values.
- Use the app's file-update operation with the repository, explicit base branch, exact full snapshot, current base blob SHA, and commit message. This creates and publishes the single-file commit in one operation; a separate local commit is unnecessary.
- Transfer the full contents through tool results or session storage without truncation, shell interpolation, or printing the entire JSON to the conversation. Validate that the transferred string parses and matches the snapshot's Git blob hash.
- If no suitable connected app is available, create a unique temporary detached worktree based on the fetched base branch. Copy the snapshot into it, stage only the file, commit, then push `HEAD:refs/heads/<base-branch>`. Keep the original checkout untouched. Remove the temporary worktree after success, verifying it has no uncommitted changes first.
- If command-line authentication fails, use an available connected GitHub app to publish the same snapshot and message. Do not retrieve, expose, or ask the user to paste credentials. Explain that the connected app handles authentication internally.
- Never force-push. On a rejected update or an ambiguous network failure, fetch and inspect the remote before retrying. If the exact contents are already published, verify success without creating a duplicate commit. If there is a substantive conflicting base-branch update or neither authentication route works, stop and report the concrete blocker and any prepared local commit.

## Verify and report

Fetch the base branch after publication. Confirm the published commit has the requested message, changes only the intended file, and contains exactly the snapshot's blob hash. When publication was skipped, verify that the base branch file already matches the snapshot.

## Synchronize the implementation branch

1. Only after remote verification succeeds, confirm that the current branch and HEAD still match the recorded values and that the local JSON still matches the published snapshot. If the user changed it meanwhile, preserve those edits and stop before restoring it.
2. Revert only the JSON's local changes to the implementation branch's HEAD with `git restore --source=HEAD --staged --worktree -- packages/docs/Api/Lib/ComponentsApi.json`. This removes the already-published pending change; do not create a revert commit on the base branch. Keep the snapshot until synchronization succeeds.
3. Merge the fetched base branch into the current branch, normally with `git merge --no-edit <remote>/<base-branch>`. If already on the base branch, fast-forward to its verified remote head instead. Preserve unrelated working files and index entries. If unrelated staged changes could enter a merge commit or local edits prevent the merge, stop and report the blocker without stashing, committing, or discarding them.
4. Resolve straightforward merge conflicts using the implementation's intent and the verified API snapshot. Do not blindly select a side for substantive conflicting changes. If resolution requires user input, retain the snapshot and report the conflict without pushing an incomplete merge.
5. Verify that the resulting HEAD contains the fetched base branch as an ancestor, that the JSON has no pending diff and matches the published blob, and that unrelated local changes remain intact. Push the current implementation branch to its recorded remote branch without force. If no upstream exists, use the same branch name on the repository's remote and establish the upstream.
6. If CLI authentication fails, use supported connected GitHub app operations to publish the verified local merge, preserving its complete tree and parent history. Never advance a ref to a commit whose required objects are unavailable remotely or replace the merge with a single-file update. If the available tools cannot publish it, retain the local merge and report the authentication blocker. Apply the same fetch-before-retry rule to rejected or ambiguous pushes.
7. Fetch and verify that the remote implementation branch contains the merged result. Remove the temporary snapshot after success.

Report the resolved base branch, its publication commit and message, the implementation branch's merge/push result, and any remaining blocker or backup location. Creating or updating this skill alone does not authorize executing its publishing workflow.
