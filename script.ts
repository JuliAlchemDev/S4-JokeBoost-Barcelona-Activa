// To compile ' npx tsc '
// To activate watch mode ' npx tsc -w '

async function getJoke(): Promise<void> {
    try {
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          "Accept": 'application/json',
        }
      })
      const data = await response.json()
      console.log('Joke: ', data.joke)
      
    const joke = document.getElementById('joke');
     if (joke) {
      joke.textContent = data.joke;
     } else {
      console.error('Element with id "joke" not found');
     }
    
  
    } catch (error) {
      console.error('Oops! Something went wrong...', error)
    }
  }
  
  const nextJokeBtn = document.getElementById('nextJoke');
    if(nextJokeBtn) {
      nextJokeBtn.addEventListener('click', getJoke);
      
    } else {
      console.error('Can\'t find the button... sorry :( ');
    }
  
  
  
  
  