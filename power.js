// =================================
// POWER FUNCTIONS
// =================================

// ------- Iterative Thinking -------
function powIter (base, power) {
    let result;

    result = 1;

    for (let i = 0; i < power; i++) {
        result *= base;
    }

    return result;
}

console.log(powIter(2, 5));

// ------- Recursive Thinking -------
// if...else
function powRec (base, power) {
    if (power === 1) {
        return base;
    } else {
        return base * powRec(base, power - 1);
    }
}

console.log(powRec(2, 5));

// Ternary
function powRecTer (base, power) {
    return (power === 1) ? base : (base * powRecTer(base, power - 1));
}

console.log(powRecTer(2, 5));