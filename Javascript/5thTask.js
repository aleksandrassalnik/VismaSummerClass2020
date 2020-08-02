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
    }
    return 'There\'s no such house';
}

const ES6Moto = (name) => houses.find(houses => houses.name === name ? houses : null).motto;

console.log(ES5Moto('Bolton'), ES6Moto('Greyjoy'));
