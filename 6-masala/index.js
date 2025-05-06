function getSumm(...arrays) {
    const flatArray = arrays.flat();
    let sum=0;
    
    for (let i = 0; i < flatArray.length; i++) {
        sum += flatArray[i];
    }
    if (sum > 10) {
        return { sum: 12 };
    } else {
        return { sum: 'seven' };
    }
}

console.log(getSumm(
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 0],
    [0, 1, 0],
    [0, 0, 1],
    [0, 0, 1, 5]
));