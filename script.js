"use strict";
// To compile ' npx tsc '
// To activate watch mode ' npx tsc -w '
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://icanhazdadjoke.com/', {
                headers: {
                    "Accept": 'application/json',
                }
            });
            const data = yield response.json();
            console.log('Joke: ', data.joke);
            const joke = document.getElementById('joke');
            if (joke) {
                joke.textContent = data.joke;
            }
            else {
                console.error('Element with id "joke" not found');
            }
        }
        catch (error) {
            console.error('Oops! Something went wrong...', error);
        }
    });
}
const nextJokeBtn = document.getElementById('nextJoke');
if (nextJokeBtn) {
    nextJokeBtn.addEventListener('click', getJoke);
}
else {
    console.error('Can\'t find the button... sorry :( ');
}
