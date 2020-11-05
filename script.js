const wordList = ['Krille', 'Javascript', 'Kaffe', 'Te', 'Vatten']; // Array: med spelets alla ord

// Funktion som slumpar fram ett ord

// 1. skapa en funktion
// 1b. skapa ett slumpmässigt tal, lagra i variabel randomNumber
// 1c. talet är 0 till längden på arrayen - 1 
// 2. välj ett ord ur arrayen
// 3. returnera ordet
// OBS! Det måste vara olika ord varje gång (eller i alla slumpmässigt utvalt)

function randomWord (arr) {
    let randomNumber = Math.floor(Math.random() * arr.length)
    console.log("Arrayen: " + arr)
    console.log("randomNumber: " + randomNumber)
    return  
}

randomWord(wordList);

