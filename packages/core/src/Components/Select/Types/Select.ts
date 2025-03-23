import type { Id, IsDisabled } from '@/Shared/Types';

export interface SelectOption<T extends number | string = number> extends Id<T>, IsDisabled {
    text: string;
}
