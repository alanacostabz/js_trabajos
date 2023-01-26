// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// If more than one longest word, put in to an array
// ex. longestWord('Hello my name is Brad') === 'hello'
// ex. longestWord('Hello there, my name is Brad') === ['hello', 'there]
function longestWord(sen) {
  // create filtered array
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

  // sort by length
  const sorted = wordArr.sort((a, b) => b.length - a.length);

  // if multiple words, put into array
  const longestWordArr = sorted.filter(
    (word) => word.length === sorted[0].length
  );

  // check if more than one array val
  if (longestWordArr.length === 1) {
    // return the word
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}

// CHALLENGE 2: ARRAY CHINKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1,2,3,4,5,6,7],3) === [[1,2,3], [4,5,6],[7]]
// ex. chunkArray([1,2,3,4,5,6,7],2) === [[1,2], [3,4], [5,6], [7]]
function chunkArray(arr, len) {
  // SOLUTION 1
  // init chunkced array
  // const chunkedArr = [];
  // set index
  // let i = 0;
  // loop while index is less than the array length
  // while (i < arr.length) {
  // slice out from the index to the index + the chunk lenght no push on the chunked array
  //   chunkedArr.push(arr.slice(i, i + len));
  // increment by chunk length
  //   i += len;
  // }
  // return chunkedArr;
  ///////////////////////////////
  // SOLUTION 2
  // init chunked arr
  const chunkedArr = [];

  // Loop through arr
  arr.forEach(function (val) {
    // get las element
    const last = chunkedArr[chunkedArr.length - 1];

    // check if last and if last length is equal to the chunk lenght
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1,2], [3,4], [5,6], [7]] = {1,2,3,4,5,6,7}
function flattenArray(arrays) {
  // SOLUTION 1
  // return arrays.reduce(function (a, b) {
  //   return a.concat(b);
  // });
  //////////////////////////////////
  // SOLUTION 2
  //return [].concat.apply([], arrays);
  //////////////////////////////////
  // SOLUTION 3
  // function add(a, b, c) {
  //   return a + b + c;
  // }
  // const arr = [1, 2, 3];
  // console.log(add(...arr));
  // return [].concat(...arrays);
}

// SOLUTION 3
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex.  'Dormitory' === 'dirty romm##'
function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

// Helper funtion
function formatStr(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should return to A
// ex. 'hello there' === 'Ifmmp UIfsf'
function letterChanges(str) {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, function (char) {
    if (char === "z" || char === "Z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  newStr = newStr.replace(/[a|e|i|o|u]/gi, function (vowel) {
    return vowel.toUpperCase();
  });

  return newStr;
}

// Call function
// const output = longestWord("Hello, my name is Rocioo");
// const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
// const output = flattenArray([[1, 2], [3, 4], [5, 6], [7]]);
// const output = isAnagram("elbow", "below##");
const output = letterChanges("Hello There");
console.log(output);
