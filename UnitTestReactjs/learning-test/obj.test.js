const obj = require('./obj');
test('obj có bằng true', () => {
    expect(obj).toEqual({ a: 1, b: 2 });
});
test('zero', () => {
    const z = 0;
    expect(z).not.toBe(2);
    expect(z).toBe(0);
});