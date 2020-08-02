<<<<<<< HEAD
var houses = [
    { name: "Targaryen", motto: "Fire and Blood" },
    { name: "Stark", motto: "Winter is Coming" },
    { name: "Bolton", motto: "Our Blades Are Sharp" },
    { name: "Greyjoy", motto: "We Do Not Sow" },
    { name: "Tully", motto: "Family, Duty, Honor" },
    { name: "Arryn", motto: "As High as Honor" },
    { name: "Lannister", motto: "Hear Me Roar!" },
    { name: "Tyrell", motto: "Growing Strong" },
    { name: "Baratheon", motto: "Ours is the Fury" },
    { name: "Martell", motto: "Unbowed, Unbent, Unbroken" }
];

function ES5Moto(name) {
    for (var i = 0; i < houses.length; i++) {
        if (name === houses[i].name) return houses[i].motto;
=======
var houses = [{ name: "Targaryen", motto: "Fire and Blood" }, { name: "Stark", motto: "Winter is Coming" }, { name: "Bolton", motto: "Our Blades Are Sharp" }, { name: "Greyjoy", motto: "We Do Not Sow" }, { name: "Tully", motto: "Family, Duty, Honor" }, { name: "Arryn", motto: "As High as Honor" }, { name: "Lannister", motto: "Hear Me Roar!" }, { name: "Tyrell", motto: "Growing Strong" }, { name: "Baratheon", motto: "Ours is the Fury" }, { name: "Martell", motto: "Unbowed, Unbent, Unbroken" }];

function ES5Moto(name) {
    for (var i = 0; i < houses.length; i++)
    {
        if (name === houses[i].name) return houses[i].motto;     
>>>>>>> goal-3
    }
    return 'There\'s no such house';
}

<<<<<<< HEAD
const ES6Moto = (name) => houses.find(houses => houses.name === name ? houses : null).motto;

console.log(ES5Moto('Bolton'), ES6Moto('Greyjoy'));
=======
const ES6Moto = (name) => {
    const result = houses.flatMap(houseName => {
        if (name === houseName.name) {
            return houseName.motto
        }
        return [];
    })
    //checks if there's motto from given house name
    if (result[0]) return result[0];
    else return 'There\s no such house';
}

console.log(ES5Moto('Bolton'), ES6Moto('Stark'));
>>>>>>> goal-3
