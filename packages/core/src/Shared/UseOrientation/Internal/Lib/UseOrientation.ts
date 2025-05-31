import type { OrientableComponentName, Orientation } from '@/Shared/UseOrientation';
import type { ComputedRef, MaybeRefOrGetter }        from 'vue';
import { useElementClass }                           from '@/Shared/UseClass/Internal';

export function useOrientation(
    componentName: MaybeRefOrGetter<OrientableComponentName>,
    orientation: MaybeRefOrGetter<Orientation>,
): ComputedRef<string> {
    return useElementClass<OrientableComponentName, Orientation>(
        componentName,
        {
            FoCheckboxGroup: {
                horizontal: 'gap-4 horizontal-scrollbar',
                vertical:   'flex-col gap-2',
            },
            FoJoin: {
                horizontal: '',
                vertical:   'join-vertical',
            },
            FoListGroup: {
                horizontal: 'flex w-full flex-col *:w-full max-sm:divide-y sm:flex-row sm:divide-x',
                vertical:   '*:first:rounded-t-md *:last:rounded-b-md divide-y',
            },
            FoListGroupItem: {
                horizontal: 'w-full',
                vertical:   'flex items-center',
            },
            FoMenu: {
                horizontal: 'menu-horizontal',
                vertical:   '',
            },
            FoStats: {
                horizontal: 'stats-horizontal',
                vertical:   'stats-vertical',
            },
        },
        orientation,
    );
}
