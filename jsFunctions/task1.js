// Function Declaration
function calculateAreaDeclaration(width, height) {
    return width * height;
}

console.log(calculateAreaDeclaration(5, 10));


// Function Expression
const calculateAreaExpression = function (width, height) {
    return width * height;
};

console.log(calculateAreaExpression(5, 10));


// Arrow Function
const calculateAreaArrow = (width, height) => {
    return width * height;
};

console.log(calculateAreaArrow(5, 10));