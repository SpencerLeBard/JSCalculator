let calculatorDisplay = document.getElementById('calculatorDisplay')

let total = 0

function drawDisplay(){
let template = `${total}`
calculatorDisplay.innerText = template
drawDisplay();
} 

function clickNumber(digit){
  total = digit
  drawDisplay();
}
