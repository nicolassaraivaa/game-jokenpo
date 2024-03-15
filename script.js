const result = document.querySelector(".result")
const yourScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")
let humanScoreNumber = 0
let machineScoreNumber = 0



function playHuman(humanChoice) {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['stone', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
    
}
const playTheGame = (human, machine) => {
    const logoImgMachine = document.getElementById('logo-machine')

    console.log(`Você escolheu ${human} á maquinha escolheu ${machine}`)

    if (human === machine) {
        result.innerHTML = "Deu empate!"
    } else if (
        (human === 'paper' && machine === 'stone') ||
        (human === 'stone' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++
        yourScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu para alexia"
    }


    if (machine === 'paper'){
        logoImgMachine.src = "./assets/paper.png"
        logoImgMachine.style.visibility = "visible"

        
    } else if (machine === 'scissors'){
        logoImgMachine.src = "./assets/scissors.png"
        logoImgMachine.style.visibility = "visible"

    }else{
        logoImgMachine.src = "./assets/stone.png"     
        logoImgMachine.style.visibility = "visible"
  
    }


    changePhotoHuman(human)
}


const changePhotoHuman = (human) =>{
    const logoImgHuman = document.getElementById('logo-human')
    if (human === 'stone') {
        logoImgHuman.src = "./assets/stone.png"
        logoImgHuman.style.visibility = "visible"

       
    } else if (human === 'paper') {
        logoImgHuman.src = "./assets/paper.png"
        logoImgHuman.style.visibility = "visible"


    }else{
        logoImgHuman.src = "./assets/scissors.png"
        logoImgHuman.style.visibility = "visible"


    }
}

const clearNumber = () => {
    humanScoreNumber = 0
    machineScoreNumber = 0
    yourScore.innerHTML = 0
    machineScore.innerHTML = 0
}




