const sortInteger = require('./sortInteger');
const sortIntegerAsc = sortInteger.sortNumericAsc;
const sortIntegerDesc = sortInteger.sortNumericDesc;

test('sort number in an array ascending', () => {
    expect(
        sortIntegerAsc([2,10,1])
    ).toStrictEqual([1,2,10]);
});

test('sort number in an array descending', () => {
    expect(
        sortIntegerDesc([8,20,10,99])
    ).toStrictEqual([99,20,10,8])
});