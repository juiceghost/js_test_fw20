const wordList = ['VS Code', 'Krille', 'Javascript', 'Kaffe', 'Te', 'Vatten']; // Array: med spelets alla ord

// Funktion som slumpar fram ett ord

// 1. skapa en funktion
// 1b. skapa ett slumpmässigt tal, lagra i variabel randomNumber
// 1c. talet är 0 till längden på arrayen - 1 
// 2. välj ett ord ur arrayen
// 3. returnera ordet
// OBS! Det måste vara olika ord varje gång (eller i alla slumpmässigt utvalt)

function randomWord (arr) {
    const randomNumber = Math.floor(Math.random() * arr.length)
    return arr[randomNumber]
}
//console.log("Function returns " + randomWord(wordList));

// Funktion som inaktiverar/aktiverar bokstavsknapparna (beroende på vilken del av spelet du är på)

function activate (arg) {
    //let myButtonContainer = document.querySelector('#letterButtons')
    let myButtons = document.querySelectorAll('#letterButtons button')
    // om arg = true, aktivera alla knappar
    // (arg = true):
    // 1. för varje knapp i listan:
    // sätt den aktiv
    for (let i = 0; i < myButtons.length; i++) {
        console.log("index: " + i)
        //console.log("element: ");
        console.log(myButtons[i]) 
        myButtons[i].disabled = false

    }

    // om arg = false, avaktivera --"--
    // element.disabled = true avaktiverar, = false aktiverar
    // myButtons.disabled = false funkar icke.

    
    return myButtons
}
console.log("Function returns ");
console.log(activate());
