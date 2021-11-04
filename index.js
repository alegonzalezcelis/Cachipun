// Variables del juego
const tijera = 0
const piedra = 1
const papel = 2
var score = 0
var turnos = 0

// Variables del resultado
const tie = 0
const win = 1
const lost = 2

// Botones para jugar
const tijeraBtn = document.getElementById('tijera')
const piedraBtn = document.getElementById('piedra')
const papelBtn = document.getElementById('papel')

const juego = document.getElementById('juego')



var jugada = ['tijera','piedra','papel']
var jugadaHTML = [tijeraBtn,piedraBtn,papelBtn]

// Eleccion del usuario
tijeraBtn.addEventListener('click', () => {
  move(tijera)
})

piedraBtn.addEventListener('click', () => {
  move(piedra)
})

papelBtn.addEventListener('click', () => {
  move(papel)
})

// Click en Jugar
function play() {
  document.getElementById('playBtn').addEventListener('click', function () {
    score = 0
    document.getElementById('cachipun').classList.remove('hidden')
    juego.classList.add('hidden')
    let numberGames = document.getElementById('games').value
    document.getElementById('turnos').innerHTML = `Te quedan ${numberGames} jugadas`
    turnos = parseInt(numberGames)
  })
}

// Movimiento o jugada del usuario
function move(userOption) {
  // for (var i = 0; i < numberGames; i++) {
    const interval = setInterval(function () {
      const pcOption = calcPcOption()
    }, 1)

    setTimeout(function () {
      clearInterval(interval)

      const pcOption = calcPcOption()
      const result = calcResult(userOption, pcOption)
      var texto = ''
      switch (result) {
        case tie:
          texto = `Tu sacaste <b>${jugada[userOption]}</b> y la computadora sacó <b>${jugada[pcOption]}</b> <br>
          <p class="mx-auto text-blue-800 font-bold">Empataron</p>`
          break
        case win:
          score = score + 1
          texto = `Tu sacaste <b>${jugada[userOption]}</b> y la computadora sacó <b>${jugada[pcOption]}</b> <br>
          <p class="mx-auto text-blue-800 font-bold">Ganaste</p>`
          break
        case lost:
          score = score - 1
          texto = `Tu sacaste <b>${jugada[userOption]}</b> y la computadora sacó <b>${jugada[pcOption]}</b> <br>
          <p class="mx-auto text-blue-800 font-bold">Perdiste</p>`
          break
      }
      resultado(jugadaHTML[userOption], jugadaHTML[pcOption], texto)
      document.getElementById('resultText').innerHTML = score
    }, 1)
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

function resultado(userPlay, pcPlay, resultadoJugada){
  document.getElementById('miJugada').innerHTML = outerHTML(userPlay) 
  document.getElementById('pcJugada').innerHTML = outerHTML(pcPlay)
   turnos -= 1
  document.getElementById('turnos').innerHTML = `Te quedan ${turnos} jugadas`

  document.getElementById('resultadoJugada').innerHTML = `<p>${resultadoJugada}</p>`

  if (turnos == 0){
     juego.classList.remove('hidden')
     document.getElementById('cachipun').classList.add('hidden')
  }
}

function outerHTML(node){
  return node.outerHTML || new XMLSerializer().serializeToString(node);
 }

play()
