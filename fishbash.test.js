const fishbash = require('./fishbash');

test('test fishbash result', () => {
    expect(
        fishbash(15)
    ).toStrictEqual([ 'fish', 'bash', 'fish', 'fish', 'bash', 'fish', 'fishbash' ]);
});

test('test fishbash result again', () => {
    expect(
        fishbash(10)
    ).toStrictEqual([ 'fish', 'bash', 'fish', 'fish', 'bash' ]);
});