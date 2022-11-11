const animals = [
  { type: 'dog', name: 'max', owner: "john doe", age: 5, weight: 30, categories: ['domestic', 'mammal', 'pet', 'quick'] },
  { type: 'cat', name: 'kitty', owner: "raquel gonzalez", age: 3, weight: 10, categories: ['domestic', 'mammal', 'pet', 'quick'] },
  { type: 'dog', name: 'rex', owner: "john cena", age: 1, weight: 20, categories: ['domestic', 'mammal', 'pet', 'quick'] },
  { type: 'parrot', name: 'polly', owner: "diego perez", age: 4, weight: 1, categories: ['domestic', 'bird', 'pet', 'slow'] },
  { type: 'rabbit', name: 'bugs', owner: "lionel messi", age: 2, weight: 2, categories: ['domestic', 'mammal', 'pet', 'slow'] },
  { type: 'snake', name: 'kaa', owner: "cristiano ronaldo", age: 1, weight: 1, categories: ['reptile', 'wild', 'slow'] },
  { type: 'turtle', name: 'speedy', owner: "dany dakota", age: 1, weight: 10, categories: ['reptile', 'wild', 'slow'] },
  { type: 'lion', name: 'simba', owner: "ray white", age: 2, weight: 50, categories: ['wild', 'mammal', 'quick'] },
  { type: 'tiger', name: 'shere Khan', owner: "johnny vidal", age: 3, weight: 45, categories: ['wild', 'mammal', 'quick'] },
  { type: 'elephant', name: 'dumbo', owner: "alexander kounde", age: 4, weight: 1000, categories: ['wild', 'mammal', 'slow'] },
  { type: 'dog', name: 'lucky', owner: "john doe", age: 5, weight: 30, categories: ['domestic', 'mammal', 'pet', 'quick'] },
  { type: 'cat', name: 'garfield', owner: "raquel gonzalez", age: 3, weight: 10, categories: ['domestic', 'mammal', 'pet', 'quick'] },
  { type: 'dog', name: 'fido', owner: "john cena", age: 1, weight: 20, categories: ['domestic', 'mammal', 'pet', 'quick'] },
  { type: 'parrot', name: 'paco', owner: "ray white", age: 4, weight: 1, categories: ['domestic', 'bird', 'pet', 'slow'] },
  { type: 'rabbit', name: 'bunny', owner: "lionel messi", age: 2, weight: 2, categories: ['domestic', 'mammal', 'pet', 'slow'] },
]


// Using the array of animals, do the following:

// Restrictions:
// 1. You can't modify the original array


// 1. Count the number of attributes for all the animals
// expected output: 
//   (this is only an example, the output should be dynamic)
//   {
//     domestic: 5,
//     mammal: 6,
//     pet: 5,
//     quick: 4,
//     bird: 1,
//     slow: 4,
//     reptile: 2,
//     wild: 4
//   }
const attributesCounter = array => {
  animalsArray = [...array]
  return animalsArray.reduce((counter, animal) => {
    if (animal.categories.includes("domestic")) counter.domestic += 1;
    if (animal.categories.includes("mammal")) counter.mammal += 1;
    if (animal.categories.includes("pet")) counter.pet += 1;
    if (animal.categories.includes("quick")) counter.quick += 1;
    if (animal.categories.includes("bird")) counter.bird += 1;
    if (animal.categories.includes("slow")) counter.slow += 1;
    if (animal.categories.includes("reptile")) counter.reptile += 1;
    if (animal.categories.includes("wild")) counter.wild += 1;
    return counter
  }, {
    domestic: 0,
    mammal: 0,
    pet: 0,
    quick: 0,
    bird: 0,
    slow: 0,
    reptile: 0,
    wild: 0
  })
}
// console.log("1. Number of attributes for all the animals:", attributesCounter(animals))

