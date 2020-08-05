let myFunction = (name = '') => {
    console.log(`Hello ${name}`)
}

function spy(func) {
    let totalCount = 0;
    const wrapper = (props) => {
        totalCount++;
        return func(props);
    }
    wrapper.report = () => {
        return totalCount;
    }

    return wrapper;
}


const spied = spy(myFunction);
const spied2 = spy(myFunction);

spied('John');
spied2('Monika');
spied('John');

console.log(spied.report(), spied2.report());
