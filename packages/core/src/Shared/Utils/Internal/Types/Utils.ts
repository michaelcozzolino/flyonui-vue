export type IsUnion<T, U extends T = T> = (
    T extends any ? (U extends T ? false : true) : never
) extends false ? false : true;

export type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

export type PickIfExists<T, K extends string> = {
    [P in K & keyof T]: T[P]
};
