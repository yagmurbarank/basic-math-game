const operand1Element = document.querySelector("#operand1");
const operand2Element = document.querySelector("#operand2");
const operatorElement = document.querySelector("#operator");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const msgbox = document.querySelector("#msgbox");
const correctBeep = document.querySelector("#correctBeep");
const wrongBeep = document.querySelector("#wrongBeep");
const options = [option1, option2, option3, option4];
const operators = ['-', '+', 'x', '÷'];
let answer = 0;

function generate_equation() {
    const operand1 = Math.floor(Math.random() * 15);
    const operand2 = Math.floor(Math.random() * 30);
    const operatorIndex = Math.floor(Math.random() * 4); // 0: -, 1: +, 2: x, 3: ÷
    const dummyAnswer1 = Math.floor(Math.random() * 20);
    const dummyAnswer2 = Math.floor(Math.random() * 25);
    const dummyAnswer3 = Math.floor(Math.random() * 30);
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
            answer = Math.round((operand1 / operand2) * 100) / 100; // Division result rounded to two decimal places
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
      setTimeout(()=> {
        generate_equation();
      },1000);
  } else {
    options[index].setAttribute("style", "background-color:red;");
      wrongBeep.play();
      setTimeout(()=> {
        generate_equation();
      },1000);
  }

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
 
function generate_result(){

  
}

