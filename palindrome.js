function checkPalindrome(input) {
    const word = input.toLowerCase().trim();
    const reversedWord = word.split('').reverse().join('');

    return word === reversedWord ? `${input} is palindrome` : `${input} is not palindrome`;
}

console.log(checkPalindrome('madam'));
console.log(checkPalindrome('fish'));
console.log(checkPalindrome('   Noon '));

module.exports = checkPalindrome;