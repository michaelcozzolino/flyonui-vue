import type { IsUnion } from '@/Shared/Utils/Internal';

export type Identifiable<
    Name extends string = 'id',
    Value extends number | string = number,
> = IsUnion<Name> extends false
    ? { readonly [K in Name]: Value }
    : never;

// todo: vue might not recognize this properly
export type Id<T extends number | string = number> = Identifiable<'id', T>;

interface StringId {
    id: string;
}

export type MaybeStringId = Partial<StringId>;
