import type { MaybeRefOrGetter }           from 'vue';
import type { FlyonUIVueAppDefaultConfig } from '@/Lib';
import { describe, expect, it }            from 'vitest';
import { ref }                             from 'vue';
import { flyonUIVueAppDefaultConfig }      from '@/Lib';
import { resetFlyonUIVueAppConfig }        from '@/Lib/UseFlyonUIVueAppConfig/Internal';

describe('resetFlyonUIVueAppConfig', (): void => {
    it.each<[MaybeRefOrGetter<FlyonUIVueAppDefaultConfig>]>([
        [{ ...flyonUIVueAppDefaultConfig }],
        [ref({ ...flyonUIVueAppDefaultConfig })],
        [(): FlyonUIVueAppDefaultConfig => ({ ...flyonUIVueAppDefaultConfig })],
    ])('resets a given config', (initialConfig: MaybeRefOrGetter<FlyonUIVueAppDefaultConfig>): void => {
        const config = ref<FlyonUIVueAppDefaultConfig>({
            ...flyonUIVueAppDefaultConfig,
            components: {
                FoBadge: {
                    color: 'accent',
                },
            },
        });

        expect(config.value).not.toStrictEqual(flyonUIVueAppDefaultConfig);

        resetFlyonUIVueAppConfig(config, initialConfig);

        expect(config.value).toStrictEqual(flyonUIVueAppDefaultConfig);
    });
});
