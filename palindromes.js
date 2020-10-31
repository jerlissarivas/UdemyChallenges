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

// First Udemy Algorithms Course Solution

function palindromeOne(str) {
    let reversedStr = str.split('').reverse().join('');
    
    return str === reversedStr;
}

palindromeOne("car")

// Second Udemy Algorithms Course Solution

function palindromeTwo(str) {
    return str.split('').every((char, i) => {
      return char === str[str.length - i - 1];

    })
}

palindromeTwo("car")