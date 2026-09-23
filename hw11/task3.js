async function getTodo() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch todo");
    }

    return await response.json();
}

async function getUser() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch user");
    }

    return await response.json();
}

async function main() {
    try {
        const allResult = await Promise.all([
            getTodo(),
            getUser()
        ]);

        console.log("Promise.all result:");
        console.log(allResult);

        const raceResult = await Promise.race([
            getTodo(),
            getUser()
        ]);

        console.log("Promise.race result:");
        console.log(raceResult);
    } catch (error) {
        console.log(error.message);
    }
}

main();