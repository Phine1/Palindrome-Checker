// function palindrome(str) {
//     //removing white spaces inside the string parameter
//     let splitLetters = str.replace(/[^0-9a-z]/gi, '').toLowerCase().split('');
//     let passedString = splitLetters.slice();
//     let reversedLetters = splitLetters.slice().reverse();

    
//     for(let i=0; i<splitLetters.length; i++) {
//         if(passedString[i]===reversedLetters[i]) {
//             return true
//         } else {
//             return false
//         }
//     }
  
// }
function palindrome(str) {
    //removing white spaces & alphanumeric characters inside the string parameter
    let splitLetters = str.replace(/[^0-9a-z]/gi, '').toLowerCase().split('');

    // Reversing the parameter passed to the function
    let reversedLetters = splitLetters.slice().reverse();

// comparing the passed string with the reversed
    if(splitLetters.join('') !== reversedLetters.join('')) {
        return false
    } else {
        return true
    }
    
}

//Testing the code
console.log(palindrome("almostomla"))
console.log(palindrome("never odd or even"))
console.log(palindrome("1 eye for of 1 eye."))



 