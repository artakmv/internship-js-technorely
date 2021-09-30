// first task
const factorsImp = (n) => {
  const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }

  let arr = []

  for (let j = 2; j < n; j++) {
    if (n % j === 0 && isPrime(j)) {
      arr.push(j)
    }
  }

  return arr
}

const factorsImp2 = (n) => {
  let arr = []
  let i = 2
  while (Math.sqrt(i) <= n) {
    if (n % i === 0) {
      arr.push(i)
      n = Math.trunc(n/i)
    } else {
      i+= 1
    }
  }
  if (n > 1) {
    arr.push(n)
  }

  return arr.join('*')
}

const factorsDec = (n, arr = [], i = 2) => {
  if (i > Math.sqrt(n)) {
    arr.push(n)
    return arr
  } else if (n % i === 0) {
    arr.push(i)
    factorsDec(n / i, arr, i)
  } else {
    factorsDec(n, arr, ++i)
  }

  return arr.join('*')
}

// task 2

class Validator {
  constructor(str) {
    this.str = str
  }

  isEmail() {
    const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regExp.test(this.str)
  }

  isDate() {
    const regExp = /^\d{4}-\d{2}-\d{2}$/
    if(!this.str.match(regExp)) return false

    const d = new Date(this.str)
    const dNum = d.getTime()
    if(!dNum && dNum !== 0) return false
    return d.toISOString().slice(0,10) === this.str
  }

  isUkrPhoneNumber() {
    const regExp = /^\+?[3]?[8]\)?([0-9]{10})$/
    return regExp.test(this.str)
  }
}