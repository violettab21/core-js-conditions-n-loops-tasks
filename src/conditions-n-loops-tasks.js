/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > a && b > c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }
  let queenY = queen.y;
  let queenX = queen.x;
  if (queen.x < king.x) {
    if (queen.y < king.y) {
      for (let i = queen.x; i <= 8; i += 1) {
        queenX = i + 1;
        queenY += 1;
        if (queenX === king.x && queenY === king.y) {
          return true;
        }
      }
    } else {
      for (let i = queen.x; i <= 8; i += 1) {
        queenX = i + 1;
        queenY -= 1;
        if (queenX === king.x && queenY === king.y) {
          return true;
        }
      }
    }
  }
  if (queen.x > king.x) {
    if (queen.y < king.y) {
      for (let i = queen.x; i >= 0; i -= 1) {
        queenX = i - 1;
        queenY += 1;
        if (queenX === king.x && queenY === king.y) {
          return true;
        }
      }
    } else {
      for (let i = queen.x; i >= 0; i -= 1) {
        queenX = i - 1;
        queenY -= 1;
        if (queenX === king.x && queenY === king.y) {
          return true;
        }
      }
    }
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a !== 0 && b !== 0 && c !== 0) {
    if (
      (a === b && a + b > c) ||
      (a === c && a + c > b) ||
      (b === c && b + c > a)
    ) {
      return true;
    }
  }

  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let romanDozens = '';
  let romanOnes = '';
  const dozens = Math.floor(num / 10);
  for (let i = 0; i < dozens; i += 1) {
    romanDozens += 'X';
  }
  const ones = num % 10;
  if (ones > 0 && ones <= 3) {
    for (let i = 0; i < ones; i += 1) {
      romanOnes += 'I';
    }
  } else if (ones > 3 && ones <= 8) {
    romanOnes = 'V';
    if (ones < 5) {
      romanOnes = `I${romanOnes}`;
    }
    if (ones > 5) {
      for (let i = 0; i < ones - 5; i += 1) {
        romanOnes += 'I';
      }
    }
  } else if (ones === 9) {
    romanOnes = 'IX';
  }
  return romanDozens + romanOnes;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let resultString = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '0':
        resultString += 'zero';
        break;
      case '1':
        resultString += 'one';
        break;
      case '2':
        resultString += 'two';
        break;
      case '3':
        resultString += 'three';
        break;
      case '4':
        resultString += 'four';
        break;
      case '5':
        resultString += 'five';
        break;
      case '6':
        resultString += 'six';
        break;
      case '7':
        resultString += 'seven';
        break;
      case '8':
        resultString += 'eight';
        break;
      case '9':
        resultString += 'nine';
        break;
      case '.':
        resultString += 'point';
        break;
      case ',':
        resultString += 'point';
        break;
      case '-':
        resultString += 'minus';
        break;
      default:
        resultString += '';
        break;
    }
    if (i !== numberStr.length - 1) {
      resultString += ' ';
    }
  }
  return resultString;
}
/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (letter === str[i]) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const string = String(num);
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === String(digit)) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 1; i < arr.length; i += 1) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = 0; j < i; j += 1) {
      leftSum += arr[j];
    }
    for (let j = i + 1; j < arr.length; j += 1) {
      rightSum += arr[j];
    }
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    const arr = [];
    for (let j = 0; j < size; j += 1) {
      arr[j] = j;
    }
    matrix[i] = arr;
  }
  let count1 = 0;
  let count2 = 0;
  let i = 0;
  let b = 0;
  let value = 0;
  for (let k = 0; k < size * 2 - 1; k += 1) {
    if (k % 2 === 0) {
      count1 += 1;

      if (count1 % 2 !== 0) {
        for (let j = i; j < size - i; j += 1) {
          value += 1;
          matrix[i][j] = value;
        }
        i += 1;
      } else {
        for (let j = size - i - 1; j >= i - 1; j -= 1) {
          value += 1;
          matrix[size - i][j] = value;
        }
      }
    } else {
      count2 += 1;

      if (count2 % 2 !== 0) {
        for (let j = b + 1; j < size - b; j += 1) {
          value += 1;
          matrix[j][size - 1 - b] = value;
        }
        b += 1;
      } else {
        for (let j = size - b - 1; j >= b; j -= 1) {
          value += 1;
          matrix[j][b - 1] = value;
        }
      }
    }
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const initialM = matrix.length;
  const initialN = matrix[0].length;

  const copyMatrix = [];

  const rotatedMatrix = matrix;
  for (let i = 0; i < initialM; i += 1) {
    copyMatrix[i] = [];
    for (let j = 0; j < initialN; j += 1) {
      copyMatrix[i][j] = matrix[i][j];
    }
  }

  for (let i = 0; i < initialN; i += 1) {
    for (let j = 0; j < initialM; j += 1) {
      rotatedMatrix[j][i] = copyMatrix[initialN - i - 1][j];
    }
  }
  return rotatedMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  function sort(array, left, right) {
    const swappedArray = array;
    const pivot = swappedArray[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;
    while (i <= j) {
      while (swappedArray[i] < pivot) {
        i += 1;
      }

      while (swappedArray[j] > pivot) {
        j -= 1;
      }

      if (i <= j) {
        const temp = swappedArray[i];
        swappedArray[i] = swappedArray[j];
        swappedArray[j] = temp;
        i += 1;
        j -= 1;
      }
    }
    const sortedPosition = i;
    if (sortedPosition - 1 > left) sort(swappedArray, left, sortedPosition - 1);
    if (sortedPosition < right) sort(swappedArray, sortedPosition, right);
    return swappedArray;
  }
  const sortedArray = sort(arr, 0, arr.length - 1);
  return sortedArray;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 *  '0123', 2 => '0213' => 01234
 */
function shuffleChar(str, iterations) {
  const initialStr = str;
  function shuffle(string, i) {
    if (i !== 0) {
      let newStr1 = '';
      let newStr2 = '';
      for (let j = 0; j < string.length; j += 1) {
        if (j % 2 === 0) newStr1 += string[j];
        else newStr2 += string[j];
      }
      const res = newStr1 + newStr2;
      if (res === initialStr) {
        return shuffle(res, iterations % (iterations - i + 1));
      }
      return shuffle(res, i - 1);
    }
    return string;
  }
  return shuffle(str, iterations);
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const string = String(number);
  const arr = [];
  for (let i = 0; i < string.length; i += 1) {
    arr.push(string[i]);
  }
  let min;
  let minIndex;
  let tempArray = [];
  const arrayLength = arr.length;
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (arr[i - 1] < arr[i]) {
      min = arr[i - 1];
      minIndex = i - 1;
      for (let j = i - 1; j <= arr.length - 1; j += 1) {
        tempArray.push(arr[j]);
      }
      break;
    }
  }
  tempArray.sort((a, b) => a - b);

  const minIndexTemp = tempArray.findLastIndex((el) => el === min);
  const nextMin = tempArray[minIndexTemp + 1];
  tempArray.splice(minIndexTemp + 1, 1);
  tempArray = tempArray.sort((a, b) => a - b);
  arr.splice(minIndex, arrayLength - minIndex + 1, nextMin, ...tempArray);

  return +arr.join('');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
