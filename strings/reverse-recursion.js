export const reverse = (str, acc) => {
  if (str.length === 0) {
      return acc
  }

  return reverse(str.slice(0, str.length - 1), acc + str[str.length - 1])
}

export default reverse