// 2. Count the number of animals by type
// expected output:
//   (this is only an example, the output should be dynamic)
//   {
//     dog: 2,
//     cat: 1,
//     parrot: 1,
//     rabbit: 1,
//     snake: 1,
//     turtle: 1,
//     lion: 1,
//     tiger: 1,
//     elephant: 1
//   }
const animalsTypeCounter = animals.reduce((counter, animal) => {
  if (animal.type === "dog") counter.dog++;
  if (animal.type === "cat") counter.cat++;
  if (animal.type === "parrot") counter.parrot++;
  if (animal.type === "rabbit") counter.rabbit++;
  if (animal.type === "snake") counter.snake++;
  if (animal.type === "turtle") counter.turtle++;
  if (animal.type === "lion") counter.lion++;
  if (animal.type === "tiger") counter.tiger++;
  if (animal.type === "elephant") counter.elephant++;
  return counter
}, {
  dog: 0,
  cat: 0,
  parrot: 0,
  rabbit: 0,
  snake: 0,
  turtle: 0,
  lion: 0,
  tiger: 0,
  elephant: 0
})
// console.log("2. Number of animals by type:", animalsTypeCounter)

// 3. Count the number of animals that are greater than 2 years old and less than 2 years old
// expected output:
//   (this is only an example, the output should be dynamic)
//   {
//     greaterThan2: 5,
//     lessThan2: 5
//   }
const countAnimalsByAge = array => {
  animalsArray = [...array]
  return animalsArray.reduce((counter, animal) => {
    animal.age >= 2 ? counter.greaterThan2++ : counter.lessThan2++;
    return counter
  }, { greaterThan2: 0, lessThan2: 0 })
}
// console.log("3. Greater than 2 years old and less than 2 years old:", countAnimalsByAge(animals))

// 4. We need to transport the animals to a new zoo, but we can only transport 3 animals at a time.
//    Create a new array of arrays, where each array contains 3 animals, but we only need the type and weight of the animals.
//    If there are not enough animals to fill the last array, fill it with nulls.
// expected output:
//   (this is only an example, the output should be dynamic)
//   
//   [
//     [ 
//       { type: 'dog', name: 'max'},
//       { type: 'cat', name: 'kitty'},
//       { type: 'dog', name: 'rex' }
//     ],
//     [ 
//       { type: 'dog', name: 'max'},
//       { type: 'cat', name: 'kitty'},
//       { type: 'dog', name: 'rex' }
//     ],
//   ]
const transportAnimals = (array, capacity) => {
  const animalsArray = [...array]
  // Array of animals with type and name values
  const animalsArrayFiltered = []
  for (let i = 0; i < animalsArray.length; i++) {
    let animal = {};
    animal.type = animalsArray[i].type;
    animal.name = animalsArray[i].name;
    animalsArrayFiltered.push(animal)
  }
  // New array of arrays where each array contains "capacity" animals
  const animalsInBuses = animalsArrayFiltered.reduce((resultArray, animal, index) => {
    const chunkIndex = Math.floor(index / capacity)
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []
    }
    resultArray[chunkIndex].push(animal)
    return resultArray
  }, [])
  // Fill last array with nulls
  for (let i = 0; i < capacity; i++) {
    if (!animalsInBuses[animalsInBuses.length - 1][i])
      animalsInBuses[animalsInBuses.length - 1][i] = null;
  }
  return animalsInBuses
}
// console.log("4. Transport the animals:", transportAnimals(animals, 3))

// 5. Add a year to the age of all the animals
const birthday = array => {
  const animalsArray = [...array]
  const today = new Date();
  const year = today.getFullYear();
  animalsArray.forEach(animal => {
    animal.age = { yearsOld: animal.age, birthYear: year - animal.age }
  })
  return animalsArray
}
// console.log("5. Add a year to the age of all the animals:", birthday(animals))

// 6. Create an array with the names of the owners and transform each name to Title Case
// expected output:
//   (this is only an example, the output should be dynamic)
//   [ 'John Doe', 'Raquel Gonzalez', 'John Cena' ]

