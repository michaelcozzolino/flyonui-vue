import type { AsyncComponentLoader, Component } from 'vue';
import { isClient }                             from '@vueuse/core';
import { defineAsyncComponent, ref }            from 'vue';

/**
 * Knowing that te docs components are lazily loaded to split the bundle in small chunks, in order to load the
 * components example together with the Markdown headers, we need to know when all the registered asynchronous
 * components have been resolved, when true the final content is ready to be shown, otherwise, it must still wait.
 */
export const isDocsPageReady            = ref<boolean>(false);
export const pendingAsyncComponentCount = ref<number>(0);

let readyTimeoutId: number | null = null;

/**
 * Wraps docs and similar async components so the page is revealed
 * only after all markdown-mounted async blocks have resolved.
 */
export function defineAsyncDocsComponent<T extends Component>(component: AsyncComponentLoader<T>): T {
    return defineAsyncComponent(trackAsyncDocsComponent(component));
}

/**
 * Tracks pending async docs component loads and mark the docs page as ready once the last one finishes.
 */
function trackAsyncDocsComponent<T extends Component>(component: AsyncComponentLoader<T>): AsyncComponentLoader<T> {
    return async () => {
        clearReadyTimeout();
        pendingAsyncComponentCount.value += 1;

        return await component().finally(() => {
            pendingAsyncComponentCount.value = Math.max(0, pendingAsyncComponentCount.value - 1);

            if (pendingAsyncComponentCount.value === 0) {
                markDocsPageAsReady();
            }
        });
    };
}

/**
 * Cancels a previously scheduled ready commit when a new async load starts or the page state resets.
 */
function clearReadyTimeout(): void {
    if (readyTimeoutId === null) {
        return;
    }

    clearTimeout(readyTimeoutId);
    readyTimeoutId = null;
}

/**
 * Defers the ready flag to the next macrotask so new async loads can invalidate it before the page is revealed.
 */
export function markDocsPageAsReady(): void {
    if (isClient === false) {
        return;
    }

    clearReadyTimeout();

    if (pendingAsyncComponentCount.value > 0) {
        return;
    }

    readyTimeoutId = window.setTimeout(() => {
        if (pendingAsyncComponentCount.value === 0) {
            isDocsPageReady.value = true;
        }
    }, 0);
}

/**
 * Resets the docs page readiness on navigation before the next page's async Markdown components begin loading.
 */
export function resetDocsPageAsyncState(): void {
    pendingAsyncComponentCount.value = 0;
    isDocsPageReady.value = false;
    clearReadyTimeout();
}
