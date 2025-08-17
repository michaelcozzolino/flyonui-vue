import type { FloatingLabelComponentName }    from '@/Lib';
import type { LabelType }                     from '@/UI/Components';
import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import { useClass }                           from '@/Lib/UseClass/Internal';
import { computed, toValue }                  from 'vue';

export function useFloatingLabel(
    elementName: MaybeRefOrGetter<FloatingLabelComponentName>,
    labelType: MaybeRefOrGetter<LabelType | undefined>,
): ComputedRef<string> {
    return computed(() => {
        const isFloating = toValue(labelType) === 'floating';

        const classes: Record<FloatingLabelComponentName, ComputedRef<string>> = {
            FoInputText: useClass(isFloating, 'input-floating'),
            FoSelect:    useClass(isFloating, 'select-floating'),
            FoTextarea:  useClass(isFloating, 'textarea-floating'),
        };

        return classes[toValue(elementName)].value;
    });
}
