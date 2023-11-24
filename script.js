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
var answer = 0;

function generate_equation(){ 
  var operand1 = Math.floor(Math.random() * 15),
      operand2 = Math.floor(Math.random() * 30),
      dummyAnswer1 = Math.floor(Math.random() * 20),
      dummyAnswer2 = Math.floor(Math.random() * 20),
      dummyAnswer3 = Math.floor(Math.random() * 30),
      allAnswers = [],
      switchAnswers = [];
  answer = eval(operand1 + operand2);
  
  document.getElementById("operand1").innerHTML = operand1; 
  document.getElementById("operand2").innerHTML = operand2; 

  allAnswers = [answer, dummyAnswer1, dummyAnswer2, dummyAnswer3];

  for (i = allAnswers.length; i--;){
    switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  };

  option1.innerHTML = switchAnswers[0];
  option2.innerHTML = switchAnswers[1];
  option3.innerHTML = switchAnswers[2]; 
  option4.innerHTML = switchAnswers[3]; 


};

option1.addEventListener("click", function(){
    if(option1.innerHTML == answer){
        correctBeep.play();
        setTimeout(() => {
            generate_equation();
       }, 1000);
    }
    else{
      wrongBeep.play();
      setTimeout(() => {
        generate_equation();
            }, 1000); // Delay before generating the next question
            }
    
});

option2.addEventListener("click", function(){
    if(option2.innerHTML == answer){
        correctBeep.play();
        setTimeout(() => {
            generate_equation();
       }, 1000);
    }
    else{
      wrongBeep.play();
      setTimeout(() => {
        generate_equation();
   }, 1000); // Delay before generating the next question
}
});

option3.addEventListener("click", function(){
    if(option3.innerHTML == answer){
        correctBeep.play();
        setTimeout(() => {
            generate_equation();
       }, 1000);
    
    }
    else{
      wrongBeep.play();
      setTimeout(() => {
        generate_equation();
   }, 1000); // Delay before generating the next question
}
    
});
option4.addEventListener("click", function(){
    if(option4.innerHTML == answer){
        correctBeep.play();
      setTimeout(() => {
        generate_equation();
   }, 1000);
    }
    else{
      wrongBeep.play();
      setTimeout(() => {
        generate_equation();
   }, 1000); // Delay before generating the next question
}
});

generate_equation();




