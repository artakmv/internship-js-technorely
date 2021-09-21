let arr1 = [1, 2, 3, 3, 'a', 'test']
let arr2 = ['test', 2, 7,  'a', 'a']
let arr3 = [111896, 9999, 9985, 1024, 999999, 1000100, 60044943, 12135000000]

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

// Abbreviated numbers
const abb = (arr) => {
  const abbreviate = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 999999, symbol: "M" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" }
  ]
  const result = []

  for (let el of arr) {
    // Get correct abbreviate for element
    let item = abbreviate.slice().reverse().find((item) => {
      return el >= item.value
    })

    // Transform number from array(element) to Abbreviated number
    let abbNum = item ? (Math.round((el / item.value) * 100) / 100) + item.symbol : '0'
    result.push(abbNum)
  }

  return result
}

console.log(abb(arr3))