import type { InjectionKey } from 'vue';
import { inject  }           from 'vue';

export function useSafeInjection<T>(key: InjectionKey<T> | string): T {
    const value = inject<T>(key);

    if (value === undefined) {
        throw new Error(`Injection key "${key.toString()}" not defined.`);
    }

    return value;
}
