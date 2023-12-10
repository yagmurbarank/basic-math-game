const operand1Element = document.querySelector("#operand1");
const operand2Element = document.querySelector("#operand2");
const operatorElement = document.querySelector("#operator");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const result = document.querySelector("#result");
const goBackGame=document.querySelector("#goBackGame");
const correctBeep = document.querySelector("#correctBeep");
const wrongBeep = document.querySelector("#wrongBeep");
const options = [option1, option2, option3, option4];
const operators = ['-', '+', 'x', '÷'];
let answer = 0;
let correctAnswers=0;
let totalQuestions=0;
let wrongAnswers=0;

function generate_equation() {
    const operand1 = Math.floor(Math.random() * 15);
    const operand2 = Math.floor(Math.random() * 30);
    const operatorIndex = Math.floor(Math.random() * 4); // 0: -, 1: +, 2: x, 3: ÷
    const dummyAnswer1 = Math.floor(Math.random() * 25);
    const dummyAnswer2 = Math.floor(Math.random() * 30);
    const dummyAnswer3 = Math.floor(Math.random() * 33);
    const allAnswers = [];
    const switchAnswers = [];

    switch (operatorIndex) {
        case 0:
            answer = operand1 - operand2;
            break;
        case 1:
            answer = operand1 + operand2;
            break;
        case 2:
            answer = operand1 * operand2;
            break;
        case 3:
          answer = (operand2 !== 0) ? Math.round(operand1 / operand2) : 0; // Division result rounded to two decimal places
            break;
        default:
            break;
    }

    operand1Element.textContent = operand1;
    operand2Element.textContent = operand2;
    operatorElement.textContent = operators[operatorIndex];

    allAnswers.push(answer, dummyAnswer1, dummyAnswer2, dummyAnswer3);

    for (let i = allAnswers.length; i--;) {
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    }

    options[0].textContent = switchAnswers[0];
    options[1].textContent = switchAnswers[1];
    options[2].textContent = switchAnswers[2];
    options[3].textContent = switchAnswers[3];

}


function handleOptionClick(index) {
  // Disable all options to prevent further clicks during processing
  options.forEach(option => {
      option.setAttribute("disabled", "true");
  });

  // Highlight the selected option


  // Check if the selected option is correct
  if (parseInt(options[index].textContent) === answer) {
    options[index].setAttribute("style", "background-color:green;");
      correctBeep.play();
      correctAnswers++;
      setTimeout(()=> {
        generate_equation();
      },1000);
  } else {
    options[index].setAttribute("style", "background-color:red;");
      wrongBeep.play();
      wrongAnswers++;
      setTimeout(()=> {
        generate_equation();
      },1000);
  }
  totalQuestions++

  // Wait for a moment before moving to the next question
  setTimeout(() => {
      // Reset styles and enable options for the next question
      options.forEach(option => {
          option.removeAttribute("disabled");
          option.removeAttribute("style");
      });

      // Generate a new question
      generate_equation();
  }, 1000);
}

// Attach the event handler to each option
options.forEach((option, index) => {
  option.addEventListener("click", () => {
      handleOptionClick(index);
  });
});

generate_equation();

function showResult() {
    // Add a click event listener to the result
     result.style.cursor = "pointer"; // Change cursor to indicate it's clickable
    result.addEventListener("click", handleResultClick, { once: true });
    correctAnswers=document.querySelector("#correct");
    wrongAnswers=document.querySelector("#wrong");

}

function handleResultClick() {
    // Show detailed results in an alert
    window.open('/result.html', '_self');
    // alert(`Correct Answers: ${correctAnswers}\nIncorrect Answers: ${totalQuestions - correctAnswers}`);
     console.log(`Correct Answers: ${correctAnswers}\nIncorrect Answers: ${totalQuestions - correctAnswers}`);

      // Update the content of the HTML elements with the correct and wrong answers
      const correctElement = document.getElementById("correct");
      const wrongElement = document.getElementById("wrong"); 
    
      correctElement.textContent = `Correct answers: ${correctAnswers}`;
      wrongElement.textContent = `Wrong answers: ${wrongAnswers}`;
            // Show the result section
      const resultSection = document.querySelector(".box");
      resultSection.style.display = "block";
  
      const gameSection = document.querySelector("main");
      gameSection.style.display = "none";

   
    }
   
// Attach the event handler to the result button
result.addEventListener("click", handleResultClick);



function handleBackGameClick() {
  // Show detailed results in an alert
  window.open('/index.html', '_self');

    generate_equation();

 
  }
                           
function backTogame() {
  // Add a click event listener to the result
   goBackGame.style.cursor = "pointer"; // Change cursor to indicate it's clickable
  goBackGame.addEventListener("click", handleBackGameClick, { once: true });


}

// Attach the event handler to the result button
goBackGame.addEventListener("click", () => {handleBackGameClick();});

