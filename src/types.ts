export interface Monad<T> {
    map: (f: Function) => Monad<T>;
    chain: <U>(f: Function) => Monad<U>;
    join: () => T;
    inspect: () => string;
}

export type IdentityValue<T> = T;
export interface IdentityMonad<T> extends Monad<T> {}
