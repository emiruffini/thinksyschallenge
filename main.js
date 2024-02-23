const data = require("./data") ;
const { selectionSort, bubbleSort, validateType } = require("./helpers");

/*

If you want to validate the input parameter, 
you can replace the line where the parameter is parsed 
with an invocation of validateType(param).

*/

// Using other data structures - method (hasUniqueCharacters) + id (1)

const hasUniqueCharacters1 = (param) => {
  const start = Date.now();
  const parsedParam = String(param);
  let charSet = new Set();

  for (let char of parsedParam) {
    if (charSet.has(char)) {
      const end = Date.now();
      return { executionTime: `${hasUniqueCharacters1.name}: ${end - start} ms`, hasUniqueChars: false};
    }
  
    charSet.add(char);
  }
  const end = Date.now();
  return { executionTime: `${hasUniqueCharacters1.name}: ${end - start} ms`, hasUniqueChars: true};
}

// Without using additional data structures besides splitting the string into an array for ordering.  - method (hasUniqueCharacters) + id (2)

const hasUniqueCharacters2 = (param) => {
  const start = Date.now();
  let parsedParam = String(param);
  parsedParam = parsedParam.split('').sort();

  for (let i = 0; i < parsedParam.length - 1; i++) {
    
    if (parsedParam[i] === parsedParam[i + 1]) {
      const end = Date.now();
      return { executionTime: `${hasUniqueCharacters2.name}: ${end - start} ms`, hasUniqueChars: false};
    }
  }
  const end = Date.now();
  return { executionTime: `${hasUniqueCharacters2.name}: ${end - start} ms`, hasUniqueChars: true};
}


// Without using additional data structures or JavaScript ordering methods. - method (hasUniqueCharacters) + id (3)
// The method below may not be the optimal solution for handling large strings.

const hasUniqueCharacters3 = (param) =>{
  const start = Date.now();
  const parsedParam = String(param);
  // If you want to test the performance of Bubble Sort, you can replace the method below.
  const sortedStr = selectionSort(parsedParam);
  for (let i = 0; i < sortedStr.length; i++) {
    for (let j = i + 1; j < sortedStr.length; j++) {
      if (sortedStr[i] === sortedStr[j]) {
        const end = Date.now();
        return { executionTime: `${hasUniqueCharacters3.name}: ${end - start} ms`, hasUniqueChars: false};
      }
    }
  }
  const end = Date.now();
  return { executionTime: `${hasUniqueCharacters3.name}: ${parseFloat(end - start)} ms`, hasUniqueChars: true};
}

console.log(hasUniqueCharacters1(data.nonUniqueChars)); 
console.log(hasUniqueCharacters1(data.uniqueChars));

console.log(hasUniqueCharacters2(data.nonUniqueChars));
console.log(hasUniqueCharacters2(data.uniqueChars));

console.log(hasUniqueCharacters3(data.nonUniqueChars));
console.log(hasUniqueCharacters3(data.uniqueChars));

// { executionTime: 'hasUniqueCharacters1: 0 ms', hasUniqueChars: false }
// { executionTime: 'hasUniqueCharacters1: 0 ms', hasUniqueChars: true }
// { executionTime: 'hasUniqueCharacters2: 1 ms', hasUniqueChars: false }
// { executionTime: 'hasUniqueCharacters2: 0 ms', hasUniqueChars: true }
// { executionTime: 'hasUniqueCharacters3: 7949 ms', hasUniqueChars: false } Using bubbleSort
// { executionTime: 'hasUniqueCharacters3: 1 ms', hasUniqueChars: true }


// { executionTime: 'hasUniqueCharacters1: 0 ms', hasUniqueChars: false }
// { executionTime: 'hasUniqueCharacters1: 0 ms', hasUniqueChars: true }
// { executionTime: 'hasUniqueCharacters2: 2 ms', hasUniqueChars: false }
// { executionTime: 'hasUniqueCharacters2: 0 ms', hasUniqueChars: true }
// { executionTime: 'hasUniqueCharacters3: 280 ms', hasUniqueChars: false } Using selectionSort
// { executionTime: 'hasUniqueCharacters3: 0 ms', hasUniqueChars: true }