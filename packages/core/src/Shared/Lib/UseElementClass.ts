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
    State,
    StatefulElementName,
} from '@/Shared/Types/Variants';
import { computed, type ComputedRef, type MaybeRefOrGetter, toValue } from 'vue';

export function useColor(
    elementName: MaybeRefOrGetter<ColorableElementName>,
    color: MaybeRefOrGetter<Color>,
): ComputedRef<string> {
    return useElementClass<ColorableElementName, Color>(
        elementName,
        {
            badge: {
                default:   '',
                neutral:   'badge-neutral',
                primary:   'badge-primary',
                secondary: 'badge-secondary',
                accent:    'badge-accent',
                info:      'badge-info',
                success:   'badge-success',
                warning:   'badge-warning',
                error:     'badge-error',
            },
            btn: {
                default:   '',
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
                default:   '',
                neutral:   '',
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
            badge: {
                default: '',
                circle:  'rounded-full size-6 p-0 ',
                pilled:  'rounded-full',
                square:  'size-6 p-0',
            },
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
            badge: {
                default:    '',
                extraSmall: 'badge-xs',
                small:      'badge-sm',
                large:      'badge-lg',
                extraLarge: 'badge-xl',
            },
            checkbox: {
                default:    '',
                extraSmall: 'checkbox-xs',
                small:      'checkbox-sm',
                large:      'checkbox-lg',
                extraLarge: '',
            },
            icon: {
                default:    'text-base',
                extraSmall: 'text-xs',
                small:      'text-sm',
                large:      'text-lg',
                extraLarge: 'text-xl',
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
            'checkbox': {
                horizontal: 'gap-4 horizontal-scrollbar',
                vertical:   'flex-col gap-2',
            },
            'list-group': {
                horizontal: 'w-full divide-base-content/25 flex flex-col sm:flex-row sm:divide-x sm:divide-y-0 first:*:sm:rounded-s-md first:*:sm:rounded-tr-none last:*:sm:rounded-e-md last:*:sm:rounded-bl-none rtl:divide-x-reverse',
                vertical:   'w-96',
            },
            'list-group-item': {
                horizontal: 'w-full',
                vertical:   'flex items-center',
            },
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

export function useState(
    elementName: MaybeRefOrGetter<StatefulElementName>,
    state: MaybeRefOrGetter<State>,
): ComputedRef<string> {
    return useElementClass<StatefulElementName, State>(
        elementName,
        {
            btn: {
                default:  '',
                active:   'btn-active',
                disabled: 'btn-disabled',
            },
        },
        state,
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
