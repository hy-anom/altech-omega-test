function fishbash(input) {
    const result = [];
    for (let i = 1; i <= input; i++) {
        let output = '';
        if(i % 3 === 0) output = 'fish';
        if(i % 5 === 0) output = 'bash';
        if(i % 15 === 0) output = 'fishbash';
        
        if (output !== '') {
            result.push(output)
        }
    }
    return result;
}

fishbash(15).map((item) => {
    console.log(item);
})

module.exports = fishbash;