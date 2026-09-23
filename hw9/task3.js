const car1 = {
    brand: "Mazda",
    model: "CX-5",
    year: 2024
};

const car2 = {
    brand: "Toyota",
    model: "RAV4",
    owner: "John"
};

const car3 = {
    ...car1,
    ...car2
};

console.log(car3);