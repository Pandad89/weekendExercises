const test = [5,3,10,8,1,7,9];

function lowestTwo(test) {
    let smallest = test.sort((a, b) => a - b).slice(0, 2);
    let sum = smallest[0] + smallest [1];
    return sum;
}
console.log(lowestTwo(test));