const jokeElem = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

try {
  const res = await fetch("https://icanhazdadjoke.com", config);
  if (!res.ok) {
    throw new Error ('HTTP error! Status: ${res.status}');
  }

  const data = await res.json();
  jokeElem.innerHTML = data.joke;
}

catch (error) {
  console.error("Failed to fetch joke:", error);
  jokeElem.innerHTML = "Error: The joke machine broke.";
}
}

jokeBtn.addEventListener("click", generateJoke);

// [Generate New Joke]
//    ↓
// Sidan laddas
//    ↓
// Kör funktionen generateJoke() första gången
//    ↓
// ──────────────────────────────────────────
// FUNKTION: generateJoke()
// ──────────────────────────────────────────
//    ↓
// Skapa "config" → säger till API att vi vill ha JSON
//    ↓
// Försök hämta ett skämt från webben:
//   fetch('https://icanhazdadjoke.com/', config)
//    ↓
// [ Vänta på svar med await ]
//    ↓
// 📦 Om svaret är OK (res.ok == true):
//        ↓
//        Gör om svaret till data (await res.json())
//        ↓
//        Hämta skämtet från data.joke
//        ↓
//        Visa skämtet på webbsidan (jokeElement.innerHTML = data.joke)
//        ↓
//        🔁 KLART! Vänta på nästa klick
//    ↓
// 🚫 Om något går fel (t.ex. ingen internet, API nere):
//        ↓
//        Visa text: "Något gick fel ⛔ "
//        ↓
//        Skriv felet i konsolen
//        ↓
//        🔁 Vänta på nästa klick
// ──────────────────────────────────────────
//    ↓
// När användaren klickar på knappen “New Joke”
//    ↓
// Händelse triggas → jokeBtn.addEventListener('click', generateJoke)
//    ↓
// Funktionen körs om igen från början!
//    ↓
// [LOOPAR OM IGEN VID VARJE KLICK] 