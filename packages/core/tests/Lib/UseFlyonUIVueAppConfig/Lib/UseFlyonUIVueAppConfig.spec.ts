import { flyonUIVueAppDefaultConfig, useFlyonUIVueAppConfig } from '@/Lib';
import { flushPromises, mount }                               from '@vue/test-utils';
import { describe, expect, it }                               from 'vitest';
import { defineComponent }                                    from 'vue';

describe('useFlyonUIVueAppConfig', () => {
    it('injects the right config if the CreateFlyonUIVueApp plugin is used', async () => {
        const TestApp = defineComponent({
            template: '<div />',
            setup:    (_props, _ctx) => {
                const { config } = useFlyonUIVueAppConfig();

                return { config };
            },
        });

        const wrapper = mount(TestApp);

        await flushPromises();

        expect(wrapper.vm.config).toStrictEqual(flyonUIVueAppDefaultConfig);
    });

    it('uses a fallback config if the CreateFlyonUIVueApp plugin is not used', async () => {
        const TestApp = defineComponent({
            template: '<div />',
            setup:    (_props, _ctx) => {
                const { config } = useFlyonUIVueAppConfig();

                return { config };
            },
        });

        const wrapper = mount(TestApp);

        await flushPromises();

        expect(wrapper.vm.config).toStrictEqual(flyonUIVueAppDefaultConfig);
    });

    it('resets the config when the resetConfig function is called', async () => {
        const TestApp = defineComponent({
            template: '<div />',
            setup:    (_props, _ctx) => {
                const { config, resetConfig } = useFlyonUIVueAppConfig();

                return { config, resetConfig };
            },
        });

        const wrapper = mount(TestApp);

        await flushPromises();

        expect(wrapper.vm.config).toStrictEqual(flyonUIVueAppDefaultConfig);

        wrapper.vm.config.global.color = 'error';

        expect(wrapper.vm.config).not.toStrictEqual(flyonUIVueAppDefaultConfig);

        wrapper.vm.resetConfig();

        expect(wrapper.vm.config).toStrictEqual(flyonUIVueAppDefaultConfig);
    });
});
