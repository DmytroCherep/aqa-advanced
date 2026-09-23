const users = [
    {
        name: "Dmytro",
        email: "dmytro@example.com",
        age: 30
    },
    {
        name: "Anna",
        email: "anna@example.com",
        age: 25
    },
    {
        name: "John",
        email: "john@example.com",
        age: 35
    }
];

for (const { name, email, age } of users) {
    console.log(name);
    console.log(email);
    console.log(age);
}