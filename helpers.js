
const selectionSort = (str) => {
    let result = '';
    while (str.length > 0) {
        let minChar = str[0];
        let minIndex = 0;
        for (let i = 1; i < str.length; i++) {
            if (str[i] < minChar) {
                minChar = str[i];
                minIndex = i;
            }
        }
        result += minChar;
        str = str.slice(0, minIndex) + str.slice(minIndex + 1);
    }
    return result;
}

const bubbleSort = (str) =>{
    const swapChars = (str, i, j) => {
      return str.substring(0, i) + str[j] + str.substring(i + 1, j) + str[i] + str.substring(j + 1);
    }
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < str.length - 1; i++) {
        if (str[i] > str[i + 1]) {
          str = swapChars(str, i, i + 1);
          swapped = true;
        }
      }
    } while (swapped);
    return str;
}

const validateType = (param) => {
  if (!(typeof param === 'string' || param instanceof String)) {
    throw new Error('The provided value must be a string')
  }
}
module.exports = {
    bubbleSort,
    selectionSort,
    validateType
}