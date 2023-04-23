import typeOf from "../src/typeOf";

describe('typeOf', () => {
  // Number test case
  test('typeOf 123 should be Number', () => {
    expect(typeOf(123)).toBe('Number');
  })
  test('typeOf 123 should be ture', () => {
    expect(typeOf(123, 'Number')).toBeTruthy();
  })
  // String test case
  test('typeOf abc should be String', () => {
    expect(typeOf('abc')).toBe('String');
  })
  test('typeOf abc should be ture', () => {
    expect(typeOf('abc', 'String')).toBeTruthy();
  })
  // Boolean test case
  test('typeOf true should be Boolean', () => {
    expect(typeOf(true)).toBe('Boolean');
  })
  test('typeOf true should be ture', () => {
    expect(typeOf(true, 'Boolean')).toBeTruthy();
  })
  // Array test case
  test('typeOf [1, 2, 3] should be Array', () => {
    expect(typeOf([1, 2, 3])).toBe('Array');
  })
  test('typeOf [1, 2, 3] should be true', () => {
    expect(typeOf([1, 2, 3], 'Array')).toBeTruthy();
  })
  // Object test case
  test('typeOf {name: Elwin} should be Object', () => {
    expect(typeOf({name: 'Elwin'})).toBe('Object');
  })
  test('typeOf {name: Elwin} should be ture', () => {
    expect(typeOf({name: 'Elwin'}, 'Object')).toBeTruthy();
  })
  // Function test case
  test('typeOf function(){} should be Function', () => {
    expect(typeOf(function(){})).toBe('Function');
  })
  test('typeOf function(){} should be ture', () => {
    expect(typeOf(function(){}, 'Function')).toBeTruthy();
  })
  // Undifiend test case
  test('typeOf undefined should be Undefined', () => {
    expect(typeOf(undefined)).toBe('Undefined');
  })
  test('typeOf undefined should be ture', () => {
    expect(typeOf(undefined, 'Undefined')).toBeTruthy();
  })
  // Null test case
  test('typeOf null should be Null', () => {
    expect(typeOf(null)).toBe('Null');
  })
  test('typeOf null should be ture', () => {
    expect(typeOf(null, 'Null')).toBeTruthy();
  })
  // Date test case
  test('typeOf new Date() should be Date', () => {
    expect(typeOf(new Date())).toBe('Date');
  })
  test('typeOf new Date() should be ture', () => {
    expect(typeOf(new Date(), 'Date')).toBeTruthy();
  })
  // RegExp test case
  test('typeOf /^[a-zA-Z]{5,20}$/ should be RegExp', () => {
    expect(typeOf(/^[a-zA-Z]{5,20}$/)).toBe('RegExp');
  })
  test('typeOf /^[a-zA-Z]{5,20}$/ should be ture', () => {
    expect(typeOf(/^[a-zA-Z]{5,20}$/, 'RegExp')).toBeTruthy();
  })
  // Error test case
  test('typeOf new Error() should be Error', () => {
    expect(typeOf(new Error())).toBe('Error');
  })
  test('typeOf new Error() should be ture', () => {
    expect(typeOf(new Error(), 'Error')).toBeTruthy();
  })
  // Map test case
  test('typeOf new Map() should be Map', () => {
    expect(typeOf(new Map())).toBe('Map');
  })
  test('typeOf new Map() should be ture', () => {
    expect(typeOf(new Map(), 'Map')).toBeTruthy();
  })
  // Set test case
  test('typeOf new Set() should be Set', () => {
    expect(typeOf(new Set())).toBe('Set');
  })
  test('typeOf new Set() should be ture', () => {
    expect(typeOf(new Set(), 'Set')).toBeTruthy();
  })
  // WeakMap test case
  test('typeOf new WeakMap() should be WeakMap', () => {
    expect(typeOf(new WeakMap())).toBe('WeakMap');
  })
  test('typeOf new Set() should be ture', () => {
    expect(typeOf(new WeakMap(), 'WeakMap')).toBeTruthy();
  })
  // WeakSet test case
  test('typeOf new WeakSet() should be WeakSet', () => {
    expect(typeOf(new WeakSet())).toBe('WeakSet');
  })
  test('typeOf new WeakSet() should be ture', () => {
    expect(typeOf(new WeakSet(), 'WeakSet')).toBeTruthy();
  })
  // Symbol test case
  test('typeOf Symbol(Elwin) should be Symbol', () => {
    expect(typeOf(Symbol('Elwin'))).toBe('Symbol');
  })
  test('typeOf new Symbol(Elwin) should be ture', () => {
    expect(typeOf(Symbol('Elwin'), 'Symbol')).toBeTruthy();
  })
});