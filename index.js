// Variables del juego
let numberGames = document.getElementById('games')
const tijera = 0
const piedra = 1
const papel = 2
let score = 0

// Variables del resultado
const tie = 0
const win = 1
const lost = 2

let isPlaying = false

// Botones para jugar
const tijeraBtn = document.getElementById('tijera')
const piedraBtn = document.getElementById('piedra')
const papelBtn = document.getElementById('papel')

// Mostrar resultados
const resultText = document.getElementById('resultText')

// Eleccion del usuario
tijeraBtn.addEventListener('click', () => {
  move(tijera)
  console.log(tijera)
})

piedraBtn.addEventListener('click', () => {
  move(piedra)
  console.log(piedra)
})

papelBtn.addEventListener('click', () => {
  move(papel)
  console.log(papel)
})

// Click en Jugar
function play() {
  document.getElementById('playBtn').addEventListener('click', function () {
    document.getElementById('cachipun').classList.remove('hidden')
  })
}

// Movimiento o jugada del usuario
function move(userOption) {
  // for (var i = 0; i < numberGames; i++) {
    if (isPlaying) return

    isPlaying = true
    const interval = setInterval(function () {
      const pcOption = calcPcOption()
    }, 200)

    setTimeout(function () {
      clearInterval(interval)

      const pcOption = calcPcOption()
      const result = calcResult(userOption, pcOption)

      switch (result) {
        case tie:
          alert(`Tu sacaste: ${userOption} y la computadora sacó: ${pcOption}, empataron`)
          break
        case win:
          score = score + 1
          alert(`Tu sacaste: ${userOption} y la computadora sacó: ${pcOption}, ganaste`)
          break
        case lost:
          score = score - 1
          alert(`Tu sacaste: ${userOption} y la computadora sacó: ${pcOption}, perdiste`)
          break
      }
      isPlaying = false
    }, 1000)
  // }
}

// Opcion elegida por pc

function calcPcOption() {
  const number = Math.floor(Math.random() * 3)
  switch (number) {
    case 0:
      return tijera
    case 1:
      return piedra
    case 2:
      return papel
  }
}

// Calcular el resultado
function calcResult(userOption, pcOption) {
  if (userOption === pcOption) {
    return tie;

  } else if (userOption === piedra) {

    if (pcOption === papel) return lost;
    if (pcOption === tijera) return win;

  } else if (userOption === papel) {

    if (pcOption === tijera) return lost;
    if (pcOption === piedra) return win;

  } else if (userOption === tijera) {

    if (pcOption === piedra) return lost;
    if (pcOption === papel) return win;

  }
}

play()
