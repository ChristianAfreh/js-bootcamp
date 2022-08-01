//Challenge Area

// create an isValidPassword method
//criteria --> length is more than 8, it doesn't contain the word password

let isValidPassword= function(stringInput){
    if(stringInput.length >= 8 &&  (!stringInput.includes('password'))){
            return true;
        }

    else{
        return false;
    }
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123&(*&*&(^'))
console.log(isValidPassword('alkdflpassword'))