let calculatorDisplay = document.getElementById('calculatorDisplay')

let total = 0
let numbersArray = []

function drawDisplay(){
let template = `${total}`
calculatorDisplay.innerText = template
} 
drawDisplay();


function clearDisplay(){
numbersArray = []
total = 0
console.log(numbersArray);
drawDisplay()
}



function calculator(number){
  numbersArray.push(number)
  total = numbersArray.join("")
  drawDisplay()
}


let addNum = 0
function add(){
let addNum = Number(numbersArray.join(''))
numbersArray = []
console.log(addNum);
drawDisplay()
}


//NOTE draw to screen
//1.) div with ID in HTML
//2.) in JS file have let 'display' = document.getElementById('display')
//3.) function drawDisplay(){
// let template = `${display}`
//display.innertext = template
//drawDisplay();
