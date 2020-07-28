for (let i = 0; i < 100; i++)
{
    let number ='';
    if (i % 3 === 0) number = 'Fizz';
    if (i % 5 === 0) number += 'Buzz';
    if (number === '') number = i;
    console.log(number);
}