class TodoService {
    async getTodo() {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch todo");
        }

        return await response.json();
    }
}

class UserService {
    async getUser() {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }

        return await response.json();
    }
}

const todoService = new TodoService();
const userService = new UserService();

async function main() {
    try {
        const allResult = await Promise.all([
            todoService.getTodo(),
            userService.getUser()
        ]);

        console.log("Promise.all result:");
        console.log(allResult);

        const raceResult = await Promise.race([
            todoService.getTodo(),
            userService.getUser()
        ]);

        console.log("Promise.race result:");
        console.log(raceResult);
    } catch (error) {
        console.log(error.message);
    }
}

main();