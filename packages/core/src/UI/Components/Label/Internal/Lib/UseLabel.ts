import type { FlyonUIVueAppDefaultConfig }         from '@/Lib';
import type { InputLabel, LabelType }              from '@/UI/Components';
import type { ConfigurableLabelComponentName }     from '@/UI/Components/Label/Internal/Types';
import type { ComputedRef, MaybeRefOrGetter, Ref } from 'vue';
import { computed, toValue }                       from 'vue';

export function useLabel<T extends LabelType>(
    config: Ref<FlyonUIVueAppDefaultConfig>,
    componentName: MaybeRefOrGetter<ConfigurableLabelComponentName>,
    label: MaybeRefOrGetter<string | InputLabel<T> | undefined>,
): ComputedRef<Required<InputLabel<T>> | undefined> {
    return computed((): Required<InputLabel<T>> | undefined => {
        const configurableLabel = toValue(label);

        if (configurableLabel === undefined) {
            return undefined;
        }

        const [labelType, globalLabelType] = [
            config.value.components?.[toValue(componentName)]?.labelType,
            config.value.global.labelType,
        ];

        if (typeof configurableLabel === 'string') {
            return {
                text:     configurableLabel,
                type:     (labelType ?? globalLabelType) as T,
                isHidden: false,
            };
        }

        return {
            text:     configurableLabel.text,
            type:     (configurableLabel.type === undefined ? 'text' : configurableLabel.type) as T,
            isHidden: configurableLabel.isHidden ?? false,
        };
    });
}
