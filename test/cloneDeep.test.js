import cloneDeep from "../src/cloneDeep";

describe('cloneDeep', () => {
  test('cloneDeep', () => {
    const obj = {
      name: 'Elwin',
      age: 30,
      hobby: ['pingpong', 'drawing'],
      skill: {
        math: true,
        english: false
      },
      date: new Date(),
      func: function () {}
    };
    const result = cloneDeep(obj);
    expect(result.name === obj.name).toBeTruthy();
    expect(result.hobby !== obj.hobby).toBeTruthy();
    expect(result.skill !== obj.skill).toBeTruthy();
    expect(result.date !== obj.date).toBeTruthy();
    expect(result.func === obj.func).toBeTruthy();
  })
});