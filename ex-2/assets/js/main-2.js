/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5
const oddOrEven = prompt("Scegli pari o dispari");
const inputNumber = parseInt(prompt("Inserisci un numero da 1 e 5"));

// Definire una funzione per generare un numero random entro un intervallo
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generare il numero del computer e mostrarlo all'utente
const pcNumber = getRndInteger(1, 5);
alert(`Il numero generato dal computer è ${pcNumber}`);

// Sommare i due numeri e mostrare il risultato all'utente
const sum = inputNumber + pcNumber;
alert(`La somma dei numeri è ${sum}`);

// Definire una funzione per stabilire se una numero è pari o dispari
function isEven(number) {

    return (number % 2 == 0);

}

// Stabilire se la somma è pari o dispari e dichiarare il vincitore

switch (isEven(sum)) {
    case true:

        if (oddOrEven == "pari") {

            alert("Hai vinto!");

        } else {

            alert("Hai perso!");

        }

        break;

    case false:

        if (oddOrEven == "dispari") {

            alert("Hai vinto!");

        } else {

            alert("Hai perso!");

        }

        break;

    default:

        alert("Errore!");
        break;
}