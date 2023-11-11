// addition

//function that adds two numbers
const add = (firstNumber, secondNumber) => {
    const result = firstNumber + secondNumber;
    return result;
}

// subtraction

const sub = (firstNumber, secondNumber) => {
    const result = firstNumber - secondNumber;
    return result;
}

// multiplication
const multiply = (firstNumber, secondNumber) => {
    const result = firstNumber * secondNumber;
    return result;
}

//division

const division= (firstNumber, secondNumber) => {
        const result = firstNumber / secondNumber;
        return result;
}


module.exports ={
    add,
    sub,
    multiply,
    division
}

