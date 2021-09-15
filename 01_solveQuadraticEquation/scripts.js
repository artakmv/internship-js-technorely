let someQuadraticCoefficients = [1, 0, -4]

const solveQuadraticEquation = (array) => {
  const a = array[0]
  const b = array[1]
  const c = array[2]

  if (a === 0) return console.log('"a" cannot equal zero!')

  const quadraticEquation =
      (a === 1 ? 'x^2' : a + 'x^2') +
      (b === 0 ? '' : b === 1 ? ' + x' : b === -1 ? ' - x' : ' + ' + b + 'x') +
      (c === 0 ? '' : c < 0 ? ' ' + c : ' + ' + c) +
      ' = 0'

  // declaration roots
  let x1, x2

  // calculate discriminant
  const discriminant = b * b - 4 * a * c

  console.log('quadratic equation: ' + quadraticEquation)
  console.log('discriminant: ' + discriminant)

  // condition for different roots
  if (discriminant > 0) {
    x1 = (-b + Math.sqrt(discriminant)) / (2 * a)
    x2 = (-b - Math.sqrt(discriminant)) / (2 * a)

    console.log(`The roots: x1 = ${x1}; x2 = ${x2}`)
  }

  // condition for equal root
  else if (discriminant === 0) {
    x1 = x2 = -b / (2 * a)

    console.log(`The roots: x1 = ${x1}; x2 = ${x2}`)
  }

  // if no roots
  else {
    console.log('No roots')
  }
}

solveQuadraticEquation(someQuadraticCoefficients)