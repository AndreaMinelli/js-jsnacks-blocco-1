// # --------- ESERCIZIO 2 ---------------

/*
In un array sono contenuti i nomi degli invitati alla festa
del grande Gatsby, l’utente inserisce il suo nome tramite
un input.comunicagli se può partecipare o no alla festa. 
(vietato usare includes())
*/

//Creo lista di invitati

const guest = [
  "minelli andrea",
  "lanci marco",
  "lino topo",
  "rino pape",
  "rina pape",
];

//Targhettizzo gli elementi nella pagina

const userName = document.getElementById("name");
const button = document.getElementById("button");
const messageElement = document.getElementById("message");

//Aggiungo evento al click del bottone

button.addEventListener("click", function () {
  const name = userName.value.trim();
  const formattedName = name.toLowerCase();

  let isGuest = false;
  let message = `Mi dispiace ${name}, non sei stato invitato, sarà per la prossima volta!`;

  for (let i = 0; i < guest.length && !isGuest; i++) {
    const guestName = guest[i];

    if (guestName === formattedName) isGuest = true;

    if (isGuest) {
      message = `Salve ${name}, spero che la festa sarà di tuo gradimento!`;
      messageElement.classList.remove("text-danger");
      messageElement.classList.add("text-success");
    }
  }

  messageElement.innerText = message;
});
