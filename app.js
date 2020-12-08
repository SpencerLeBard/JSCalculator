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

//NOTE 2 draw displays? one for begining one end/strings,nums?

function add(firstNum) {
  let addition = firstNum += 2
  total.num = addition 
  drawDisplay()
}


function clickNumber(digit){
  total.string = total.string += digit
  total.num = Number.parseInt(total.string)
  drawDisplay();
}
