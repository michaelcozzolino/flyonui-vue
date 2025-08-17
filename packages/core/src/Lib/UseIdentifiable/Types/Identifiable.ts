import type { IsUnion } from '@/Lib/Utils/Internal';

export type Identifiable<
    Name extends string = 'id',
    Value extends number | string = number,
> = IsUnion<Name> extends false
    ? { readonly [K in Name]: Value }
    : never;

// todo: vue might not recognize this properly
export type Id<T extends number | string = number> = Identifiable<'id', T>;

interface StringId {
    /** The component's id, if not given, a random one might be assigned */
    readonly id: string;
}

export type MaybeStringId = Partial<StringId>;
