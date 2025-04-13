import type {
    Color,
    ColorableElementName,
    ColorableTextElementName,
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
    TextColor,
}                                             from '@/Shared/Types/Variants';
import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import { computed, toValue }                  from 'vue';

export function useColor(
    elementName: MaybeRefOrGetter<ColorableElementName>,
    color: MaybeRefOrGetter<Color>,
): ComputedRef<string> {
    return useElementClass<ColorableElementName, Color>(
        elementName,
        {
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
            checkbox: {
                default:   'checkbox-default',
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

export function useTextColor(
    elementName: MaybeRefOrGetter<ColorableTextElementName>,
    color: MaybeRefOrGetter<TextColor>,
): ComputedRef<string> {
    return useElementClass<ColorableTextElementName, TextColor>(
        elementName,
        {
            link: {
                default:   '',
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
                default:   '',
                neutral:   'text-neutral',
                primary:   'text-primary',
                secondary: 'text-secondary',
                accent:    'text-accent',
                info:      'text-info',
                success:   'text-success',
                warning:   'text-warning',
                error:     'text-error',
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
                dash:     'btn-outline border-dashed',
                soft:     'btn-soft',
                gradient: 'btn-gradient',
                text:     'btn-text',
            },
            badge: {
                default:  '',
                outline:  'badge-outline',
                dash:     'badge-outline border-dashed',
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
            'badge': {
                default: '',
                circle:  'rounded-full size-6 p-0 ',
                pilled:  'rounded-full',
                square:  'size-6 p-0',
            },
            'btn': {
                default: '',
                circle:  'btn-circle',
                pilled:  'rounded-full',
                square:  'btn-square',
            },
            'input-text': {
                default: '',
                circle:  '',
                pilled:  'rounded-full',
                square:  '',
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
            'btn': {
                default:          '',
                extraSmall:       'btn-xs',
                small:            'btn-sm',
                large:            'btn-lg',
                extraLarge:       'btn-xl',
                doubleExtraLarge: '',
            },
            'badge': {
                default:          '',
                extraSmall:       'badge-xs',
                small:            'badge-sm',
                large:            'badge-lg',
                extraLarge:       'badge-xl',
                doubleExtraLarge: '',
            },
            'checkbox': {
                default:          '',
                extraSmall:       'checkbox-xs',
                small:            'checkbox-sm',
                large:            'checkbox-lg',
                extraLarge:       'checkbox-xl',
                doubleExtraLarge: '',
            },
            'icon': {
                default:          'text-base',
                extraSmall:       'text-xs',
                small:            'text-sm',
                large:            'text-lg',
                extraLarge:       'text-xl',
                doubleExtraLarge: 'text-2xl',
            },
            'input-text': {
                default:          '',
                extraSmall:       'input-xs',
                small:            'input-sm',
                large:            'input-lg',
                extraLarge:       'input-xl',
                doubleExtraLarge: '',
            },
            'loading': {
                default:          '',
                extraSmall:       'loading-xs',
                small:            'loading-sm',
                large:            'loading-lg',
                extraLarge:       'loading-xl',
                doubleExtraLarge: '',
            },
            'menu': {
                default:          'menu-md',
                extraSmall:       'menu-xs',
                small:            'menu-sm',
                large:            'menu-lg',
                extraLarge:       'menu-xl',
                doubleExtraLarge: '',
            },
            'select': {
                default:          'select-md',
                extraSmall:       'select-xs',
                small:            'select-sm',
                large:            'select-lg',
                extraLarge:       'select-xl',
                doubleExtraLarge: '',
            },
            'textarea': {
                default:          'textarea-md',
                extraSmall:       'textarea-xs',
                small:            'textarea-sm',
                large:            'textarea-lg',
                extraLarge:       'textarea-xl',
                doubleExtraLarge: '',
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
            'join': {
                horizontal: '',
                vertical:   'join-vertical',
            },
            'list-group': {
                horizontal: 'w-full divide-base-content/25 flex flex-col sm:flex-row sm:divide-x sm:divide-y-0 first:*:sm:rounded-s-md first:*:sm:rounded-tr-none last:*:sm:rounded-e-md last:*:sm:rounded-bl-none rtl:divide-x-reverse',
                vertical:   '',
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
                horizontal: 'stats-horizontal',
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
            'btn': {
                default:  '',
                active:   'btn-active',
                disabled: 'btn-disabled',
            },
            'menu-item': {
                default:  '',
                active:   'menu-active',
                disabled: 'menu-disabled',
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
