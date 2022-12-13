// # --------- ESERCIZIO 1 ---------------

/*
Il software deve chiedere per 10 volte all’utente di inserire un numero. (qui potete usare un prompt). Il programma stampa la somma di tutti i numeri inseriti.
*/

//Targhettizzo gli elementi in pagina
const totalElement = document.getElementById("total");

//Creo array dove salvare i numeri
const numbers = [];

for (let i = 0; numbers.length < 10; i++) {
  const number = parseInt(prompt("Inserisci un numero da sommare").trim());

  //Controllo che i numeri inseriti siano validi
  if (isNaN(number) || number <= 0) {
    alert("Hai inserito un numero non valido");
  } else {
    numbers.push(number);
  }
}

//Creo variabile per fare la somma
let sum = 0;

//Creo ciclo per sommare i numeri nell'array
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

//Stampo in pagina il risultato
totalElement.innerText = `La somma dei tuoi numeri è ${sum}`;
