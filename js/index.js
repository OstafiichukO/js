// 1. Write a function to convert Celsius to Fahrenheit
function converter(celsius) {
  const result = celsius * 9 / 5 + 32
  return result
}
console.log("1.1)", converter(20), '\xB0F.')

const converter2 = celsius => celsius * 9 / 5 + 32
console.log("1.2)", converter2(15), '\xB0F.')

// 2. Write a function to find the area of a given Rectangle
function area(value1, value2) {
  const result = value1 * value2
  return result
}
console.log("2.1)", 'area', area(2, 3))

const area2 = (value1, value2) => value1 * value2
console.log("2.2)", 'area', area2(5, 3))

// 3. Write a function to reverse a number
function reverse(number) {
  number = number + "";
  return number.split("").reverse().join("");
}
console.log("3.1)", 'reverse 246:', reverse(246))

const reverse2 = number => number.split().reverse().join("");
console.log("3.2)", 'reverse 359:', reverse(359))

// 4. Write a function to convert a string into title case
function titleCase(string) {
  let word = string.toLowerCase().split(' ')
  for (let i = 0; i < word.length; i++) {
    word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
  }
  return word.join(' ')
}
console.log("4.1)", titleCase('TitLe cAse WOrdS'))

const titleCase2 = string => {
  return string.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}
console.log("4.2)", titleCase2('TitLe cAse WOrdS'))

// 5. Write a function to find a largest number in array, you have to use loops
function largest(array) {
  let result = array[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] > result)
      result = array[i]
  }
  return result
}
console.log("5.1)", 'Largest number in array:', largest([5, 5, 10, 9]))

const largest2 = (array) => {
  let result = array[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] > result)
      result = array[i]
  }
  return result
}
console.log("5.2)", 'Largest number in array:', largest2([5, 5, 10, 9]))

// for of
const largest3 = (array) => {
  let result = 0
  for (const value of array)
    if (result < value) result = value
  return result
}
console.log("5.3)", 'Largest number in array:', largest3([5, 5, 10, 9]))

// for in
const largest4 = (object) => {
  let result = 0
  for (const value in object) {
    if (result < object[value]) result = object[value]
  }
  return result
}
console.log("5.4)", 'Largest number in array:', largest4({ a: 5, b: 5, c: 10, d: 9 }))

// for each
const largest5 = (array) => {
  let result = array[0]
  array.forEach(element => {
    if (result < element) result = element
  });
  return result
}
console.log("5.5)", 'Largest number in array:', largest5([5, 5, 10, 9]))

// while
const largest6 = (array) => {
  let result = array[0]
  let i = 0
  while (i < array.length) {
    i += 1
    if (array[i] > result) result = array[i]
  }
  return result
}
console.log("5.6)", 'Largest number in array:', largest6([5, 5, 10, 9]))
// do while
const largest7 = (array) => {
  let result = array[0]
  let i = 0
  do {
    i += 1
    if (array[i] > result) result = array[i]
  } while (i < array.length);
  return result
}
console.log("5.7)", 'Largest number in array:', largest7([5, 5, 10, 9]))

// 6. Write a function to check if an input string is a palindrome
function isPalidrome(string) {
  const word = string.toLowerCase();
  for (let i = 0; i < string.length / 2; i++) {
    if (word[i] !== word[string.length - 1 - i]) {
      return console.log("6.1) " + string + ' is not a palindrome');
    }
  }
  return console.log("6.1) " + string + ' is a palindrome');
}
isPalidrome('Abba')

const isPalidrome2 = (string) => {
  const word = string.toLowerCase();
  for (let i = 0; i < string.length / 2; i++) {
    if (word[i] !== word[string.length - 1 - i]) {
      return console.log("6.2) " + string + ' is not a palindrome');
    }
  }
  return console.log("6.2) " + string + ' is a palindrome');
}
isPalidrome2('Abram')

// 7. Write a function to find the number of zeros in 2D Matrix [[0,1,1],[0,1,0],[1,0,0]]
function zeros(matrix) {
  let result = 0
  for (let i = 0; i < matrix.length; i++) {
    for (let x = 0; x < matrix[i].length; x++) {
      if (matrix[i][x] === 0) result += 1
    }
  }
  return result
}
console.log('7.1) Number of zeros in 2D Matrix', zeros([[0, 1, 1], [0, 1, 0], [1, 0, 0]]))

const zeros2 = (matrix) => {
  let result = 0
  for (let i = 0; i < matrix.length; i++) {
    for (let x = 0; x < matrix[i].length; x++) {
      if (matrix[i][x] === 0) result += 1
    }
  }
  return result
}
console.log('7.2) Number of zeros in 2D Matrix', zeros2([[0, 1, 1], [0, 1, 0], [1, 0, 0]]))

// 8. Write a function to find product of two arrays [3,5,8] * [3,2,10] // [9, 10, 80];
function productArrays(array1, array2) {
  if (array1.length !== array2.length) throw new Error("Cannot operate arrays of different lengths");
  let array = (array1, array2).map(x => x * x)
  return array
}
console.log("8.1)", "Product of two arrays:", productArrays([3, 5, 8], [3, 2, 10]))

const productArrays2 = (array1, array2) => (array1, array2).map(number => number * number)
console.log("8.2)", "Product of two arrays:", productArrays2([3, 5, 8], [3, 2, 10]))