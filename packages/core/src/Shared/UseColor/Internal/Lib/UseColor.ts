import type { FlyonUIVueAppDefaultConfig }                                from '@/Configuration/CreateFlyonUIVueApp';
import type { Color, ColorableComponentName, ColorableTextComponentName } from '@/Shared/UseColor';

import type { ComputedRef, MaybeRefOrGetter, Ref } from 'vue';
import { useElementClass }                         from '@/Shared/UseClass/Internal';
import { isDefined }                               from '@/Shared/Utils/Internal';
import { computed, toValue }                       from 'vue';

export function useColor(
    config: Ref<FlyonUIVueAppDefaultConfig>,
    componentName: MaybeRefOrGetter<ColorableComponentName>,
    color: MaybeRefOrGetter<Color | undefined>,
): ComputedRef<string> {
    const _color = computed(() => {
        const { components, global } = config.value;

        return components?.[toValue(componentName)]?.color ?? toValue(color) ?? global.color;
    });

    return useElementClass<ColorableComponentName, Color>(
        componentName,
        {
            FoBadge: {
                neutral:   '',
                primary:   'badge-primary',
                secondary: 'badge-secondary',
                accent:    'badge-accent',
                info:      'badge-info',
                success:   'badge-success',
                warning:   'badge-warning',
                error:     'badge-error',
            },
            FoButton: {
                neutral:   '',
                primary:   'btn-primary',
                secondary: 'btn-secondary',
                accent:    'btn-accent',
                info:      'btn-info',
                success:   'btn-success',
                warning:   'btn-warning',
                error:     'btn-error',
            },
            FoCheckbox: {
                neutral:   '',
                primary:   'checkbox-primary',
                secondary: 'checkbox-secondary',
                accent:    'checkbox-accent',
                info:      'checkbox-info',
                success:   'checkbox-success',
                warning:   'checkbox-warning',
                error:     'checkbox-error',
            },
            FoLink: {
                neutral:   'link-neutral',
                primary:   'link-primary',
                secondary: 'link-secondary',
                accent:    'link-accent',
                info:      'link-info',
                success:   'link-success',
                warning:   'link-warning',
                error:     'link-error',
            },
            FoLoading: {
                neutral:   'text-neutral',
                primary:   'text-primary',
                secondary: 'text-secondary',
                accent:    'text-accent',
                info:      'text-info',
                success:   'text-success',
                warning:   'text-warning',
                error:     'text-error',
            },
            FoRadio: {
                neutral:   '',
                primary:   'radio-primary',
                secondary: 'radio-secondary',
                accent:    'radio-accent',
                info:      'radio-info',
                success:   'radio-success',
                warning:   'radio-warning',
                error:     'radio-error',
            },
            FoTooltip: {
                neutral:   '',
                primary:   'tooltip-primary',
                secondary: 'tooltip-secondary',
                accent:    'tooltip-accent',
                info:      'tooltip-info',
                success:   'tooltip-success',
                warning:   'tooltip-warning',
                error:     'tooltip-error',
            },
        },
        _color,
    );
}

export function useTextColor(
    config: Ref<FlyonUIVueAppDefaultConfig>,
    componentName: MaybeRefOrGetter<ColorableTextComponentName>,
    color: MaybeRefOrGetter<Color | undefined>,
): ComputedRef<string> {
    return computed((): string => {
        if (isDefined(color)) {
            return useColor(config, componentName, color).value;
        }

        return '';
    });
}
