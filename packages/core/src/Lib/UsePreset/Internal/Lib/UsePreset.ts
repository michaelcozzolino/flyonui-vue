import type { FlyonUIVueAppDefaultConfig, Preset, PresettableComponentName  } from '@/Lib';
import type { ComputedRef, MaybeRefOrGetter, Ref }                            from 'vue';
import { useElementClass }                                                    from '@/Lib/UseClass/Internal';
import { computed, toValue }                                                  from 'vue';

export function usePreset(
    config: Ref<FlyonUIVueAppDefaultConfig>,
    componentName: MaybeRefOrGetter<PresettableComponentName>,
    preset: MaybeRefOrGetter<Preset | undefined>,
): ComputedRef<string> {
    const _preset = computed(() => {
        const { components, global } = config.value;

        return components?.[toValue(componentName)]?.preset ?? toValue(preset) ?? global.preset;
    });

    return useElementClass<PresettableComponentName, Preset>(
        componentName,
        {
            FoButton: {
                solid:    '',
                outline:  'btn-outline',
                dash:     'btn-outline border-dashed',
                soft:     'btn-soft',
                gradient: 'btn-gradient',
                text:     'btn-text',
            },
            FoBadge: {
                solid:    '',
                outline:  'badge-outline',
                dash:     'badge-outline border-dashed',
                soft:     'badge-soft',
                gradient: '',
                text:     '',
            },
        },
        _preset,
    );
}
