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


