let totalCount = 0;

let myFunction = () => {
    console.log('You called me')
}

const spy = func => {
    func();
    return () => { this.report = totalCount; totalCount++;  return this };
}

const spied = spy(myFunction);

spied();

console.log(spied().report);

