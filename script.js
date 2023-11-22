
"use strict";

const operand1 = document.querySelector("#operand1");
const operand2 = document.querySelector("#operand2");
const operator = document.querySelector("#operator");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const msgbox = document.querySelector("#msgbox");
const correctBeep = document.querySelector("#correctBeep");
const wrongBeep = document.querySelector("#wrongBeep");
const options = [option1, option2, option3, option4];

let questionsAnswered = 0;
let indexOfAns;

const generateNumber = (lower, upper) => {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

const generateOperator = () => {
    const arrayOfOperator = ['+', '-', '*', '/'];
    let randomNumber = generateNumber(0, arrayOfOperator.length - 1);
    return arrayOfOperator[randomNumber];
}

const generateQuestion = () => {
    operand1.innerHTML = generateNumber(-50, 50);
    operand2.innerHTML = generateNumber(-50, 50);
    operator.innerHTML = generateOperator();

    for (let i = 0; i < options.length; i++) {
        options[i].setAttribute("style", "background-color:rgb(77, 62, 71);");
        options[i].removeAttribute("disabled");
    }
    msgbox.innerHTML = "Result: Question " + (questionsAnswered + 1);
}

const generateAnswer = () => {
    generateQuestion();

    let a = parseInt(operand1.innerHTML);
    let b = parseInt(operand2.innerHTML);
    let op = operator.innerHTML;
    let ans;

    // Calculate the correct answer based on the operands and operator
    switch (op) {
        case '+':
            ans = a + b;
            break;
        case '-':
            ans = a - b;
            break;
        case '*':
            ans = a * b;
            break;
        case '/':
            // Ensure that the division result is a whole number
            b = generateNumber(1, 10); // Choose a random divisor between 1 and 10
            ans = a / b;
            break;
        default:
            console.error("Unexpected operator:", op);
            return;
    }

    ans = Math.round(ans); // Round the answer to the nearest integer

    indexOfAns = generateNumber(0, options.length - 1); // Ensure there is always one correct answer

    for (let i = 0; i < options.length; i++) {
        if (i !== indexOfAns) {
            options[i].innerHTML = generateNumber(ans - 10, ans + 10);
        } else {
            options[i].innerHTML = ans;
        }
    }

    for (let i = 0; i < options.length; i++) {
        options[i].addEventListener("click", function () {
            handleOptionClick(i, ans);
        });
    }
}

function handleOptionClick(index, correctAnswer) {
    const selectedOption = parseInt(options[index].innerHTML);

    for (let i = 0; i < options.length; i++) {
        options[i].setAttribute("disabled", "true");
        if (i === indexOfAns) {
            options[i].setAttribute("style", "background-color:green;");
        } else {
            options[i].setAttribute("style", "background-color:red;");
        }
    }

    if (selectedOption === correctAnswer) {
        console.log("Correct answer!");
        correctBeep.play();
    } else {
        console.log("Wrong answer!");
        wrongBeep.play();
    }

    questionsAnswered++;

    if (questionsAnswered === 20) {
        showResult();
    } else {
        setTimeout(() => {
            generateAnswer();
        }, 1000); // Delay before generating the next question
    }
}

function showResult() {
    // Add any logic you need for displaying the final result
    console.log("Game Over. You answered 20 questions.");
}

// Initialize the game
generateAnswer();


// "use strict";

// const operand1 = document.querySelector("#operand1");
// const operand2 = document.querySelector("#operand2");
// const operator = document.querySelector("#operator");
// const option1 = document.querySelector("#option1");
// const option2 = document.querySelector("#option2");
// const option3 = document.querySelector("#option3");
// const option4 = document.querySelector("#option4");
// const msgbox = document.querySelector("#msgbox");
// const correctBeep = document.querySelector("#correctBeep");
// const wrongBeep = document.querySelector("#wrongBeep");
// const options = [option1, option2, option3, option4];

// let questionsAnswered = 0;
// let indexOfAns;

// const generateNumber = (lower, upper) => {
//     return Math.floor(Math.random() * (upper - lower + 1)) + lower;
// }

// const generateOperator = () => {
//     const arrayOfOperator = ['+', '-', '*', '/'];
//     let randomNumber = generateNumber(0, arrayOfOperator.length - 1);
//     return arrayOfOperator[randomNumber];
// }

// const generateQuestion = () => {
//     operand1.innerHTML = generateNumber(-50, 50);
//     operand2.innerHTML = generateNumber(-50, 50);
//     operator.innerHTML = generateOperator();

//     for (let i = 0; i < options.length; i++) {
//         options[i].setAttribute("style", "background-color:rgb(77, 62, 71);");
//         options[i].removeAttribute("disabled");
//     }
//     msgbox.innerHTML = "Result: Question " + (questionsAnswered + 1);
// }

// const generateAnswer = () => {
//     generateQuestion();

//     let a = parseInt(operand1.innerHTML);
//     let b = parseInt(operand2.innerHTML);
//     let op = operator.innerHTML;
//     let ans;

//     // Calculate the correct answer based on the operands and operator
//     switch (op) {
//         case '+':
//             ans = a + b;
//             break;
//         case '-':
//             ans = a - b;
//             break;
//         case '*':
//             ans = a * b;
//             break;
//         case '/':
//             // Ensure that the division result is a whole number
//             b = generateNumber(1, 10); // Choose a random divisor between 1 and 10
//             ans = a / b;
//             break;
//         default:
//             console.error("Unexpected operator:", op);
//             return;
//     }

//     indexOfAns = generateNumber(0, options.length) - 1;

//     for (let i = 0; i < options.length; i++) {
//         if (i !== indexOfAns) {
//             options[i].innerHTML = generateNumber(ans - 10, ans + 10);
//         } else {
//             options[i].innerHTML = ans;
//         }
//     }

//     for (let i = 0; i < options.length; i++) {
//         options[i].addEventListener("click", function () {
//             handleOptionClick(i, ans);
//         });
//     }
// }

// function handleOptionClick(index, correctAnswer) {
//     const selectedOption = parseInt(options[index].innerHTML);

//     for (let i = 0; i < options.length; i++) {
//         options[i].setAttribute("disabled", "true");
//         if (i === indexOfAns) {
//             options[i].setAttribute("style", "background-color:green;");
//         } else {
//             options[i].setAttribute("style", "background-color:red;");
//         }
//     }

//     if (selectedOption === correctAnswer) {
//         console.log("Correct answer!");
//         correctBeep.play();
//     } else {
//         console.log("Wrong answer!");
//         wrongBeep.play();
//     }

//     questionsAnswered++;

//     if (questionsAnswered === 20) {
//         showResult();
//     } else {
//         setTimeout(() => {
//             generateAnswer();
//         }, 2000); // Delay before generating the next question
//     }
// }

// function showResult() {
//     // Add any logic you need for displaying the final result
//     console.log("Game Over. You answered 20 questions.");
// }

// // Initialize the game
// generateAnswer();


// "use strict";

// const operand1 = document.querySelector("#operand1");
// const operand2 = document.querySelector("#operand2");
// const operator = document.querySelector("#operator");
// const option1 = document.querySelector("#option1");
// const option2 = document.querySelector("#option2");
// const option3 = document.querySelector("#option3");
// const option4 = document.querySelector("#option4");
// const msgbox = document.querySelector("#msgbox");
// const correctBeep = document.querySelector("#correctBeep");
// const wrongBeep = document.querySelector("#wrongBeep");
// const options = [option1, option2, option3, option4];

// let questionsAnswered = 0;

// const generateNumber = (lower, upper) => {
//     return Math.ceil(Math.random() * (upper - lower)) + lower;
// }

// const generateOperator = () => {
//     const arrayOfOperator = ['+', '-', '*', '/'];
//     let randomNumber = generateNumber(0, arrayOfOperator.length - 1);
//     return arrayOfOperator[randomNumber];
// }

// const generateQuestion = () => {
//     operand1.innerHTML = generateNumber(-50, 50);
//     operand2.innerHTML = generateNumber(-50, 50);
//     operator.innerHTML = generateOperator();

//     for (let i = 0; i < options.length; i++) {
//         options[i].setAttribute("style", "background-color:rgb(77, 62, 71);");
//         options[i].removeAttribute("disabled");
//     }
//     msgbox.innerHTML = "Result: Question " + (questionsAnswered + 1);
// }

// const generateAnswer = () => {
//     generateQuestion();

//     let a = parseInt(operand1.innerHTML);
//     let b = parseInt(operand2.innerHTML);
//     let op = operator.innerHTML;
//     let ans;

//     // Calculate the correct answer based on the operands and operator
//     switch (op) {
//         case '+':
//             ans = a + b;
//             break;
//         case '-':
//             ans = a - b;
//             break;
//         case '*':
//             ans = a * b;
//             break;
//         case '/':
//             ans = a / b;
//             break;
//         default:
//             console.error("Unexpected operator:", op);
//             return;
//     }

//     let indexOfAns = generateNumber(0, options.length) - 1;

//     for (let i = 0; i < options.length; i++) {
//         if (i !== indexOfAns) {
//             if (op === '/') {
//                 options[i].innerHTML = generateNumber(ans, ans + 50).toFixed(2);
//             } else {
//                 options[i].innerHTML = generateNumber(ans, ans + 50);
//             }
//         } else {
//             if (op === '/') {
//                 options[i].innerHTML = ans.toFixed(2);
//             } else {
//                 options[i].innerHTML = ans;
//             }
//         }
//     }

//     for (let i = 0; i < options.length; i++) {
//         options[i].addEventListener("click", function () {
//             handleOptionClick(i, ans);
//         });
//     }
// }

// function handleOptionClick(index, correctAnswer) {
//     const selectedOption = parseInt(options[index].innerHTML);

//     if (selectedOption === correctAnswer) {
//         console.log("Correct answer!");
//         correctBeep.play();
//     } else {
//         console.log("Wrong answer!");
//         wrongBeep.play();
//     }

//     questionsAnswered++;

//     if (questionsAnswered === 20) {
//         showResult();
//     } else {
//         generateAnswer();
//     }
// }

// function showResult() {
//     // Add any logic you need for displaying the final result
//     console.log("Game Over. You answered 20 questions.");
// }

// // Initialize the game
// generateAnswer();

