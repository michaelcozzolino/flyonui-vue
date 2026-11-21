import type { ComputedRef, MaybeRefOrGetter }        from 'vue';
import type { Orientation }                          from '@/Lib';
import type { HorizontalPosition }                   from '@/Types';
import type { ProgressLabelPosition, ProgressValue } from '@/UI/Components/Progress/Types';
import { computed, toValue }                         from 'vue';

interface ProgressLabelState {
    position:           ProgressLabelPosition | 'floating' | undefined;
    title:              string;
    hasTitle:           boolean;
    isFloating:         boolean;
    isVerticalFloating: boolean;
    floatingSide:       HorizontalPosition;
}

interface UseProgressLabelReturn {
    numericValue:    ComputedRef<number>;
    percentageValue: ComputedRef<string>;
    label:           ComputedRef<ProgressLabelState>;
}

export function useProgressLabel(
    value: MaybeRefOrGetter<number | ProgressValue>,
    orientation: MaybeRefOrGetter<Orientation>,
): UseProgressLabelReturn {
    const numericValue = computed((): number => {
        const progressValue = toValue(value);

        return typeof progressValue === 'number' ? progressValue : progressValue.value;
    });

    const percentageValue = computed((): string => `${numericValue.value}%`);

    const label = computed((): ProgressLabelState => {
        const progressValue = toValue(value);
        const config        = typeof progressValue === 'number' ? undefined : progressValue.label;
        const isFloating    = config?.position === 'floating';

        return {
            position:           config?.position,
            title:              config?.title ?? '',
            hasTitle:           config?.title !== undefined,
            isFloating,
            isVerticalFloating: isFloating && toValue(orientation) === 'vertical',
            floatingSide:       isFloating ? config.side ?? 'left' : 'left',
        };
    });

    return {
        numericValue,
        percentageValue,
        label,
    };
}
