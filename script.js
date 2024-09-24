
////// ecercise 1
const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

////////// exercise 2

const isAdult = (x) => {
    if (x >= 18) {
      return 'Adult';
    } else {
      return 'minor';
    }
  }
  
  console.log('Exercise 2 Result:', isAdult(21));

  ////////////// exercise 3

  const isCharAVowel = (char) => {

    if (char == 'a'){ 
        return 'true';
    }
    else if (char == 'e'){ 
      return 'true';
  }
  else if (char == 'i'){ 
    return 'true';
}
else if (char == 'o'){ 
  return 'true';
}
else if (char == 'u'){ 
  return 'true';
}
    else {
        return 'False';
    }
}

console.log('Exercise 3 Result:', isCharAVowel("a"));
