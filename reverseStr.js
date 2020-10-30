// REVERSE A STRING

// My Solution

function reverse(str){
  let newStr = [...str].reverse()
  let reversedStr = "";

  for (let i in newStr){
  let placeHolder = newStr[i]
  reversedStr += placeHolder.toString();
  } 

return reversedStr
}

reverse("jerlissa")

// First Algorithm Udemy Course Solution

function reverseOne(str){
    return arr = str.split('').reverse().join('')
  }
  
  reverseOne("hello")
  
  // Second Algorithm Udemy Course Solution
  
  function reverseTwo(str){
    let reversed = "";
  
    for (let char of str) {
      // reversed will be equal to the character that is now added on to the empty string 'reversed'
  
      reversed = char + reversed;
    }
    return reversed
  }
  
  reverseTwo("hola")
  
  // Third Algorithm Udemy Course Solution
  
  function reverseThree(str){
    return str.split('').reduce((reversed, char) => {
      return char + reversed
    })
  }
  
  reverseThree("hi there")