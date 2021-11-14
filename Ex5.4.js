function toWeirdCase(str) {
    let newString = "";
    for (i = 0; i < str.length; i++) {
        if (i %2 === 0) {
            newString = newString + str[i].toUpperCase();
        } else {
            newString = newString + str[i]; 
        }
    } return newString;
} 

console.log(toWeirdCase("learning javascript takes effort and time"))