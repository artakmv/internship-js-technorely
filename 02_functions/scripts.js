let arr1 = [1, 2, 3, 3, 'a', 'test']
let arr2 = ['test', 2, 7,  'a', 'a']

// More used element in arrays function
const moreUsedEl = (arr1, arr2) => {
  let arr = arr1.concat(arr2)

  return arr.sort((a,b) =>
      arr.filter(x => x === a).length
      - arr.filter(x => x === b).length
  ).pop()
}

console.log(moreUsedEl(arr1, arr2))

// Remove duplicates function
const removeDuplicates = (array) => {
  let result =[]
  for (let element of array) {
    if (!result.includes(element)) {
      result.push(element)
    }
  }
  return result
}

console.log(removeDuplicates(arr1))