import type { Color, ConfigurableComponentName, ConfigurableProperty, FlyonUIVueAppDefaultConfig } from '@/Lib';
import { flyonUIVueAppDefaultConfig }                                                              from '@/Lib';
import {
    useFlyonUIVueAppConfigProperty,
}                                                                                                  from '@/Lib/UseFlyonUIVueAppConfig/Internal';
import { describe, expect, it } from 'vitest';
import { ref }                  from 'vue';

describe('useFlyonUIVueAppConfigProperty', () => {
    it('returns the component config value when defined instead of the given value', () => {
        const componentName: ConfigurableComponentName = 'FoButton';
        const property: ConfigurableProperty<typeof componentName> = 'color';
        const expectedValue: Color = 'secondary';

        const config = ref<FlyonUIVueAppDefaultConfig>({
            ...flyonUIVueAppDefaultConfig,
            components: { [componentName]: { [property]: expectedValue } },
        });

        expect(useFlyonUIVueAppConfigProperty(config, componentName, property, 'primary').value).toBe(expectedValue);
    });

    it('returns the given value when there is no value specified in the component config', () => {
        const config = ref<FlyonUIVueAppDefaultConfig>({ ...flyonUIVueAppDefaultConfig });

        expect(
            useFlyonUIVueAppConfigProperty(config, () => 'FoButton', 'color', () => 'secondary').value,
        ).toBe('secondary');
    });

    it('returns the global config value when neither the component config value nor the given value are defined', () => {
        const config = ref<FlyonUIVueAppDefaultConfig>({ ...flyonUIVueAppDefaultConfig });

        expect(
            useFlyonUIVueAppConfigProperty(config, ref('FoButton'), 'color', ref(undefined)).value,
        ).toBe('neutral');
    });
});
