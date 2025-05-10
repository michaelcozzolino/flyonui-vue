import type { Color, ColorableElementName, ColorableTextElementName } from '@/Shared/UseColor';
import type { ComputedRef, MaybeRefOrGetter }                         from 'vue';
import { useElementClass }                                            from '@/Shared/Internal';
import { isDefined }                                                  from '@/Shared/Internal/Lib/Assertions.ts';
import { computed }                                                   from 'vue';

export function useColor(
    elementName: MaybeRefOrGetter<ColorableElementName>,
    color: MaybeRefOrGetter<Color>,
): ComputedRef<string> {
    return useElementClass<ColorableElementName, Color>(
        elementName,
        {
            badge: {
                neutral:   '',
                primary:   'badge-primary',
                secondary: 'badge-secondary',
                accent:    'badge-accent',
                info:      'badge-info',
                success:   'badge-success',
                warning:   'badge-warning',
                error:     'badge-error',
            },
            btn: {
                neutral:   '',
                primary:   'btn-primary',
                secondary: 'btn-secondary',
                accent:    'btn-accent',
                info:      'btn-info',
                success:   'btn-success',
                warning:   'btn-warning',
                error:     'btn-error',
            },
            checkbox: {
                neutral:   '',
                primary:   'checkbox-primary',
                secondary: 'checkbox-secondary',
                accent:    'checkbox-accent',
                info:      'checkbox-info',
                success:   'checkbox-success',
                warning:   'checkbox-warning',
                error:     'checkbox-error',
            },
            link: {
                neutral:   'link-neutral',
                primary:   'link-primary',
                secondary: 'link-secondary',
                accent:    'link-accent',
                info:      'link-info',
                success:   'link-success',
                warning:   'link-warning',
                error:     'link-error',
            },
            loading: {
                neutral:   'text-neutral',
                primary:   'text-primary',
                secondary: 'text-secondary',
                accent:    'text-accent',
                info:      'text-info',
                success:   'text-success',
                warning:   'text-warning',
                error:     'text-error',
            },
            tooltip: {
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
        color,
    );
}

export function useTextColor(
    elementName: MaybeRefOrGetter<ColorableTextElementName>,
    color: MaybeRefOrGetter<Color | undefined>,
): ComputedRef<string> {
    return computed((): string => {
        if (isDefined(color)) {
            return useColor(elementName, color).value;
        }

        return '';
    });
}
