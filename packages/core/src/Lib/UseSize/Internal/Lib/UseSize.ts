import type { FlyonUIVueAppDefaultConfig }         from '@/Lib';
import type { SizableComponentName, Size }         from '@/Lib/UseSize/Types';
import type { ComputedRef, MaybeRefOrGetter, Ref } from 'vue';
import { useComponentClass }                       from '@/Lib/UseClass/Internal';
import { useFlyonUIVueAppConfigProperty }          from '@/Lib/UseFlyonUIVueAppConfig/Internal';

export function useSize(
    config: Ref<FlyonUIVueAppDefaultConfig>,
    componentName: MaybeRefOrGetter<SizableComponentName>,
    size: MaybeRefOrGetter<Size | undefined>,
): ComputedRef<string> {
    return useComponentClass<SizableComponentName, Size>(
        componentName,
        {
            FoAvatar: {
                extraSmall: 'text-xs size-6',
                small:      'text-sm size-8',
                medium:     'text-md size-10',
                large:      'text-lg size-12',
                extraLarge: 'text-xl size-14',
            },
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
            FoKeyboard: {
                extraSmall: 'kbd-xs',
                small:      'kbd-sm',
                medium:     '',
                large:      'kbd-lg',
                extraLarge: 'kbd-xl',
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
            FoModal: {
                extraSmall: '',
                small:      'modal-dialog-sm',
                medium:     '',
                large:      'modal-dialog-lg',
                extraLarge: 'modal-dialog-xl',
            },
            FoSelect: {
                extraSmall: 'select-xs',
                small:      'select-sm',
                medium:     '',
                large:      'select-lg',
                extraLarge: 'select-xl',
            },
            FoStatus: {
                extraSmall: 'status-xs',
                small:      'status-sm',
                medium:     '',
                large:      'status-lg',
                extraLarge: 'status-xl',
            },
            FoSwitch: {
                extraSmall: 'switch-xs',
                small:      'switch-sm',
                medium:     '',
                large:      'switch-lg',
                extraLarge: 'switch-xl',
            },
            FoTable: {
                extraSmall: 'table-xs',
                small:      'table-sm',
                medium:     '',
                large:      'table-lg',
                extraLarge: '',
            },
            FoTabs: {
                extraSmall: 'tabs-xs',
                small:      'tabs-sm',
                medium:     '',
                large:      'tabs-lg',
                extraLarge: 'tabs-xl',
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
        useFlyonUIVueAppConfigProperty(config, componentName, 'size', size),
    );
}
