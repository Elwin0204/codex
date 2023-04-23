import indexOf from "../src/indexOf";

describe('indexOf', () => {
  test('indexOf [1, 2, 3]/2 should be 1', () => {
    expect(indexOf([1, 2, 3], 2)).toBe(1);
  })
  test('indexOf [1, 2, 3]/4 should be -1', () => {
    expect(indexOf([1, 2, 3], 4)).toBe(-1);
  })
});