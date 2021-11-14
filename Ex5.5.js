function abbreviate(str) {
    let newString = "";
    let split = str.split(" ");
    for (i = 0; i < split.length; i++) {
            newString = newString + split[i][0].toUpperCase() + "." +  split[i].slice(0,0);
    } return newString;
} 

console.log(abbreviate("Adam Birnbaum"))