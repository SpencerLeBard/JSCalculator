let calculatorDisplay = document.getElementById('calculatorDisplay')

let total = {
  string: "",
  num: 0
}

function drawDisplay(){
let template = `${total.num}`
calculatorDisplay.innerText = template
} 
drawDisplay();

function add(number) {
  let firstNumber = number 
  let secondNumber = 0
  total.num = 0 
  total.string = ""
  secondNumber = total.num
  debugger
  let value = firstNumber + secondNumber
  total.num = value
  drawDisplay()
}

//take first number, save as new variable (done)
//clear display (done)
//take second number
//add both numbers 

//need equals function 

//clickSecondNumber


function clickNumber(digit){
  total.string = total.string += digit
  total.num = Number.parseInt(total.string)
  drawDisplay();
}
