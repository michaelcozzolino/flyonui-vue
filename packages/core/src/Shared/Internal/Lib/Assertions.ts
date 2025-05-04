import type { MaybeRefOrGetter } from 'vue';
import { toValue }               from 'vue';

export function isDefined<T>(value: MaybeRefOrGetter<T>): value is Exclude<T, undefined> {
    return toValue(value) !== undefined;
}
