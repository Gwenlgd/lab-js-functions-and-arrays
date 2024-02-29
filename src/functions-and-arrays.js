// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1
  } else if (num1 < num2) {
    return num2
  } else {
    return num1 || num2
  }
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(long) {
  let longWord = ""

  if (long.length === 0) {
    return 0
  }

  for (const elem of long) {
    if (elem.length > longWord.length) {
      longWord = elem
    }
  }
  return longWord
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayNum) {
  let sum = 0;

  if (arrayNum.length === 0) {
    return 0;
  } else if (arrayNum.length === 1) {
    return arrayNum[0];
  }

  for (const number of arrayNum) {
    sum += number;
  }
  return sum

}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrNum) {

  if (arrNum.length === 0) {
    return 0;
  } else if (arrNum.length === 1) {
    return arrNum[0];
  }

  let average = sumNumbers(arrNum) / arrNum.length
  return average

}

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(findWord, elem) {
  if (findWord.length === 0) {
    return null;
  }

  for (let i = 0; i < findWord.length; i++) {
    if (findWord[i] === elem) {
      return true
    }
  }
  return false
}
