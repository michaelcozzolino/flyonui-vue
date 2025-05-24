import type { State, StatefulComponentName }  from '@/Shared/UseState';
import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import { useElementClass }                    from '@/Shared/UseClass/Internal';

export function useState(
    componentName: MaybeRefOrGetter<StatefulComponentName>,
    state: MaybeRefOrGetter<State>,
): ComputedRef<string> {
    return useElementClass<StatefulComponentName, State>(
        componentName,
        {
            FoButton: {
                default:  '',
                active:   'btn-active',
                disabled: 'btn-disabled',
            },
            FoMenuItem: {
                default:  '',
                active:   'menu-active',
                disabled: 'menu-disabled',
            },
        },
        state,
    );
}
