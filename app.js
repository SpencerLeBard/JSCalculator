let calculatorDisplay = document.getElementById('calculatorDisplay')

let total = 0
let numbersArray = []
firstNum = 0
activeNumber = 0

function drawDisplay(){
let template = `${total}`
calculatorDisplay.innerText = template
} 
drawDisplay();


function clearDisplay(){
numbersArray = []
total = 0
drawDisplay()
}


function calculator(number){
  numbersArray.push(number)
  total = numbersArray.join("")
  drawDisplay()
}


function add(){
  firstNum = Number(numbersArray.join(''))
  numbersArray = []
  drawDisplay()
}

// function operation(){
//   switch(x){
//     case 
//   }
// }


function equals(){
let secondNum = Number(numbersArray.join(''))
activeNumber = firstNum + secondNum
//NOTE take it parameter in equals(x), use switch cases to add/sub/multiply/divide
total = activeNumber
drawDisplay()
}



//NOTE set active number function 

//NOTE
//use switches for + - etc
//onclick passes string instead of number 
//global variable operation any symbol clicked



//NOTE draw to screen
//1.) div with Id in HTML
//2.) in JS file have let 'display' = document.getElementById('display')
//3.) function drawDisplay(){
// let template = `${display}`
//display.innertext = template
//drawDisplay();