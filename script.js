//1.(5) Cambia il colore di sfondo di un elemento:
const divColorato = document.getElementById("cambioColore");
function changeColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  divColorato.style.backgroundColor = color;
}
divColorato.addEventListener("mouseover", changeColor);

//2.(7) Inserisci il testo in un div
const cambiaTesto = document.getElementById("cambiaTesto");
function changeText() {
  cambiaTesto.innerHTML = "Ba taistala";
}
cambiaTesto.addEventListener("click", changeText);

//Aggiungi un elemento HTML:Inserisci un nuovo elemento HTML (come un paragrafo o un'immagine) in una posizione specifica del DOM.

let daInserire = document.getElementById("daInserire");

function inserisci() {
  const nuovoElemento = document.createElement("img");
  nuovoElemento.setAttribute("src", "doge96.png");

  daInserire.appendChild(nuovoElemento);
}

daInserire.addEventListener("click", inserisci);

//*4. Rimuovi un elemento HTML:**
let removeDiv = document.getElementById("removeDiv");

function rimuovi() {
  removeDiv.remove();
}

removeDiv.addEventListener("click", rimuovi);

//6.Bottone per nascondere/mostrare un paragrafo

let hideDiv = document.getElementById("hideDiv");
let hideBtn = document.getElementById("hideBtn");

function nascondi() {
  let hideText = document.getElementById("hideText");
  if (hideText.style.display == "flex") {
    hideText.style.display = "none";
  } else {
    hideText.style.display = "flex";
  }
}
hideBtn.addEventListener("click", nascondi);
//8. Cambia dimensione di un'immagine al clic

