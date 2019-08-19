/*function getPrimes2(numberToFetch) {
    numberToFetch *= 15;
    let primess = [];

    for (let i = 0; i < numberToFetch; i++) {
        primess[i] = 1;
    }
    primess[0] = 0;
    primess[1] = 0;

    for (let i = 2; i <= Math.sqrt(numberToFetch); i++) {
        if (primess[i]) {
            for (let j = 2; i * j <= numberToFetch; j++) {
                primess[i * j] = 0;
            }
        }
    }
    let resultt = [];
    primess.forEach((v, k) => {
        if (v == true) {
            resultt.push(k);
        }
    });
    return resultt.splice(0, numberToFetch / 15);
}
*/
/*
function isPrime(x) {
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}

function getPrimes3(numberToFetch) {
    let primes = [2];

    let currentNumber = 3;
    while (primes.length < numberToFetch) {
        if (isPrime(currentNumber)) {
            primes.push(currentNumber);
        }
        currentNumber += 2;
    }
    return primes;
}
*/

function getPrimes(numberToFetch) {

    if (typeof numberToFetch !== 'number' || parseInt(numberToFetch) <= 0) {
        return [];
    }

    let primes = [2];
    let c;
    let i = 3;
    for (let count = 2; count <= numberToFetch;) {
        for (c = 2; c <= i - 1; c++) {
            if (i % c == 0)
                break;
        }
        if (c == i) {
            primes.push(i);
            count++;
        }
        i += 2;
    }

    return primes;
}
/*
function getPrimesX(numberToFetch) {
    // numberToFetch *= 15;
    let primess = [];

    while (primess.length < numberToFetch) {
        for (let i = 0; i < numberToFetch; i++) {
            primess[i] = 1;
        }
        primess[0] = 0;
        primess[1] = 0;

        for (let i = 2; i <= Math.sqrt(numberToFetch); i++) {
            if (primess[i]) {
                for (let j = 2; i * j <= numberToFetch; j++) {
                    primess[i * j] = 0;
                }
            }
        }
    }
    let resultt = [];
    primess.forEach((v, k) => {
        if (v == true) {
            resultt.push(k);
        }
    });
    return resultt.splice(0, numberToFetch / 15);
}
*/
export { getPrimes }