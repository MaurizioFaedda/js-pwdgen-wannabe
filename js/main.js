var nomeUtente = prompt("Ciao, come ti chiami?");

var cognomeUtente = prompt("Grazie " + nomeUtente + ", ora inserisci il tuo cognome:");

var colore = prompt("Bene " + nomeUtente + " " + cognomeUtente + ", per finire inserisci il tuo colore preferito e la tua super password sarà generata!");



document.getElementById("password").innerHTML =
nomeUtente + cognomeUtente + colore + "20";
