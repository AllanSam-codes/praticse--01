var input1 = document.querySelector("#input-1")
var input2 = document.querySelector("#input-2")
var incrBtn = document.querySelector("#increase")
var decrBtn = document.querySelector("#decrease")
var multBtn = document.querySelector("#multiply")
var divdBtn = document.querySelector("#divide")
var outputBox = document.querySelector("#output-box")

console.log(input1, input2, incrBtn, outputBox)


function calculateSum() {
    console.log(Number(input1.value) + Number(input2.value))
    outputBox.innerText = Number(input1.value) + Number(input2.value);
}

incrBtn.addEventListener("click", calculateSum)


function calculateMinus() {

    outputBox.innerText = Number(input1.value) - Number(input2.value);
}

decrBtn.addEventListener("click", calculateMinus)

function calculateMultiply() {

    outputBox.innerText = Number(input1.value) * Number(input2.value);
}

multBtn.addEventListener("click", calculateMultiply)

function calculateDivide() {

    outputBox.innerText = Number(input1.value) / Number(input2.value);
}

divdBtn.addEventListener("click", calculateDivide)