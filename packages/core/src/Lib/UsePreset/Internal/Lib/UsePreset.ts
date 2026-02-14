import type { FlyonUIVueAppDefaultConfig, Preset, PresettableComponentName } from '@/Lib';
import type { ComputedRef, MaybeRefOrGetter, Ref }                           from 'vue';
import { useComponentClass }                                                 from '@/Lib/UseClass/Internal';
import {
    useFlyonUIVueAppConfigProperty,
}                                                                            from '@/Lib/UseFlyonUIVueAppConfig/Internal';

export function usePreset(
    config: Ref<FlyonUIVueAppDefaultConfig>,
    componentName: MaybeRefOrGetter<PresettableComponentName>,
    preset: MaybeRefOrGetter<Preset | undefined>,
): ComputedRef<string> {
    return useComponentClass<PresettableComponentName, Preset>(
        componentName,
        {
            FoAlert: {
                solid:    '',
                outline:  'alert-outline',
                dash:     'alert-outline border-dashed',
                soft:     'alert-soft',
                gradient: '',
                text:     '',
                dot:      '',
            },
            FoButton: {
                solid:    '',
                outline:  'btn-outline',
                dash:     'btn-outline border-dashed',
                soft:     'btn-soft',
                gradient: 'btn-gradient',
                text:     'btn-text',
                dot:      '',
            },
            FoBadge: {
                solid:    '',
                outline:  'badge-outline',
                dash:     'badge-outline border-dashed',
                soft:     'badge-soft',
                gradient: '',
                text:     '',
                dot:      '',
            },
            FoDivider: {
                solid:    '',
                outline:  '',
                dash:     'divider-dashed',
                soft:     '',
                gradient: '',
                text:     '',
                dot:      'divider-dotted',
            },
            FoSwitch: {
                solid:    '',
                outline:  'switch-outline',
                dash:     '',
                soft:     '',
                gradient: '',
                text:     '',
                dot:      '',
            },
        },
        useFlyonUIVueAppConfigProperty(config, componentName, 'preset', preset),
    );
}
