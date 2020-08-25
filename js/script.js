//1. Creiamo un array contenente una lista di Cognomi
var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
//2. Chiediamo all'utente di inserire il proprio cognome
var cognomeUtente = prompt("Inserisci il tuo cognome");
//3. Aggiungiamo il cognome dell'utente all'array cognomi
cognomi.push(cognomeUtente);
//4. Ordiniamo alfabeticamente i cognomi contenuti nell'array
cognomi.sort();
//5. Stampiamo la lista ordinata nella console
for (var i = 0; i < cognomi.length; i++) {
  console.log(cognomi[i]);
}
//6. Calcoliamo e stampiamo la posizione reale del cognome dell'utente nella console
var posizioneCognome = cognomi.indexOf(cognomeUtente) + 1;
console.log("Il cognome inserito si trova alla posizione numero " + posizioneCognome);
