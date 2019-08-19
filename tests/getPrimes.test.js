import { getPrimes } from '../src/getPrimes';

test('sanity', () => {
    expect(true).toBeTruthy();
});

test('getPrimes returns first 3 primes', () => {
    expect(getPrimes(3)).toEqual([2,3,5]);
});
test('getPrimes returns first 1 primes', () => {
    expect(getPrimes(1)).toEqual([2]);
});
test('getPrimes returns first 2 primes', () => {
    expect(getPrimes(2)).toEqual([2,3]);
});
test('getPrimes returns first 10 primes', () => {
    expect(getPrimes(10)).toEqual([2,3,5,7,11,13,17,19,23,29]);
});

test('getPrimes returns nothing for string input', () => {
    expect(getPrimes('string input')).toEqual([]);
});

test('getPrimes returns blank array for negative input', () => {
    expect(getPrimes(-1)).toEqual([]);
});

