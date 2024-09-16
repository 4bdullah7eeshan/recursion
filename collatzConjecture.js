function collatz(n) {
    if (n === 1) {
        return 0;
    } else if ((n % 2) === 0) {
        return 1 + collatz(n / 2);
    } else {
        return 1 + collatz(3 * n + 1);
    }
}

for (let i = 1; i <= 20; i++) {
    console.log(collatz(i));
}