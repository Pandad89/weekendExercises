function shortest(str) {
    let split = str.split(" ");
    let minLength = split[0].length;
    for (i = 1; i < split.length; i++) {
        if (split[i].length < minLength) {
            minLength = split[i].length;
        }
    } return minLength;
} 

console.log(shortest("The quick brown fox jumps over the lazy dog"))