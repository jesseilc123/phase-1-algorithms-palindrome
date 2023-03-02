function isPalindrome(word) {
  // Write your algorithm here
  let revsere = word.split('').reverse().join('')

  if(word === revsere){
    return true
  }else{
    return false
  }
}

isPalindrome("mom")
/* 
  Add your pseudocode here

  turn word into an array
  revsere the order of the array
  convert the array into a new string 

  set  up a conditional statment(if word is equal to new string)
    return true 
  else 
    return false 
*/

/*
  Add written explanation of your solution here

  first I initialized the variable "revsere"
    this varible will convert word to an array, 
    revsere the order, and convert it back to a string

    .split('') => is a method that splits the string into an array 
    by using ('') this means each index is separated into a string
    
    .reverse() => is a method used to reverse the order of the array

    .join('') => is used to convert the array into a string,
    by using ('') each array element is combined with no spaces
  
  Next I set up a conditional statement to check if word is eqaul to reverse
    I used "===" to check that the contents are the same 
    if the contents were the same then return true 
    if not then return false
*/

/*
  Rewriting the problem in my own words

  inputs - strings that form words(no numbers, special characters, spaces, etc)

  output - if palindrome return true, if NOT palindrome return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("racecar", "=>", isPalindrome("racecar"));
  console.log("mom", "=>", isPalindrome("mom"));
  console.log("kayak", "=>", isPalindrome("kayak"));
  console.log("deed", "=>", isPalindrome("deed"));
  console.log("deified", "=>", isPalindrome("deified"));

  console.log("");

  console.log("Expecting: false");

  console.log("robot", "=>", isPalindrome("robot"));
  console.log("monster", "=>", isPalindrome("monster"));
  console.log("dog", "=>", isPalindrome("dog"));
  console.log("whatever", "=>", isPalindrome("whatever"));
  console.log("conductor", "=>", isPalindrome("conductor"));
}

module.exports = isPalindrome;
