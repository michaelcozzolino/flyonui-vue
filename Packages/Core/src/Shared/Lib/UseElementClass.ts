import type {
    Color,
    ColorableElementName,
    ElementName,
    OrientableElementName,
    Orientation,
    Preset,
    PresetElementName,
    Shape,
    ShapeableElementName,
    SizableElementName,
    Size,
} from '@/Shared/Types/Variants';
import { computed, type ComputedRef, type MaybeRefOrGetter, toValue } from 'vue';

export function useColor(
    elementName: MaybeRefOrGetter<ColorableElementName>,
    color: MaybeRefOrGetter<Color>,
): ComputedRef<string> {
    return useElementClass<ColorableElementName, Color>(
        elementName,
        {
            btn: {
                default:   '',
                primary:   'btn-primary',
                secondary: 'btn-secondary',
                accent:    'btn-accent',
                info:      'btn-info',
                success:   'btn-success',
                warning:   'btn-warning',
                error:     'btn-error',
            },
            badge: {
                default:   '',
                primary:   'badge-primary',
                secondary: 'badge-secondary',
                accent:    'badge-accent',
                info:      'badge-info',
                success:   'badge-success',
                warning:   'badge-warning',
                error:     'badge-error',
            },
            checkbox: {
                default:   '',
                primary:   'checkbox-primary',
                secondary: 'checkbox-secondary',
                accent:    'checkbox-accent',
                info:      'checkbox-info',
                success:   'checkbox-success',
                warning:   'checkbox-warning',
                error:     'checkbox-error',
            },
        },
        color,
    );
}

export function usePreset(
    elementName: MaybeRefOrGetter<PresetElementName>,
    preset: MaybeRefOrGetter<Preset>,
): ComputedRef<string> {
    return useElementClass<PresetElementName, Preset>(
        elementName,
        {
            btn: {
                default:  '',
                outline:  'btn-outline',
                soft:     'btn-soft',
                gradient: 'btn-gradient',
                text:     'btn-text',
            },
            badge: {
                default:  '',
                outline:  'badge-outline',
                soft:     'badge-soft',
                gradient: '',
                text:     '',
            },
        },
        preset,
    );
}

export function useShape(
    elementName: MaybeRefOrGetter<ShapeableElementName>,
    shape: MaybeRefOrGetter<Shape>,
): ComputedRef<string> {
    return useElementClass<ShapeableElementName, Shape>(
        elementName,
        {
            btn: {
                default: '',
                circle:  'btn-circle',
                pilled:  'rounded-full',
                square:  'btn-square',
            },
        },
        shape,
    );
}

export function useSize(
    elementName: MaybeRefOrGetter<SizableElementName>,
    size: MaybeRefOrGetter<Size>,
): ComputedRef<string> {
    return useElementClass<SizableElementName, Size>(
        elementName,
        {
            btn: {
                default:    '',
                extraSmall: 'btn-xs',
                small:      'btn-sm',
                large:      'btn-lg',
                extraLarge: '',
            },
            menu: {
                default:    '',
                extraSmall: 'menu-xs',
                small:      'menu-sm',
                large:      'menu-lg',
                extraLarge: '',
            },
            select: {
                default:    '',
                extraSmall: 'select-xs',
                small:      'select-sm',
                large:      'select-lg',
                extraLarge: '',
            },
        },
        size,
    );
}

export function useOrientation(
    elementName: MaybeRefOrGetter<OrientableElementName>,
    orientation: MaybeRefOrGetter<Orientation>,
): ComputedRef<string> {
    return useElementClass<OrientableElementName, Orientation>(
        elementName,
        {
            'menu': {
                horizontal: 'menu-horizontal',
                vertical:   '',
            },
            'stat-list': {
                horizontal: '',
                vertical:   'stats-vertical',
            },
        },
        orientation,
    );
}

export function useElementClass<T extends ElementName, K extends string>(
    elementName: MaybeRefOrGetter<T>,
    availableClasses: MaybeRefOrGetter<Record<T, Record<K, string>>>,
    classKey: MaybeRefOrGetter<K>,
): ComputedRef<string> {
    return computed(() => {
        return toValue(availableClasses)[toValue(elementName)][toValue(classKey)];
    });
}
