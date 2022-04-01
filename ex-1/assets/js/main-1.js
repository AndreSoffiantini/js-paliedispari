/* Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma */

// Chiedere all’utente di inserire una parola e salvare la parola inserita
const inputWord = prompt("Inserisci una parola");

// Creare una funzione per capire se la parola inserita è palindroma (se letta in senso inverso mantiene immutato il significato)
function isPalindrome(word) {

    let result = true;

    /* Ciclare un numero di volte pari alla metà della lunghezza della parola, 
    dato che passata la metà si ripeterebbero confronti già fatti 
    (arrotondare in difetto se dispari per evitare il confronto tra la lettera centrale con sè stessa)*/
    for (let i = 0; i < Math.floor(word.length / 2); i++) {

        /* Confrontare le lettere in posizioni opposte nella parola: 
        se si trova almeno una disuguaglianza la parola non è palindroma */
        if (word[i] !== word[word.length - i - 1]) {

            result = false;
            break;

        }

    }

    return result;

}

// Mostrare all'utente il risultato della funzione con il suo input
if (isPalindrome(inputWord)) {

    alert("La parola inserita è palindroma!");

} else {

    alert("La parola inserita non è palindroma!");

}