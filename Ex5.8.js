function longest(str) {
    let split = str.split(" ");
    let minLength = split[0].length;
    for (i = 1; i < split.length; i++) {
        if (split[i].length > minLength) {
            minLength = split[i].length;
        }
    } return minLength;
} 

console.log(longest("Power corrupts. Absolute power corrupts absolutely"))