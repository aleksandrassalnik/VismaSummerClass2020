const colors = require('colors');

//defining colors that will be used
const customColor = [colors.red, colors.green, colors.yellow, colors.blue]
<<<<<<< HEAD
const getColor = [];
=======
>>>>>>> goal-3

for (let i = 0; i < 7; i++) {
    let output = '';
    for (let j = 0; j < i + 1; j++) {
        output += '#';
    }
<<<<<<< HEAD

    getColor.push(getRandom(i));

    console.log(customColor[getColor[i]](output));
}

function getRandom(prevColor) {
    const newColor = Math.floor(4 * Math.random());
    if (prevColor !== 0)
    {
        
        if (newColor == getColor[prevColor-1]) {
            return getRandom(prevColor);
        }
        else return newColor;
    }
    else return newColor;
=======
    //Gets needed color, so the loop can work with more than 7 rows
    const getColor = i % 4;
    console.log(customColor[getColor](output));
>>>>>>> goal-3
}