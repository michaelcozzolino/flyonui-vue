import type { FlyonUIVueAppConfig }                                                from '@/Lib';
import type { Direction }                                                          from '@/Types';
import { createFlyonUIVueApp, flyonUIVueAppDefaultConfig, useFlyonUIVueAppConfig } from '@/Lib';
import { flyonUIVueAppConfigLocalStorageKey }                                      from '@/Lib/UseFlyonUIVueAppConfig/Internal';
import { flushPromises, mount }                                                    from '@vue/test-utils';
import { useLocalStorage }                                                         from '@vueuse/core';
import deepmerge                                                                   from 'deepmerge';
import { useHead }                                                                 from 'unhead';
import { beforeEach, describe, expect, it, vi }                                    from 'vitest';
import { defineComponent }                                                         from 'vue';

vi.mock('@vueuse/core', { spy: true });
vi.mock('unhead', { spy: true });

describe('createFlyonUIVueApp', () => {
    beforeEach(() => {
        localStorage.removeItem(flyonUIVueAppConfigLocalStorageKey);
    });

    it('mutates the config and the head dir attribute immediately and after the text direction changes without mutating the default config', async () => {
        const TestApp = defineComponent({
            template: '<div />',
            setup:    (_props, _ctx) => {
                const { config } = useFlyonUIVueAppConfig();

                return { config };
            },
        });

        const userConfig: FlyonUIVueAppConfig = {
            global: {
                color: 'primary',
            },
            components: {
                FoButton: {
                    color: 'accent',
                },
            },
        };

        const wrapper = mount(TestApp, {
            global: {
                plugins: [
                    [createFlyonUIVueApp, userConfig],
                ],
            },
        });

        await flushPromises();

        const expectedConfig = deepmerge(flyonUIVueAppDefaultConfig, userConfig);

        expect(vi.mocked(useLocalStorage).mock.results[0]?.value.value).toStrictEqual(expectedConfig);
        expect(localStorage.getItem(flyonUIVueAppConfigLocalStorageKey)).toBe(JSON.stringify(expectedConfig));

        expect(document.dir).toBe(flyonUIVueAppDefaultConfig.global.direction);

        const newDirection: Direction = 'rtl';

        wrapper.vm.config.global.direction = newDirection;

        await flushPromises();

        expect(useHead).toHaveBeenCalledTimes(2);
        expect(document.dir).toBe(newDirection);

        // Checks that the default config didn't get mutated
        expect(flyonUIVueAppDefaultConfig.global.direction).toBe('ltr');
    });

    it('creates a FlyonUI vue app with the given user config and stores it inside the local storage', async () => {
        const TestApp = defineComponent({
            template: '<div />',
        });

        const userConfig: FlyonUIVueAppConfig = {
            global: {
                color: 'primary',
            },
            components: {
                FoButton: {
                    color: 'accent',
                },
            },
        };

        mount(TestApp, {
            global: {
                plugins: [
                    [createFlyonUIVueApp, userConfig],
                ],
            },
        });

        await flushPromises();

        const expectedConfig = deepmerge(flyonUIVueAppDefaultConfig, userConfig);

        expect(vi.mocked(useLocalStorage).mock.results[0]?.value.value).toStrictEqual(expectedConfig);
        expect(localStorage.getItem(flyonUIVueAppConfigLocalStorageKey)).toBe(JSON.stringify(expectedConfig));

        expect(useHead).toHaveBeenCalledTimes(1);
    });

    it('resets successfully the config to the default one after it has been changed', async () => {
        const TestApp = defineComponent({
            template: '<div />',
            setup:    (_props, _ctx) => {
                const { config, resetConfig } = useFlyonUIVueAppConfig();
                const setDir                  = (dir: Direction) => config.value.global.direction = dir;
                return { config, resetConfig, setDir };
            },
        });

        const userConfig: FlyonUIVueAppConfig = {};

        const wrapper = mount(TestApp, {
            global: {
                plugins: [
                    [createFlyonUIVueApp, userConfig],
                ],
            },
        });

        await flushPromises();

        const expectedConfig = deepmerge(flyonUIVueAppDefaultConfig, userConfig);

        expect(vi.mocked(useLocalStorage).mock.results[0]?.value.value).toStrictEqual(expectedConfig);
        expect(localStorage.getItem(flyonUIVueAppConfigLocalStorageKey)).toBe(JSON.stringify(expectedConfig));

        expect(document.dir).toBe(flyonUIVueAppDefaultConfig.global.direction);

        const newDirection: Direction = 'rtl';

        wrapper.vm.setDir(newDirection);

        await flushPromises();

        expect(document.dir).toBe(newDirection);

        wrapper.vm.resetConfig();

        await flushPromises();

        expect(wrapper.vm.config).toStrictEqual(flyonUIVueAppDefaultConfig);
    });
});
