export const reverse = (str) => {
  if (str.length === 0) {
      return str
  }

  let characters = str.split("")
  let left = 0
  let right = str.length

  while (left < right) {
    characters[left] = str[right - 1]
    characters[right - 1] = str[left]
    left++
    right--
  }

  return characters.join("")
}

export default reverse
