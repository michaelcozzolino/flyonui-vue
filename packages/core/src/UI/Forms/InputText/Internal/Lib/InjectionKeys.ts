import type { InjectionKey }                 from 'vue';
import type { InputPasswordInjectedOptions } from '@/UI/Forms/InputText/Internal/Types';

// Used for the input password to specify its type without doing it externally
export const isPasswordInjectionKey: InjectionKey<InputPasswordInjectedOptions> = Symbol('isPasswordInjectionKey');
