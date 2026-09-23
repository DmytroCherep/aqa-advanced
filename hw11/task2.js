function getTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch todo");
            }

            return response.json();
        });
}

function getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch user");
            }

            return response.json();
        });
}

const allResult = Promise.all([
    getTodo(),
    getUser()
]);

allResult
    .then((result) => {
        console.log("Promise.all result:");
        console.log(result);
    })
    .catch((error) => {
        console.log(error.message);
    });

const raceResult = Promise.race([
    getTodo(),
    getUser()
]);

raceResult
    .then((result) => {
        console.log("Promise.race result:");
        console.log(result);
    })
    .catch((error) => {
        console.log(error.message);
    });