export type IsUnion<T, U extends T = T> = (
    T extends any ? (U extends T ? false : true) : never
) extends false ? false : true;
