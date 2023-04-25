import clone from "../src/clone";

describe('clone', () => {
  test('clone test case', () => {
    const obj = {
      name: 'Elwin',
      age: 30,
      hobby: ['pingpong', 'drawing']
    };
    const result = clone(obj);
    expect(result.hobby === obj.hobby).toBeTruthy();
    expect(result.hobby === obj.hobby && result.name === obj.name && result.age === obj.age).toBeTruthy();
  })
});