import typeOf from "../src/typeOf";

describe('typeOf', () => {
  test('typeOf 123 should be Number', () => {
    expect(typeOf(123)).toBe('Number');
  })

  test('typeOf 123 should be ture', () => {
    expect(typeOf(123, 'Number')).toBeTruthy();
  })

  test('typeOf abc should be String', () => {
    expect(typeOf('abc')).toBe('String');
  })

  test('typeOf abc should be ture', () => {
    expect(typeOf('abc', 'String')).toBeTruthy();
  })

  test('typeOf true should be Boolean', () => {
    expect(typeOf(true)).toBe('Boolean');
  })

  test('typeOf true should be ture', () => {
    expect(typeOf(true, 'Boolean')).toBeTruthy();
  })

  test('typeOf [1, 2, 3] should be Array', () => {
    expect(typeOf([1, 2, 3])).toBe('Array');
  })
  test('typeOf [1, 2, 3] should be true', () => {
    expect(typeOf([1, 2, 3], 'Array')).toBeTruthy();
  })

  test('typeOf {name: Elwin} should be Object', () => {
    expect(typeOf({name: 'Elwin'})).toBe('Object');
  })
  test('typeOf {name: Elwin} should be ture', () => {
    expect(typeOf({name: 'Elwin'}, 'Object')).toBeTruthy();
  })

  test('typeOf function(){} should be Function', () => {
    expect(typeOf(function(){})).toBe('Function');
  })
  test('typeOf function(){} should be ture', () => {
    expect(typeOf(function(){}, 'Function')).toBeTruthy();
  })

  test('typeOf undefined should be Undefined', () => {
    expect(typeOf(undefined)).toBe('Undefined');
  })
  test('typeOf undefined should be ture', () => {
    expect(typeOf(undefined, 'Undefined')).toBeTruthy();
  })

  test('typeOf null should be Null', () => {
    expect(typeOf(null)).toBe('Null');
  })
  test('typeOf null should be ture', () => {
    expect(typeOf(null, 'Null')).toBeTruthy();
  })

  test('typeOf new Date() should be Date', () => {
    expect(typeOf(new Date())).toBe('Date');
  })
  test('typeOf new Date() should be ture', () => {
    expect(typeOf(new Date(), 'Date')).toBeTruthy();
  })

  test('typeOf /^[a-zA-Z]{5,20}$/ should be RegExp', () => {
    expect(typeOf(/^[a-zA-Z]{5,20}$/)).toBe('RegExp');
  })
  test('typeOf /^[a-zA-Z]{5,20}$/ should be ture', () => {
    expect(typeOf(/^[a-zA-Z]{5,20}$/, 'RegExp')).toBeTruthy();
  })

  test('typeOf new Error() should be Error', () => {
    expect(typeOf(new Error())).toBe('Error');
  })
  test('typeOf new Error() should be ture', () => {
    expect(typeOf(new Error(), 'Error')).toBeTruthy();
  })
});