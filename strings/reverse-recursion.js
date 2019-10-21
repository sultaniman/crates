const reversed = (str, acc) => {
  if (str.length === 0) {
      return acc
  }

  return reversed(str.slice(0, str.length - 1), acc + str[str.length - 1])
}

export const reverse = (str) => reversed(str, "")

export default reverse
