function isPalindrome(word) {
  const backWord = word.toLowerCase().split("").reverse().join("") 
  if (backWord === word) {
    return true
  } else {
    return false
  }
}
/* 
  Add your pseudocode here
take in a word (argument),
reverse the letters,
then compare that reversed word to the original argument.
  */

/*
  Add written explanation of your solution here
  the function takes a word as an argument, 
  then converts the letters to lowercase, 
  reverses the order of the letters,
  then compares it to the original argument.
  if the values are the same the function returns true;
  if the values are not the same the function return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
