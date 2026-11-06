import type { Ref } from 'vue';

export interface InputPasswordInjectedOptions {
    isHidden: Ref<boolean>;
    toggle:   () => boolean;
}
