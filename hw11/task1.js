function printWithDelay(text, milliseconds) {
    setTimeout(() => {
        console.log(text);
    }, milliseconds);
}

printWithDelay("Hello after 2 seconds", 2000);