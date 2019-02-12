import {IdentityMonad, IdentityValue} from './types';

const Identity = <T>(x: IdentityValue<T>): IdentityMonad<T> => ({
    map: (f: Function): IdentityMonad<T> => Identity(f(x)),
    chain: <U>(f: Function): IdentityValue<U> => f(x),
    inspect: (): string => `Identity(${x})`,
    join: (): IdentityValue<T> => x
});

const IdentityOf = <T>(x: IdentityValue<T>): IdentityMonad<T> => Identity(x);

const exportIdentity = {
    of: IdentityOf
};

export {exportIdentity as Identity};
