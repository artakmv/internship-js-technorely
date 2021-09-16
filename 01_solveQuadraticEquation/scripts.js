let someQuadraticCoefficients = [1, 2, -2]

const solveQuadraticEquation = (array) => {
  let [a, b, c] = array

  // declaration roots
  let x, x1, x2

  if (a === 0) {
    console.log('In quadratic equation "a" cannot equal zero! However, we can solve the linear equation!')
    if (b === 0) {
       return console.log('a = 0, the equation has no roots!')
    } else {
      const linearEquation = (b + 'x') + (c === 0 ? '' : c < 0 ? ' ' + c : ' + ' + c) + ' = 0'
      console.log('linear equation: ' + linearEquation)
      x = -c / b
      return  console.log(`The root: x = ${x}`)
    }
  }

  const quadraticEquation =
      (a === 1 ? 'x^2' : a + 'x^2') +
      (b === 0 ? '' : b === 1 ? ' + x' : b === -1 ? ' - x' : ' + ' + b + 'x') +
      (c === 0 ? '' : c < 0 ? ' ' + c : ' + ' + c) +
      ' = 0'

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