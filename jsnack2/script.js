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

//Aggiungo evento al click del bottone

button.addEventListener("click", function () {
  const name = userName.value.trim().toLowerCase();
});
