// To compile ' npx tsc '
// To activate watch mode ' npx tsc -w '
const reportJokes: { joke: string; score: number | null; date: string }[] = [];
let currentJoke = "";

async function getJoke(): Promise<void> {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    console.log("Joke: ", data.joke);

    const joke = document.getElementById("joke");
    if (joke) {
      joke.textContent = data.joke;
      currentJoke = data.joke;
     
    } else {
      console.error('Element with id "joke" not found');
    }
  } catch (error) {
    console.error("Oops! Something went wrong...", error);
  }
}

const scoreButtons = document.querySelectorAll('.score-btn');
scoreButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const score = parseInt(target.dataset.score || '0');

    if(currentJoke) {
      const existingEntry = reportJokes.find(entry => entry.joke === currentJoke);
      if(existingEntry) {
        existingEntry.score = score;
        existingEntry.date = new Date().toISOString();
      } else {
        reportJokes.push({joke: currentJoke, score, date: new Date().toISOString() });
      }
      console.log(reportJokes)
    }
  })
})

const nextJokeBtn = document.getElementById("nextJoke");
if (nextJokeBtn) {
  nextJokeBtn.addEventListener("click", getJoke);
} else {
  console.error("Can't find the button... sorry :( ");
}
