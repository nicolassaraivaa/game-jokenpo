const result = document.querySelector(".result")
const yourScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")
const clickOpponent = document.querySelector(".buttons")
const buttonAlexa = document.querySelector("#logo-alexa")
const buttonChatGPT = document.querySelector("#logo-chatGPT")
const buttonDevClub = document.querySelector("#logo-devClub")
const buttonSiri = document.querySelector("#logo-siri")

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


    if (machine === 'paper') {
        logoImgMachine.src = "./assets/paper.png"
        logoImgMachine.style.visibility = "visible"


    } else if (machine === 'scissors') {
        logoImgMachine.src = "./assets/scissors.png"
        logoImgMachine.style.visibility = "visible"

    } else {
        logoImgMachine.src = "./assets/stone.png"
        logoImgMachine.style.visibility = "visible"

    }


    changePhotoHuman(human)
}


const changePhotoHuman = (human) => {
    const logoImgHuman = document.getElementById('logo-human')
    if (human === 'stone') {
        logoImgHuman.src = "./assets/stone.png"
        logoImgHuman.style.visibility = "visible"


    } else if (human === 'paper') {
        logoImgHuman.src = "./assets/paper.png"
        logoImgHuman.style.visibility = "visible"


    } else {
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

const opponent = (opponent) => {
    const chosenOpponent = document.getElementById('chosen-opponent')

    chosenOpponent.innerHTML = (opponent)

}

const hideDivShadow = () => {
    const chosenName = document.querySelector("#chosen-name")
    const username = document.querySelector('#username')
    const divShadow = document.querySelector(".shadow")

    if(username.value === ""){
        alert("Preencha o campo!");
    } else {
        divShadow.style.display = 'none'
        chosenName.innerHTML = (username).value
    }
    
}
buttonAlexa.addEventListener('click', function() {
    buttonAlexa.style.opacity = '0.4' 
    buttonAlexa.style.cursor = 'default'
    buttonSiri.style.opacity = '1'  
    buttonSiri.style.cursor = 'pointer'
    buttonChatGPT.style.opacity = '1'   
    buttonChatGPT.style.cursor = 'pointer'
    buttonDevClub.style.opacity = '1'   
    buttonDevClub.style.cursor = 'pointer'  
})

buttonChatGPT.addEventListener('click', function (){
    buttonChatGPT.style.opacity = '0.4'   
    buttonChatGPT.style.cursor = 'default'
    buttonSiri.style.opacity = '1'  
    buttonSiri.style.cursor = 'pointer'
    buttonAlexa.style.opacity = '1'
    buttonAlexa.style.cursor = 'pointer'
    buttonDevClub.style.opacity = '1'   
    buttonDevClub.style.cursor = 'pointer'     
})

buttonDevClub.addEventListener('click', function() {
    buttonDevClub.style.opacity = '0.4'   
    buttonDevClub.style.cursor = 'default'
    buttonSiri.style.opacity = '1'  
    buttonSiri.style.cursor = 'pointer'
    buttonAlexa.style.opacity = '1'
    buttonAlexa.style.cursor = 'pointer'
    buttonChatGPT.style.opacity = '1'   
    buttonChatGPT.style.cursor = 'pointer'
}) 

buttonSiri.addEventListener('click', function(){
    buttonSiri.style.opacity = '0.4'  
    buttonSiri.style.cursor = 'default'
    buttonAlexa.style.opacity = '1'
    buttonAlexa.style.cursor = 'pointer'
    buttonChatGPT.style.opacity = '1'   
    buttonChatGPT.style.cursor = 'pointer'
    buttonDevClub.style.opacity = '1'   
    buttonDevClub.style.cursor = 'pointer'
}) 








































/*const clickAlexa = () =>{
    buttonAlexa.style.opacity = '0.5'
    buttonChatGPT.style.opacity = '1'   
    buttonDevClub.style.opacity = '1'   
    buttonSiri.style.opacity = '1'   

}

const clickChatGPT = () =>{
    buttonChatGPT.style.opacity = '0.5'   
    buttonAlexa.style.opacity = '1'
    buttonDevClub.style.opacity = '1'   
    buttonSiri.style.opacity = '1'  
}

const clickDevClub = () =>{
    buttonDevClub.style.opacity = '0.5'   
    buttonAlexa.style.opacity = '1'
    buttonChatGPT.style.opacity = '1'   
    buttonSiri.style.opacity = '1'  
}

const clickSiri = () =>{
    buttonSiri.style.opacity = '0.5'  
    buttonAlexa.style.opacity = '1'
    buttonChatGPT.style.opacity = '1'   
    buttonDevClub.style.opacity = '1'   
}*/