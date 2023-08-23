/*
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X e' o nome do paciente e Y e' o IMC desse paciente

  Crie uma funcao para fazer o calculo de IMC
*/

// peso / (altura * altura)

const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 170
  },
  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 180
  }
]

function printPatientIMC(patient) {
  alert(`Paciente ${patient.name} possui um IMC de ${(patient.weight / ((patient.height / 100) ** 2)).toFixed(2)}`)
}

for (let patient of patients) {
  printPatientIMC(patient)
}


