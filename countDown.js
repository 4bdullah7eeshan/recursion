function countDownIter (start) {
    for (let i = start; i > 0; i--) {
        console.log(i);
    }
    console.log("Let's Gooo!")
}

countDownIter(10);

function countDownRec (start) {
    if (start === 0) {
        console.log("Let's Gooo!");
        return;
    } else {
        console.log(start);
        countDownRec(start - 1);
    }
}

countDownRec(10);