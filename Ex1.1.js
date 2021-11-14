let variable = true;

function boolean() {
    variable ? console.log('Yes') : console.log('no');
}


boolean(variable = false);