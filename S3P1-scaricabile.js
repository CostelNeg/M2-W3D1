/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso 
 allora deve ritornare la loro somma moltiplicata per 3.

function crazySum(num1 , num2) {

  if (num1 === num2) {
    return ((num1 + num2) * 3) ;
  } else {
    return num1 + num2;
  }
}

let a = parseInt(prompt("insersci il primo numero"))
let b = parseInt(prompt("insersci il primo numero"))
let resullt = crazySum(a,b);
console.log(resullt);

*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro 
 e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* 
function boundery(num) {
  if(num === 400 || (num >= 20 && num <=100) ){
    return true
  }else{
    return false
  }
}
let c = parseInt(prompt("insersci un numero")); 
let resultBoundery = boundery(c);
console.log(resultBoundery);

*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro 
 e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/*
function revertString(newString){
  const arrayString = newString.split("");
  const reverseStringa = arrayString.reverse();
  const reverseStringa1 = reverseStringa.join("");
  return reverseStringa1;
}
let myString= prompt("inseirisci una frase o una parola ")
console.log(revertString(myString))

*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la 
 ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/*
function upperFirst(myString) {
  myString = myString.toLowerCase();
  const arrayString = myString.split(" ");
  for (let i = 0; i < arrayString.lenght; i++) {
    arrayString[i] =
      arrayString[i].charAt(0).toUpperCase() + arrayString[i].substring(1);
  }
  console.log(arrayString);
  const newString = arrayString.join(" ");
  console.log(newString);
  return newString;
}

let myString = prompt("inseirisci una frase ");
console.log(upperFirst(myString));

*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e 
 ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/


function giveMeRandom(n){
  const arrayRandom = [];
  for(let i= 0; i < n; i++){
    let number = Math.round(Math.random()*10);
    arrayRandom.push(number);
  } 
  return arrayRandom;
}

let n = prompt("inseirisci un numero ");
console.log(giveMeRandom(n));

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, 
 ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; 
 altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
