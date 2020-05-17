'use strict'

const fibonacci = () => {
    let array = [];
    let arrayItem = 0;
    let i = 0;

    while(true) {   
        arrayItem = i < 2 ? i : array[i-2] + array[i-1];
        
        if(arrayItem > 350) break;

        array.push(arrayItem);
        i++;
    }

    return array;
}

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
    fibonacci,
    isFibonnaci
}