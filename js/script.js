// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

var studente = {
    nome: "Daniele",
    cognome: "Vergani",
    eta: 27,
};

console.log(studente);

for (var key in studente){
    console.log(key + " " + studente[key]);
}

// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

var studenti = [
    {
        nome: "Daniele",
        cognome: "Vergani",
        eta: 27,   
    },
    {
        nome: "Samuele",
        cognome: "Madrigali",
        eta: 29,   
    },
    {
        nome: "Michele",
        cognome: "Stucchi",
        eta: 23,   
    },
];

for( var i = 0; i < studenti.length; i++ ){
    console.log( studenti[i]["nome"] + " " + studenti[i]["cognome"] );
}

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.