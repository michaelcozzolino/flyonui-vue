import type { Id } from '@/Shared/Types';

export type SelectOption<T extends number | string = number> = Id<T> & {
    text:        string;
    isDisabled?: boolean;
};
