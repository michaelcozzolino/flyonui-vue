import type { Color, ConfigurableComponentName, ConfigurableProperty, FlyonUIVueAppDefaultConfig } from '@/Lib';
import { describe, expect, it }                                                                    from 'vitest';
import { ref }                                                                                     from 'vue';
import { flyonUIVueAppDefaultConfig }                                                              from '@/Lib';
import {
    useFlyonUIVueAppConfigProperty,
}                                                                                                  from '@/Lib/UseFlyonUIVueAppConfig/Internal';

describe('useFlyonUIVueAppConfigProperty', (): void => {
    it('returns the defined component config value when the component has no value', (): void => {
        const componentName: ConfigurableComponentName = 'FoButton';
        const property: ConfigurableProperty<typeof componentName> = 'color';
        const expectedValue: Color = 'secondary';

        const config = ref<FlyonUIVueAppDefaultConfig>({
            ...flyonUIVueAppDefaultConfig,
            components: { [componentName]: { [property]: expectedValue } },
        });

        expect(useFlyonUIVueAppConfigProperty(config, componentName, property, undefined).value).toBe(expectedValue);
    });

    it('returns the given value when there is no value specified in the component config', (): void => {
        const config = ref<FlyonUIVueAppDefaultConfig>({ ...flyonUIVueAppDefaultConfig });

        expect(
            useFlyonUIVueAppConfigProperty(config, (): 'FoButton' => 'FoButton', 'color', (): 'secondary' => 'secondary').value,
        ).toBe('secondary');
    });

    it('returns the global config value when neither the component config value nor the given value are defined', (): void => {
        const config = ref<FlyonUIVueAppDefaultConfig>({ ...flyonUIVueAppDefaultConfig });

        expect(
            useFlyonUIVueAppConfigProperty(config, ref('FoButton'), 'color', ref(undefined)).value,
        ).toBe('neutral');
    });
});
