import clone from "../src/clone";

describe('clone', () => {
  test('clone should to be true', () => {
    const obj = {
      name: 'Elwin',
      age: 30,
      hobby: ['pingpong', 'drawing']
    };
    const result = clone(obj);
    expect(result.hobby === obj.hobby).toBeTruthy();
  })
  test('clone should to be true', () => {
    const obj = {
      name: 'Elwin',
      age: 30,
      hobby: ['pingpong', 'drawing']
    };
    const result = clone(obj);
    expect(result.hobby === obj.hobby && result.name === obj.name && result.age === obj.age).toBeTruthy();
  })
});