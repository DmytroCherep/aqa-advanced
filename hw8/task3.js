const numbers = [10, 20, 30, 40, 50];

const sum = numbers.reduce((total, number) => {
    return total + number;
}, 0);

console.log(sum);