let calculatorDisplay = document.getElementById('calculatorDisplay')

let total = {
  start: 0
}

function drawDisplay(){
let template = `${total.start}`
calculatorDisplay.innerText = template
} 
drawDisplay()

function addNumber(){

}