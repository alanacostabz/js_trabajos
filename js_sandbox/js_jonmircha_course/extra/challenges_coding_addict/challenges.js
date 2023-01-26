/**
 *  1. LONGEST WORD
 */
function longestWord(str) {
  let words = str.split(" ");
  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

// console.log(longestWord("I woke up early today"));
// console.log(longestWord("I went straight to the beach"));

/**
 *    2. MATH SEQUENCES
 *       - Arithmetic, geometric or No pattern
 *       - no negative numbers
 */

function mathSequences(arr) {
  let arith = new Set();
  let geo = new Set();

  for (let i = 1; i < arr.length; i++) {
    let number1 = arr[i] - arr[i - 1];
    arith.add(number1);
    let number2 = arr[i] / arr[i - 1];
    geo.add(number2);
  }

  if (arith.size === 1) {
    return "Arithmetic";
  }

  if (geo.size === 1) {
    return "Geometric";
  }

  return -1;
}

// console.log(mathSequences([2, 4, 6, 8]));
// // "Arithmetic"
// console.log(mathSequences([3, 9, 27]));
// // "Geometric"
// console.log(mathSequences([2, 5, 15, 89]));
// // -1

/**
 *  3. LONGEST WORDS
 */
function longestWords(str) {
  let words = str.split(" ");
  let size = 0;
  let max = [""];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 0) {
      size = words[i].length;
      if (max[max.length - 1].length < words[i].length) {
        max = [];
        max.push(words[i]);
      } else {
        max = [...max, words[i]];
      }
    }
  }
  return [...max];
}

// console.log(longestWords("I woke up early today"));
// console.log(longestWords("I went straight to the beach"));

/**
 *  4. CAPITALIZE FIRST LETTER
 */
function capitalizeWords(str) {
  let words = str.split(" ").map((word) => {
    // LONG WAY
    // let firstLetter = word.slice(0, 1);
    // let rest = word.slice(1);
    // firstLetter = firstLetter.toUpperCase();
    // return `${firstLetter}${rest}`;

    // SHORT WAY
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return words.join(" ");
}

// console.log(capitalizeWords("I woke up early today"));
// console.log(capitalizeWords("I went straight to the beach"));

/**
 *  5. UNIQUE VALUES
 *    - return true only if all values are unique, otherwise false
 *    - using array, object, string method lastIndexOf
 *    - no Set data structure
 */
function unique(str) {
  // LAST INDEXOF WAY
  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) !== i) {
      return false;
    }
  }
  return true;

  // ARRAY WAY
  // let values = [];
  // for (const letter of str) {
  //   if (values.indexOf(letter) !== -1) {
  //     return false;
  //   }
  //   values.push(letter);
  // }
  // return true;
  // OBJECT WAY
  // let values = {};
  // for (const letter of str) {
  //   if (values[letter]) {
  //     return false;
  //   }
  //   values[letter] = "exists";
  // }
  // return true;
}

// console.log(unique("abcde")); // true
// console.log(unique("abacdefb")); // false

/**
 *  6. ARRAY SUM
 *    - pause to work on your solution and share
 */
function ArraySum(arr) {
  let tempArr = arr.sort((a, b) => {
    return a - b;
  });

  let largest = tempArr.pop();

  let number = 0;
  tempArr.forEach((item) => (number += item));

  return largest === number;
}

// console.log(ArraySum([1, 2, 4, 6, 13]));
// // returns true 1+2+4+6=13
// console.log(ArraySum([1, 2, 4, 34, 22]));
// // return false 1+2+4+22 = 29 29!= 34

/**
 *  7. UNIQUE VALUES WITH SET
 *    - unique values using set() data structure
 */

function uniqueWithSet(str) {
  // SHORT WAY
  return new Set(str).size === str.length;

  // LONG WAY
  // let tempStr = new Set();
  // for (const letter of str) {
  //   if (tempStr.has(letter)) {
  //     return false;
  //   }
  //   tempStr.add(letter);
  // }
  // return true;
}

// console.log(uniqueWithSet("abcde"));
// // returns true
// console.log(uniqueWithSet("abcdade"));
// // return false ad = duplucate

/**
 *  8. UNIQUE PROPERTY VALUES
 */
let products = [
  {
    title: "Nintendo Switch Oled",
    company: "Nintendo",
  },
  {
    title: "Nintendo Switch Oled",
    company: "Nintendo",
  },
  {
    title: "Playstation 5",
    company: "Sony",
  },
  {
    title: "Xbox Series X",
    company: "Microsoft",
  },
];

