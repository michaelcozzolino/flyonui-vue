import type { State, StatefulComponentName }  from '@/Lib';
import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import { useComponentClass }                  from '@/Lib/UseClass/Internal';

export function useState(
    componentName: MaybeRefOrGetter<StatefulComponentName>,
    state: MaybeRefOrGetter<State>,
): ComputedRef<string> {
    return useComponentClass<StatefulComponentName, State>(
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