const findUniqueOwners = array => {
  const animalsArray = [...array]
  const ownerNames = []
  animalsArray.forEach(animalObj => ownerNames.push(animalObj.owner))
  return result = [... new Set(ownerNames)]
}
// console.log(findUniqueOwners(animals))
const toTitleCase = array => {
  const ownersArray = []
  array.forEach(owner => {
    let titleCaseName = owner.toLowerCase().split(' ').map(word => {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
    ownersArray.push(titleCaseName)
  })
  return ownersArray
}
// console.log("6. Transform each name to Title Case:", toTitleCase(findUniqueOwners(animals)))

// 7. Create a new array with the owners, inside each owner object, add a new property called animals,
// where the value is an array with the animals that belong to that owner. The name of the owner should
// be Title Case.
// expected output:
//   (this is only an example, the output should be dynamic)
//   [
//     {
//       name: 'John Doe',
//       animals: [
//         { type: 'dog', name: 'max'},
//         { type: 'cat', name: 'kitty'},
//         { type: 'dog', name: 'rex' }
//       ]
//     },
//     {
//       name: 'Raquel Gonzalez',
//       animals: [
// { type: 'dog', name: 'max'},
// { type: 'cat', name: 'kitty'},
// { type: 'dog', name: 'rex' }
//       ]
//     },
//  ]
const ownersAndTheirAnimals = array => {
  const animalsArray = [...array]
  // Filtering input array and creating new ona with new structure
  let filteredArray = []
  for (let i = 0; i < animalsArray.length; i++) {
    let item = {};
    let animals = [{ type: animalsArray[i].type, name: animalsArray[i].name }];
    let titleCaseName = animalsArray[i].owner.toLowerCase().split(' ').map(word => {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
    item.owner = titleCaseName
    item.animals = animals
    filteredArray.push(item)
  }
  // Merge duplicates
  let seen = {};
  filteredArray = filteredArray.filter(function (entry) {
    let previous;
    // Have we seen this owner before?
    if (seen.hasOwnProperty(entry.owner)) {
      // Yes?, grab it and add this animals to it
      previous = seen[entry.owner];
      previous.animals.push(...entry.animals);
      // console.log(previous)
      // console.log(entry.animals)
      // Don't keep this entry, we've merged it into the previous one
      return false;
    }
    // Remember that we've seen it
    seen[entry.owner] = entry;
    return true;
  });
  filteredArray.forEach(el => console.log(el))
  return filteredArray;
}
// console.log("7. Array with the owners add a new property animals inside:", ownersAndTheirAnimals(animals));

// 8. Create a new array with categories, where each category is an object with the name of the category 
// and the animals that belong to that category. The name of the category should be Title Case. 
// The animals should be sorted by name.

// Add a new property called hasOtherCategories to each animal, where the value is a boolean that
// indicates if the animal has other categories.

// expected output:
//   (this is only an example, the output should be dynamic)
//   [
//     {
//       name: 'Domestic',
//       animals: [
//         { type: 'dog', age: 2, name: 'max', hasOtherCategories: true },
//         { type: 'cat', age: 3, name: 'kitty', hasOtherCategories: true },
//         { type: 'dog', age: 5, name: 'rex', hasOtherCategories: false }
//       ]
//     },
//   ]

const categoriesArray = (array) => {
  const animalsArray = [...array]
  // Create new array with objects of all name-type pair
  let categoriesAndAnimals = []
  animalsArray.map(item => {
    let isHasOtherCategories = item.categories.length > 1 ? true : false
    for (let i = 0; i < item.categories.length; i++) {
      let titleCaseName = item.categories[i].toLowerCase().split(' ').map(word => {
        return (word.charAt(0).toUpperCase() + word.slice(1));
      }).join(' ');
      let newAnimal = { type: item.type, age: item.age, name: item.name, hasOtherCategories: isHasOtherCategories }
      categoriesAndAnimals.push({ name: titleCaseName, animals: [newAnimal] });
    }
  })
  // Merge duplicates by name
  let seen = {};
  categoriesAndAnimals = categoriesAndAnimals.filter(function (entry) {
    let previous;
    if (seen.hasOwnProperty(entry.name)) {
      previous = seen[entry.name];
      previous.animals.push(...entry.animals);
      return false;
    }
    if (!Array.isArray(entry.animals)) {
      entry.animals = [entry.animals];
    }
    seen[entry.name] = entry;
    return true;
  });
  // Sort them
  // const sortedArray = categoriesAndAnimals.sort((a, b) => a.name.localeCompare(b.name))
  // sortedArray.forEach(item => console.log(item.animals))
  return categoriesAndAnimals.sort((a, b) => a.name.localeCompare(b.name))
}
// console.log("8. New array with categories, where each category is an object with the name of the category", categoriesArray(animals))

// ***************************************************************************************
// ***************************************************************************************


// Create custom array methods, there is an example in the snippet below

// We can use the function as a prototype
const myArray = [1, 2, 3, 4, 5];

// this will be the new array method
function myCustomForEach(callback) {
  // the keyword this will be the array
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}

// Here we are adding the function to the prototype of the array
// myArray.myCustomForEach = myCustomForEach;

// Then we can invoke the function as a method of the array
// myArray.myCustomForEach((item, index, array) => {
//   console.log({ item, index, array });
// });

const wordsArray = ['This', 'is', 'custom', 'method', 'output']
const numbersArray = [1, 2, 3, 4, 5]
const numbersArray2 = [2, 2, 4, 4, 6]
const wordsArray2 = ['This', 'is', 'custom', 'method', 'output']
// 1. Create a custom method called myCustomMap that works like the map method
Array.prototype.myCustomMap = function (callback) {
  const resultArray = [];
  for (let index = 0; index < this.length; index++) {
    resultArray.push(callback(this[index], index, this));
  }
  return resultArray;
}
// const wordsArray = ['This', 'is', 'custom', 'method', 'output']
// const mapShow = wordsArray.myCustomMap(item => console.log(item))

// 2. Create a custom method called myCustomFilter that works like the filter method
Array.prototype.myCustomFilter = function (callback) {
  const filtered = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      filtered.push(this[i]);
    }
  }
  return filtered;
};
// const wordsArray = ['This', 'is', 'custom', 'method', 'output']
const filterShow = wordsArray.myCustomFilter(element => element.length > 5);
// console.log(filterShow)

// 3. Create a custom method called myCustomFind that works like the find method
Array.prototype.myCustomFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (true == callback(this[i], i, this)) {
      // { element: this[i], index: i, array: this };
      return this[i];
    }
  }
}
// const wordsArray = ['This', 'is', 'custom', 'method', 'output']
// returns first true
const findShow = wordsArray.myCustomFind(element => element.length === 6)
// console.log(findShow)

