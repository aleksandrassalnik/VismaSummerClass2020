const colors = require('colors');

//defining colors that will be used
const customColor = [colors.red, colors.green, colors.yellow, colors.blue]

for (let i = 0; i < 7; i++) {
    let output = '';
    for (let j = 0; j < i + 1; j++) {
        output += '#';
    }
    //Gets needed color, so the loop can work with more than 7 rows
    const getColor = i % 4;
    console.log(customColor[getColor](output));
}