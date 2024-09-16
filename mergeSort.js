// ================
// MERGE SORT
// ================

function mergeSort (array) {
    if (array.length === 1) {
        return array;
    } else {
        let arrayCenterIndex = Math.floor(array.length / 2);

        let leftSideArray = mergeSort(array.slice(0, arrayCenterIndex));
        let rightSideArray = mergeSort(array.slice(arrayCenterIndex));

        return merge(leftSideArray, rightSideArray);
    }
}

function merge(left, right) {
    if (!left.length) {
        return right;
    } else if (!right.length) {
        return left;
    } else {
        if (left[0] < right[0]) {
            return [left[0], ...merge(left.slice(1), right)];
        } else {
            return [right[0], ...merge(left, right.slice(1))];
        }
    }
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));