import type { useRouter }        from 'vitepress';
import type { Ref }              from 'vue';
import { useEventListener }      from '@vueuse/core';
import { getScrollOffset }       from 'vitepress';
import { onMounted, ref, watch } from 'vue';

interface ResolvedHeader {
    element: HTMLElement;
    hash:    string;
    top:     number;
}

/**
 * When false, the scroll listener callback won't be executed to avoid conflicts with other listeners such as the scroll
 * executed by the manual click on an anchor of the docs' sidebar.
 */
export const enableAnchorScrollSpy = ref<boolean>(true);

export function useAnchorScrollSpy(
    docsHeadings: Ref<NodeListOf<HTMLElement> | null>,
    router: ReturnType<typeof useRouter>,
): void {
    useEventListener(window, 'scroll', setActiveHash, { passive: true });

    const resolvedHeaders = ref<ResolvedHeader[]>([]);

    onMounted(() => {
        requestAnimationFrame(() => {
            resolvedHeaders.value = resolveHeaders();
            setActiveHash();
        });
    });

    watch(docsHeadings, () => {
        resolvedHeaders.value = resolveHeaders();
        requestAnimationFrame(setActiveHash);
    });

    /**
     * It resolves and sorts the headers depending on their top position to perform the right highlight when scrolling.
     */
    function resolveHeaders(): ResolvedHeader[] {
        if (docsHeadings.value === null) {
            return [];
        }

        const resolvedHeaders: ResolvedHeader[] = [];

        for (const heading of docsHeadings.value) {
            const anchor = heading.querySelector<HTMLAnchorElement>('a.header-anchor');

            if (anchor === null) {
                continue;
            }

            const top = getAbsoluteTop(heading);

            if (Number.isNaN(top)) {
                continue;
            }

            resolvedHeaders.push({
                element: heading,
                hash:    anchor.hash,
                top,
            });
        }

        return resolvedHeaders.sort((a, b) => a.top - b.top);
    }

    /**
     * It computes the vertical position of an element relative to the entire document, not the viewport.
     */
    function getAbsoluteTop(element: HTMLElement): number {
        let offsetTop                       = 0;
        let nextElement: HTMLElement | null = element;

        while (nextElement !== null && nextElement !== document.body) {
            if (nextElement.offsetParent === null) {
                return Number.NaN;
            }

            offsetTop += nextElement.offsetTop;

            if (nextElement.offsetParent instanceof HTMLElement) {
                nextElement = nextElement.offsetParent;
            } else {
                nextElement = null;
            }
        }

        return offsetTop;
    }

    function setActiveHash(): void {
        if (enableAnchorScrollSpy.value === false || resolvedHeaders.value.length === 0) {
            return;
        }

        const scrollY      = window.scrollY;
        const offset       = getScrollOffset();
        const innerHeight  = window.innerHeight;
        const offsetHeight = document.body.offsetHeight;

        // when the top of the page is reached we just use the first hash
        if (scrollY < 1) {
            setRouteHash(resolvedHeaders.value[0]?.hash ?? '', router);

            return;
        }

        // when the bottom of the page is reached we just use the last hash
        const isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1;

        if (isBottom) {
            setRouteHash(resolvedHeaders.value.at(-1)?.hash ?? '', router);

            return;
        }

        // inspired by VitePress src/client/theme-default/composables/outline.ts
        let activeHash = router.route.hash;

        for (const { hash, top } of resolvedHeaders.value) {
            if (top > scrollY + offset + 4) {
                break;
            }

            activeHash = hash;
        }

        setRouteHash(activeHash, router);
    }

    /**
     * It is not possible to navigate directly to the specific hash while scrolling because multiple scrolls might
     * trigger the same hash and the navigation would automatically scroll directly back to the beginning of the anchor.
     */
    function setRouteHash(hash: string, router: ReturnType<typeof useRouter>): void {
        router.route.hash = hash;
        history.replaceState(null, '', hash);
    }
}
