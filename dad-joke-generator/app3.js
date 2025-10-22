const jokeElem = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  jokeElem.innerHTML = data.joke;
}

jokeBtn.addEventListener("click", generateJoke);
