import type { FlyonUIVueAppDefaultConfig }         from '@/Shared/UseFlyonUIVueAppConfig';
import type { SizableComponentName, Size }         from '@/Shared/UseSize/Types';
import type { ComputedRef, MaybeRefOrGetter, Ref } from 'vue';
import { useElementClass }                         from '@/Shared/UseClass/Internal';
import { computed, toValue }                       from 'vue';

export function getSize(
    config: Ref<FlyonUIVueAppDefaultConfig>,
    componentName: MaybeRefOrGetter<SizableComponentName>,
    size: MaybeRefOrGetter<Size | undefined>,
): ComputedRef<Size> {
    return computed(() => {
        const { components, global } = config.value;

        return components?.[toValue(componentName)]?.size ?? toValue(size) ?? global.size;
    });
}

export function useSize(
    config: Ref<FlyonUIVueAppDefaultConfig>,
    componentName: MaybeRefOrGetter<SizableComponentName>,
    size: MaybeRefOrGetter<Size | undefined>,
): ComputedRef<string> {
    return useElementClass<SizableComponentName, Size>(
        componentName,
        {
            FoButton: {
                extraSmall: 'btn-xs',
                small:      'btn-sm',
                medium:     '',
                large:      'btn-lg',
                extraLarge: 'btn-xl',
            },
            FoBadge: {
                extraSmall: 'badge-xs',
                small:      'badge-sm',
                medium:     '',
                large:      'badge-lg',
                extraLarge: 'badge-xl',
            },
            FoCheckbox: {
                extraSmall: 'checkbox-xs',
                small:      'checkbox-sm',
                medium:     '',
                large:      'checkbox-lg',
                extraLarge: 'checkbox-xl',
            },
            FoInputText: {
                extraSmall: 'input-xs',
                small:      'input-sm',
                medium:     '',
                large:      'input-lg',
                extraLarge: 'input-xl',
            },
            FoLoading: {
                extraSmall: 'loading-xs',
                small:      'loading-sm',
                medium:     '',
                large:      'loading-lg',
                extraLarge: 'loading-xl',
            },
            FoMenu: {
                extraSmall: 'menu-xs',
                small:      'menu-sm',
                medium:     '',
                large:      'menu-lg',
                extraLarge: 'menu-xl',
            },
            FoSelect: {
                extraSmall: 'select-xs',
                small:      'select-sm',
                medium:     '',
                large:      'select-lg',
                extraLarge: 'select-xl',
            },
            FoTextarea: {
                extraSmall: 'textarea-xs',
                small:      'textarea-sm',
                medium:     '',
                large:      'textarea-lg',
                extraLarge: 'textarea-xl',
            },
            FoTooltip: {
                extraSmall: 'max-w-xs',
                small:      'max-w-sm',
                medium:     'max-w-xs',
                large:      'max-w-lg',
                extraLarge: 'max-w-xl',
            },
        },
        getSize(config, componentName, size),
    );
}
