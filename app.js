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
  // console.log(firstNum);
  // console.log(numbersArray);
  drawDisplay()
}

function equals(){
let secondNum = Number(numbersArray.join(''))
// debugger
activeNumber = firstNum + secondNum 
total = activeNumber
drawDisplay()
}


//NOTE draw to screen
//1.) div with Id in HTML
//2.) in JS file have let 'display' = document.getElementById('display')
//3.) function drawDisplay(){
// let template = `${display}`
//display.innertext = template
//drawDisplay();


//NOTE while loop once you press any number 
//if activeNum not set, wait to set active 
//convert from string to number 

//NOTE
//use switches for + - etc
//onlick passes string instead of number 