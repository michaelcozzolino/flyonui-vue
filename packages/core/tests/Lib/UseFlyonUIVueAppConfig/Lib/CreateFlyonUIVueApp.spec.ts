import type { FlyonUIVueAppConfig, FlyonUIVueAppDefaultConfig }                    from '@/Lib';
import type { TextDirection }                                                      from '@/Types';
import { createFlyonUIVueApp, flyonUIVueAppDefaultConfig, useFlyonUIVueAppConfig } from '@/Lib';
import { flyonUIVueAppConfigLocalStorageKey }                                      from '@/Lib/UseFlyonUIVueAppConfig/Internal';
import { flushPromises, mount }                                                    from '@vue/test-utils';
import { noop, useLocalStorage }                                                   from '@vueuse/core';
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

        expect(document.dir).toBe(flyonUIVueAppDefaultConfig.global.textDirection);

        const newDirection: TextDirection = 'rtl';

        wrapper.vm.config.global.textDirection = newDirection;

        await flushPromises();

        expect(useHead).toHaveBeenCalledTimes(2);
        expect(document.dir).toBe(newDirection);

        // Checks that the default config didn't get mutated
        expect(flyonUIVueAppDefaultConfig.global.textDirection).toBe('ltr');
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

    it('merges the already existing config from the local storage with the new config', async () => {
        const existingConfig: FlyonUIVueAppDefaultConfig = {
            ...flyonUIVueAppDefaultConfig,
            components: { FoButton: { size: 'large' } },
        };

        localStorage.setItem(flyonUIVueAppConfigLocalStorageKey, JSON.stringify(existingConfig));

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

        const expectedConfig = deepmerge(userConfig, existingConfig);

        expect(vi.mocked(useLocalStorage).mock.results[0]?.value.value).toStrictEqual(expectedConfig);
        expect(localStorage.getItem(flyonUIVueAppConfigLocalStorageKey)).toBe(JSON.stringify(expectedConfig));

        const mergeDefaults = vi.mocked(useLocalStorage).mock.calls[0]?.[2]?.mergeDefaults;

        expect(
            typeof mergeDefaults === 'function' ? mergeDefaults(expectedConfig, userConfig) : noop(),
        ).toStrictEqual(expectedConfig);
    });

    it('resets successfully the config to the default one after it has been changed', async () => {
        const TestApp = defineComponent({
            template: '<div />',
            setup:    (_props, _ctx) => {
                const { config, resetConfig } = useFlyonUIVueAppConfig();
                const setDir                  = (dir: TextDirection) => config.value.global.textDirection = dir;
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

        expect(document.dir).toBe(flyonUIVueAppDefaultConfig.global.textDirection);

        const newDirection: TextDirection = 'rtl';

        wrapper.vm.setDir(newDirection);

        await flushPromises();

        expect(document.dir).toBe(newDirection);

        wrapper.vm.resetConfig();

        await flushPromises();

        expect(wrapper.vm.config).toStrictEqual(flyonUIVueAppDefaultConfig);
    });
});