function getUnique(arr) {
  // MAP
  // let tempArr = arr.map((item) => item.company);
  // return [...new Set(tempArr)];

  // REDUCE
  // return [
  //   ...arr.reduce((acc, curr) => {
  //     acc.add(curr.company);
  //     return acc;
  //   }, new Set()),
  // ];

  // ONE LINE
  return new Set(products.map((item) => item.company));
}

// console.log(getUnique(products));

/**
 *  9. COUNTING LETTERS
 *    - return first word with greatesr number of repeated letters
 */
function countLetters(str) {
  let tempArr = str.split(" ");
  tempArr = tempArr.map((item) => {
    let tempItem = item.toLowerCase().split("");
    return tempItem.reduce(
      (acc, curr) => {
        acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
        if (acc[curr] > acc.max) {
          acc.max = acc[curr];
        }
        return acc;
      },
      { max: 1, word: item }
    );
  });

  let amount = 1;
  let word = "";

  for (let item of tempArr) {
    if (item.max > amount) {
      amount = item.max;
      word = item.word;
    }
  }

  if (amount > 1) {
    return word;
  }
  return -1;
}

// console.log(countLetters("Javascript is the greatest programming languageee"));

/**
 * 10. SECOND VALUE
 */
function secondValue(arr) {
  let values = [...new Set(arr)].sort((a, b) => a - b);
  if (values.length < 2) {
    return `${values[0]}`;
  } else if (values.length === 2) {
    return `${values[0]} ${values[1]}`;
  } else {
    return `${values[1]} ${values[values.length - 2]}`;
  }
}

// console.log(secondValue([1]));
// // 1
// console.log(secondValue([4, 2]));
// // 2 4
// console.log(secondValue([11, 44, 22]));
// // 11, 22, 44 === 22
// console.log(secondValue([3, 2, 88, 3, -11, 67, 7]));
// // -11, 2, 3, 7, 67, 88 === 2, 67

/**
  11. REPEATED NUMBERS
    - return number with most repeats
    - if two numbers the repeated the same return first
    - if none repeated return -1
 */
function testRepeat(arr) {
  let max = 1;
  let position = 0;
  let value = -1;

  let tempNumbers = arr.reduce((acc, curr, index) => {
    acc[curr] = acc[curr]
      ? { ...acc[curr], amount: acc[curr]["amount"] + 1 }
      : { amount: 1, index: index };

    let amount = acc[curr].amount;
    let place = acc[curr].index;

    if (amount > max || (amount === max && place <= position && amount > 1)) {
      max = amount;
      value = curr;
      position = place;
    }

    return acc;
  }, {});
  return value;
}

// console.log(testRepeat([5, 2, 2, 1, 5]));
// // return 5
// console.log(testRepeat([6, 5, 5, 10, 10, 10]));
// // return 10
// console.log(testRepeat([3, 4, 1, 6, 10]));
// // return -1

/**
  12. PRIME NUMBER
    - prime number = can only divide evenly by itself or one
    // 11 / 2 = 5.5
 */

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  // modulus % operator
  let root = Math.ceil(Math.sqrt(num));

  for (let i = 2; i <= root; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(isPrime(8));
// // false
// console.log(isPrime(11));
// // true
// console.log(isPrime(121));
// // false
// console.log(isPrime(127));
// // true

/*
  13. COUNT REPEATING LETTERS
    - string will not contain numbers or symbols only letters
 */
function countLetters(str) {
  let tempArr = str.split("");
  let letters = [];
  let count = 1;

  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] === tempArr[i + 1]) {
      count++;
    } else {
      let value = `${count}${tempArr[i]}`;
      letters = [...letters, value];
      count = 1;
    }
  }

  return letters.join("");
}

// console.log(countLetters("ffffeerttttooo"));
// // 3f2e1r4t3o

/*
  14. REGEX PALINDROME
*/
function checkPalindrome(str) {
  let tempStr = str
    .match(/[a-z0-9]/gi)
    .join("")
    .toLowerCase();

  let second = tempStr.split("").reverse().join("");

  // EASY WAY
  // str = str.toLowerCase();
  // let first = str.split(" ").join("");
  // let second = first.split("").reverse().join("");
  // console.log(second);
  // console.log(first);

  return tempStr === second;
}

console.log(checkPalindrome("Was it a car or a cat I saw"));
// true
console.log(checkPalindrome("Red -rum-, sir,-is-murder"));
// true
console.log(checkPalindrome("I got up early this morning"));
// false
