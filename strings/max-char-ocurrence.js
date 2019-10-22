const count = (str) => {
  if (str.length === 0) {
    return str
  }

  let counts = {}
  str.split("").forEach(c => {
    if (counts.hasOwnProperty(c)) {
      counts[c] += c
    } else {
      counts[c] = ""
    }
  })

  let max = ""
  Object.values(counts).forEach(v => {
    if (max.length <= v.length) {
      max = v
    }
  })

  return max[0]
}

export default count
