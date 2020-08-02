<<<<<<< HEAD
const array = ['cat','cat', 'cat', 'dog', 'pigeon', 'eagle', 'pig', 'crocodile', 'dog', 'cat', 'cat', 'cat', 'cat', 'cat', 'cat', 'cat']

const removeDublicate = (array) => [...new Set(array)];
=======
const array = ['cat','cat', 'cat', 'dog', 'pigeon', 'eagle', 'pig', 'crocodile', 'dog', 'cat']

const removeDublicate = (array) => {
    //new array that will contain unique values
    let unique = [];
    array.map(elem => {
        //isUnique is needed to know if this element is already in unique array
        isUnique = true;
        //Checks if unique array is empty
        if (unique.length === 0) unique = [...unique, elem];
        else {
            unique.map(uniElem => {
                if (uniElem === elem) isUnique = false;
            })
            //adds value to array
            if (isUnique) unique = [...unique, elem];
        }
    })
    return unique;
}
>>>>>>> goal-3

console.log(removeDublicate(array));