import type { IsUnion } from '@/Shared/Utils/Internal';

export type Identifiable<
    Name extends string = 'id',
    Value extends number | string = number,
> = IsUnion<Name> extends false
    ? { readonly [K in Name]: Value }
    : never;

export type Id<T extends number | string = number> = Identifiable<'id', T>;

type StringId = Identifiable<'id', string>;

export type MaybeStringId = Partial<StringId>;
