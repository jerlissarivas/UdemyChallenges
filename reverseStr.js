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