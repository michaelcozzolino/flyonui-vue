import type { MaybeRefOrGetter, Ref }      from 'vue';
import type { FlyonUIVueAppDefaultConfig } from '@/Lib';
import {  toValue }                        from 'vue';

export function resetFlyonUIVueAppConfig(
    config: Ref<FlyonUIVueAppDefaultConfig>,
    initialConfig: MaybeRefOrGetter<FlyonUIVueAppDefaultConfig>,
): void {
    config.value = toValue(initialConfig);
}
