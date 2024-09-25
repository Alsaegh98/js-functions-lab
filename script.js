
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

//////////////////// exercise 4

function generateEmail( name, domain ) {
  return `${name}@${domain}`

  
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));
////////////////exercise 5

function greetUser( name, time ) {
  return `good ${time} ${name}`

  
}

 
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));


///////////////// exercise 6


const maxOfThree= ( x , y , z ) => {

  if (x < y){
    return y;
  }
else if (x < z){
  return z;
}
else if (y < z){
  return z;
}

else if (z < y){
  return y;
}
else
return x;
}
 
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

////////////////////////exercise 7

function calculateTip ( bill , percentage ) {

return bill * percentage / 100;

}
console.log('Exercise 7 Result:', calculateTip(50, 20));


///////////////// exercise 8

function convertTemperature( temperature , scale ){

if (scale === 'C'){
  return (temperature * (9/5)+32);
}
  else{
    return (temperature - 32);
  }

}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));


//////////// exercise 9

function basicCalculator( x , y , string ){

  if (string === 'subtract'){
    return x - y;
  }
  else if (string === 'add'){
    return x + y;
  }

  else if (string === 'multiply'){
    return x * y;
  }

  else if (string === 'divide'){
    return x / y;
  }
  
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
