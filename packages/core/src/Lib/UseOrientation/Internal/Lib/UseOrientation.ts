import type { OrientableComponentName, Orientation } from '@/Lib';
import type { ComputedRef, MaybeRefOrGetter }        from 'vue';
import { useComponentClass }                         from '@/Lib/UseClass/Internal';

export function useOrientation(
    componentName: MaybeRefOrGetter<OrientableComponentName>,
    orientation: MaybeRefOrGetter<Orientation>,
): ComputedRef<string> {
    return useComponentClass<OrientableComponentName, Orientation>(
        componentName,
        {
            FoCheckboxGroup: {
                horizontal: 'gap-4 overflow-x-auto',
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
