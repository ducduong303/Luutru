const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.299);
});

function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();

});