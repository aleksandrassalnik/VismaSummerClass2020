let myFunction = (name = '') => {
    console.log(`Hello ${name}`)
}

function spy(func) {
    let totalCount = 0;
    return (props) => {
        totalCount++;
        this.report = () => totalCount;
        func(props);
        return this;
    }
}


const spied = spy(myFunction);
const spied2 = spy(myFunction);

spied('John');
spied2('Monika')
spied('John');

console.log(spied('John').report(), spied2('Monika').report());
