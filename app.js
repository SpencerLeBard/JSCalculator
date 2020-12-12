let calculatorDisplay = document.getElementById('calculatorDisplay')

let total = {
  num: 0
}

let numbersArray = []


function drawDisplay(){
let template = `${total.num}`
calculatorDisplay.innerText = template
} 
drawDisplay();

function clearDisplay(){
numbersArray = []
total.num = 0
console.log(numbersArray);
drawDisplay()
}


function calculator(number){
  numbersArray.push(number)
  total.num = numbersArray.join("")
  console.log(numbersArray);
  drawDisplay()
}

function add(){
  let additionFinal = 0 
  additionFinal = numbersArray[0] + numbersArray[1] 
  total.num = additionFinal
  drawDisplay()
}

