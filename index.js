let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers);

let evenNums = numbers.filter(isEven);

function isEven(element){
    return element % 2 === 0;
} 


console.log(evenNums);
