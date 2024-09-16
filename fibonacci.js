// ===================
// FIBONACCI
// ===================

// ------- 1. Fibonacci Value -------

// Recursion
function fibValueRec(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibValueRec(n - 1) + fibValueRec(n - 2);
    }
}

// Iteration
function fibValueIter(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        let a, b, value;

        a = 0;
        b = 1;

        for (let i = 2; i <= n; i++) {
            value = a + b;
            a = b;
            b = value;
        }

        return value;
    }
}

console.log(fibValueIter(77));


// ------- 2. Fibonacci Sequence (Generates the sequence upto 'n') -------

// Recursion
function fibSequenceRec(n) {
    if (n === 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        let sequence = fibSequenceRec(n - 1);
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
        return sequence;
    }
}

console.log(fibSequenceRec(8));

// Iteration
function fibSequenceIter(n) {
    if (n === 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else {
        let sequence = [0, 1];

        for (let i = 2; i < n; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);

        }
        return sequence;
    }
}

console.log(fibSequenceIter(8));