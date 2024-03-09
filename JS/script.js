// Get DOM elements and initialize the game

const inputs = document.querySelector("input");
const guess = document.querySelector(".guess");
const checkButton = document.querySelector("button");
const remainChances = document.querySelector(".chances");


// Set the focus on input field
inputs.focus();

let randomNum = Math.floor(Math.random() * 100);

chance = 10;


// Listen for the click event on the check button

checkButton.addEventListener("click", () => {
    // Decrement the chance variable on every click
   chance--;
//    Get the value from input field
let inputValue = inputs.value
// Chekc if the input value is equal to the random number 
if(inputValue == randomNum){
    // Update guessed number, disable input, chekc button text and color
    [guess.textContent, inputs.disabled] = ["Congratulations", true];
    [checkButton.textContent, guess.style.color] = ["Replay", "#333"];
}
    // Check if input value is > random number and is between range 1-99
else if(inputValue > randomNum && inputValue < 100){
    
        // update the guess text and remaining chances
        [guess.textContent, remainChances.textContent] = ["Your guess is high", chance];
        guess.style.color = "#333";
        // Check if input value is < random number and within 1-99

    }else if (inputValue < randomNum && inputValue > 0){
         // update the guess text and remaining chances
         [guess.textContent, remainChances.textContent] = ["Your guess is low", chance];
        guess.style.color = "#333";
        // IF the input value is not within the range of 1-99
    }else {
        // update the guessed text, color and remaining chances
        [guess.textContent, remainChances.textContent] = ["Your number is invalid ", chance];
        guess.style.color = "#be1010";

    }
    // Check is chance is zero
    if(chance == 0)
    {
        [checkButton.textContent, inputs.disabled] = ["Replay", true, ""];
        [guess.textContent, guess.style.color] = ["You lost the game", "#be1010"];
    }
    if(chance < 0)
    {
        window.location.reload();
    }

    
});