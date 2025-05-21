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
                horizontal: 'w-full divide-base-content/25 flex flex-col sm:flex-row sm:divide-x sm:divide-y-0 first:*:sm:rounded-s-md first:*:sm:rounded-tr-none last:*:sm:rounded-e-md last:*:sm:rounded-bl-none rtl:divide-x-reverse',
                vertical:   '',
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
