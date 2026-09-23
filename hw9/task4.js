const person = {
    firstName: "Dmytro",
    lastName: "Cherep",
    age: 30
};

person.email = "dmytro@example.com";

delete person.age;

console.log(person);