export const palindrome = (string) => {
  // const temp = string.replace(/[\W_]/gi, '').toLowerCase()
  // return temp.split('').reverse().join('') === temp
  return string.split('').reverse().join('')
}

export const average = (array) => {
  const reducer = (sum, item) => {
    return sum + item
  }

  return array.length === 0
    ? 0
    : array.reduce(reducer, 0) / array.length
}
