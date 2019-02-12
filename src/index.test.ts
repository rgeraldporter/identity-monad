import { Identity } from './index';
import { IdentityMonad } from './types';

describe('The monad', () => {
    it('should satisfy the first monad law of left identity', () => {
        const f = (n: number): IdentityMonad<number> => Identity.of(n * 2);

        // 1. unit(x).chain(f) ==== f(x)
        const leftIdentity1 = Identity.of(1).chain(f);
        const leftIdentity2 = f(1);

        expect(leftIdentity1.join()).toEqual(leftIdentity2.join());
    });

    it('should satisfy the second monad law of right identity', () => {
        // 2. m.chain(unit) ==== m
        const rightIdentity1 = Identity.of(2).chain(Identity.of);
        const rightIdentity2 = Identity.of(2);

        expect(rightIdentity1.join()).toEqual(rightIdentity2.join());
    });

    it('should satisfy the third monad law of associativity', () => {
        const g = (n: number): IdentityMonad<number> => Identity.of(n + 1);
        const f = (n: number): IdentityMonad<number> => Identity.of(n * 2);

        // 3. m.chain(f).chain(g) ==== m.chain(x => f(x).chain(g))
        const associativity1 = Identity.of(3)
            .chain(g)
            .chain(f);
        const associativity2 = Identity.of(3).chain((x: number) =>
            g(x).chain(f)
        );

        expect(associativity1.join()).toEqual(associativity2.join());
    });
});
