/*
Capturar 2 números e fazer as operações matemáticas de soma, subtração, multiplicação, divisão e resto da divisão.

E para cada operação mostrar um alerta com o resultado.
*/

alert("Vamos fazer várias operações matemáticas!")

let numberOne = Number(prompt("Escolha o primeiro número:"))
let numberTwo = Number(prompt("Escolha o segundo número:"))

const addition = numberOne + numberTwo
alert(`Soma: ${addition}`)

const subtraction = numberOne - numberTwo
alert(`Subtração: ${subtraction}`)

const multiplication = numberOne * numberTwo
alert(`Multiplicação: ${multiplication}`)

const division = numberOne / numberTwo
alert(`Divisão: ${division}`)

const remainder = numberOne % numberTwo
alert(`Resto da divisão: ${remainder}`)