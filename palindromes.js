// Return true if a string is a palindrome

// My solution

function palindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    if (str === reversedStr) {
        return true
    }
    return false;
}

palindrome("car")