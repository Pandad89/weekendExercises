function toCamelCase(str) {
    let split = str.split(/[-_]/);
    let newString = split[0];
    for (i = 1; i < split.length; i++) {
            newString = newString + split[i][0].toUpperCase() + split[i].slice(1);
    } return newString;
} 

console.log(toCamelCase("please-enjoy_this-code"))