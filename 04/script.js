/*
  Solicitar o nome do aluno e as 3 notas do bimestre e calcular a média daquele aluno.

  A média positiva deverá ser maior que 6.

  Se o aluno passou no bimestre, dar os parabéns.

  Se o aluno não passou no bimestre, motivar o aluno a dar o seu melhor na prova de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e nota
*/

const student = prompt("Digite o nome do(a) aluno(a):")

let firstNote = Number(prompt("Digite a primeira nota:"))
let secondNote = Number(prompt("Digite a segunda nota:"))
let thirdNote = Number(prompt("Digite a terceira nota:"))

let average = (firstNote + secondNote + thirdNote) / 3

const averageFixed = average.toFixed(2)

if (average > 6) {
  alert(`Parabéns, ${student}! Sua média foi de ${averageFixed}.`)
} else {
  alert(`${student} estude para sua prova de recuperação! Sua média foi de: ${averageFixed}.`)
}
