function maskify(str) {
    let newString = "";
    for (i = 0; i < str.length; i++) {
        if (i < str.length - 4) {
            newString = newString + str[i].replace(str[i], '#');
        } else {
            newString = newString + str[i]; 
        }
    } return newString;
} 

console.log(maskify("learning javascript takes effort and time"))