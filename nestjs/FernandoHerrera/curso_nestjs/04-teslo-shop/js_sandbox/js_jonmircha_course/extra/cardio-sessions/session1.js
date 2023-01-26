// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olle'
function reverseString(str) {
  // return str.split("").reverse().join("");
  //////////////////////////
  // no reverse function
  // let revString = "";
  // for (let i = str.length - 1; i >= 0; i--) {
  //   revString += str[i];
  // }
  //////////////////////////
  // let revString = "";
  // for (let i = 0; i <= str.length - 1; i++) {
  //   revString = str[i] + revString;
  // }
  //////////////////////////
  // let revString = "";
  // for (const char of str) {
  //   revString = char + revString;
  // }
  // return revString;
  //////////////////////////
  // let revString = "";
  // str.split("").forEach((char) => (revString = char + revString));
  //////////////////////////
  let revString = "";
  return str.split("").reduce((reverseString, char) => char + reverseString);
}

// CHALLENGE 2: VALIDATE A PALINDROME
// RETURN TRUE IF PALINDROME AND FALSE IF NOT
// EX. isPalindrome('rececar') === 'true', isPalindrome('hello') == false;
function isPalindrome(str) {
  const revString = str.split("").reverse().join("");

  return revString === str;
}

// CHALLENGE 3: REVERSE AN INTEGER
// RETURN AN INTEGER IN REVERSE
// ex. reverseInt(521) === 125
function reverseInt(int) {
  const revString = int.toString().split("").reverse().join("");
  return parseInt(revString) * Math.sign(int);
}

// CHALLENGE 4: CAPITALIZE LETTERS
// RETURN A STRING WITH THE FIRST LETTER OF EVERY WORD CAPITALIZED
// ex. capitalizeletters('i love javascript') === 'I love Javascript'
function capitalizeletters(str) {
  // const strArr = str.toLowerCase().split(" ");
  // for (let i = 0; i < strArr.length; i++) {
  //   strArr[i] =
  //     strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  // }
  // return strArr.join(" ");
  //////////////////////////////////
  // return str
  //   .toLowerCase()
  //   .split(" ")
  //   .map((word) => word[0].toUpperCase() + word.substr(1))
  //   .join(" ");
  /////////////////////////////////
  return str.replace(/\b[a-z]/gi, (char) => char.toUpperCase());
}

// CHALLENGE 5: MAX CHARACTER
// RETURN THE CHARACTER THAT IS MOST COMMON IN A STRING
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0,
    maxChar = "";

  str.split("").forEach((char) => {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  for (const char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 Print "Buzz". For numbers wich are multiples of both 3 and 5 print "FizzBuzz"
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// Call function
// const output = reverseString("hello");
const output = isPalindrome("");
//const output = reverseInt(-12345);
// const output = capitalizeletters("maria del rocio baez mendez");
// const output = maxCharacter("javascript");
// const output = fizzBuzz();
console.log(output);
