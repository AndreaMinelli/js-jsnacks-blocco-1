// # --------- ESERCIZIO 3 ---------------

/*
L'utente inserisce un numero di 4 cifre in un input. 
Calcola la somma di tutte le cifre che compongono il numero 
e stampala in pagina.
Esempio: l'utente inserisce 1234, noi stampiamo 10.
*/

//Targhettizzo gli elementi in pagina

const numberElement = document.getElementById("number");
const button = document.getElementById("button");
const resultElement = document.getElementById("result");

//Al click del bottone recupero i numeri inseriti

button.addEventListener("click", function () {
  //Prendo il valore inserito dall'utente
  const numbers = numberElement.value;

  if (numbers.length > 4 || numbers < 0) {
    alert("Devi inserire 4 numeri maggiori di 0");
    return;
  } else {
    //Estrapolo i valori in sigoli elementi
    const numberValue = [...numbers];

    //Creo ciclo per sommare tutti gli elementi tra di loro

    let sum = 0;

    for (let i = 0; i < numberValue.length; i++) {
      const actualNumber = parseInt(numberValue[i]);

      sum += actualNumber;
    }

    resultElement.innerText = `La somma dei tuoi numeri è ${sum}`;
  }
});
