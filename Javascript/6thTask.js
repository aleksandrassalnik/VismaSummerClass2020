const array = ['cat','cat', 'cat', 'dog', 'pigeon', 'eagle', 'pig', 'crocodile', 'dog', 'cat', 'cat', 'cat', 'cat', 'cat', 'cat', 'cat']

const removeDublicate = (array) => [...new Set(array)];

console.log(removeDublicate(array));