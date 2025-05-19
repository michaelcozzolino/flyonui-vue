import type { FlyonUIVueAppDefaultConfig }         from '@/Configuration/CreateFlyonUIVueApp';
import type { SizableComponentName, Size }         from '@/Shared/UseSize/Types';
import type { ComputedRef, MaybeRefOrGetter, Ref } from 'vue';
import { useElementClass }                         from '@/Shared/Internal';
import { computed, toValue }                       from 'vue';

export function useSize(
    config: Ref<FlyonUIVueAppDefaultConfig>,
    componentName: MaybeRefOrGetter<SizableComponentName>,
    size: MaybeRefOrGetter<Size | undefined>,
): ComputedRef<string> {
    const _size = computed(() => {
        const { components, global } = config.value;

        return components?.[toValue(componentName)]?.size ?? toValue(size) ?? global.size;
    });

    return useElementClass<SizableComponentName, Size>(
        componentName,
        {
            FoButton: {
                extraSmall:       'btn-xs',
                small:            'btn-sm',
                medium:           '',
                large:            'btn-lg',
                extraLarge:       'btn-xl',
                doubleExtraLarge: '',
            },
            FoBadge: {
                extraSmall:       'badge-xs',
                small:            'badge-sm',
                medium:           '',
                large:            'badge-lg',
                extraLarge:       'badge-xl',
                doubleExtraLarge: '',
            },
            FoCheckbox: {
                extraSmall:       'checkbox-xs',
                small:            'checkbox-sm',
                medium:           '',
                large:            'checkbox-lg',
                extraLarge:       'checkbox-xl',
                doubleExtraLarge: '',
            },
            FoIcon: {
                extraSmall:       'text-xs',
                small:            'text-sm',
                medium:           'text-base',
                large:            'text-lg',
                extraLarge:       'text-xl',
                doubleExtraLarge: 'text-2xl',
            },
            FoInputText: {
                extraSmall:       'input-xs',
                small:            'input-sm',
                medium:           '',
                large:            'input-lg',
                extraLarge:       'input-xl',
                doubleExtraLarge: '',
            },
            FoLoading: {
                extraSmall:       'loading-xs',
                small:            'loading-sm',
                medium:           '',
                large:            'loading-lg',
                extraLarge:       'loading-xl',
                doubleExtraLarge: '',
            },
            FoMenu: {
                extraSmall:       'menu-xs',
                small:            'menu-sm',
                medium:           '',
                large:            'menu-lg',
                extraLarge:       'menu-xl',
                doubleExtraLarge: '',
            },
            FoSelect: {
                extraSmall:       'select-xs',
                small:            'select-sm',
                medium:           '',
                large:            'select-lg',
                extraLarge:       'select-xl',
                doubleExtraLarge: '',
            },
            FoTextarea: {
                extraSmall:       'textarea-xs',
                small:            'textarea-sm',
                medium:           '',
                large:            'textarea-lg',
                extraLarge:       'textarea-xl',
                doubleExtraLarge: '',
            },
            FoTooltip: {
                extraSmall:       'max-w-xs',
                small:            'max-w-sm',
                medium:           'max-w-xs',
                large:            'max-w-lg',
                extraLarge:       'max-w-xl',
                doubleExtraLarge: 'max-w-xl',
            },
        },
        _size,
    );
}
