const palindrome = require('./palindrome');

test('test palindrome result correct', () => {
    expect(palindrome('madam')).toBe('madam is palindrome');
})

test('test palindrome result wrong', () => {
    expect(palindrome('fish')).toBe('fish is not palindrome');
})

test ('test palindrome result random letter correct', () => {
    expect(palindrome('  Noon ')).toBe('  Noon  is palindrome');
})