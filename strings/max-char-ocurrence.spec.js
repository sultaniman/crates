import countMax from "./max-char-ocurrence"

test("count max character occurrence", () => {
  expect(countMax("kkakkakk")).toBe("k")
  expect(countMax("sstrrr")).toBe("r")
  expect(countMax("1234567889")).toBe("8")
  expect(countMax("181")).toBe("1")
  expect(countMax("100001")).toBe("0")
})