// 4. Create a custom method called myCustomReduce that works like the reduce method

Array.prototype.myCustomReduce = function (callback) {
  let accumulator = 0;
  for (let i = 0; i < this.length; i++) {
    callback(accumulator += this[i])
  }
  return accumulator;
}
// const numbersArray = [1, 2, 3, 4, 5]
const reduceShow = numbersArray.myCustomReduce((a, item) => (a + item))
// console.log(reduceShow)

// 5. Create a custom method called myCustomEvery that works like the every method
Array.prototype.myCustomEvery = function (callback) {
  for (const [index, item] of this.entries()) {
    if (!callback(item, index, this)) {
      return false
    }
  }
  return true
}
// const numbersArray = [1, 2, 3, 4, 5]
const isBigger = (element) => element >= 1;
// console.log(numbersArray.myCustomEvery(isBigger))

// 6. Create a custom method called myCustomSome that works like the some method
Array.prototype.myCustomSome = function (callback) {
  for (const [index, item] of this.entries()) {
    if (callback(item, index, this)) {
      return true
    }
  }
  return false
}
// const numbersArray = [1, 2, 3, 4, 5]
const onesArray = [1, 1, 1]
// 1 - 5 false, else true
const isEven = (element) => element % 2 === 0;
// console.log(numbersArray.myCustomSome(isEven))

// 7. Create a custom method called myCustomIncludes that works like the includes method
Array.prototype.myCustomIncludes = function (arg) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    if (arg === element) {
      return true;
    };
  };
  return false;
}
console.log(numbersArray.myCustomIncludes(6))