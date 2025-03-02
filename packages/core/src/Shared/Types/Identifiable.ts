export type Identifiable<Value extends number | string = number, Name extends string = 'id'> = {
    readonly [id in Name]: Value;
};
