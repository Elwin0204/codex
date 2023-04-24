import uuidV4 from "../src/uuidV4";

describe('indexOf', () => {
  test('uuidV4 meets the format xxxxxxxx-[1-5]xxx-[8|9|a|b]xxx-xxxxxxxxxxxx', () => {
    const uuid = uuidV4();
    const pattern = /[0-9A-F]{8}-[0-9A-F]{4}-[1-5]{1}[0-9A-F]{3}-[8|9|a|b]{1}[0-9A-F]{3}-[0-9A-F]{12}/i;
    const result = pattern.test(uuid);
    expect(result).toBeTruthy();
  })
});