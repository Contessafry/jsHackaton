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

let poop = document.getElementById("poop");

function cambiaimg() {
  if (poop.style.width == "46px") {
    poop.style.width = "80px";
    poop.style.height = "80px";
  } else {
    poop.style.width = "46px";
    poop.style.height = "46px";
  }
}
poop.addEventListener("mouseover", cambiaimg);

let testo = document.getElementById("testo");

function textColor() {
  testo.style.color = "purple";
}

testo.addEventListener("click", textColor);

//10. Al click allert
let allertBtn = document.getElementById("alertBtn");

function allert() {
  alert("ATTENZIONE HAI SCARICATO 15 TROYAN!!!");
}

allertBtn.addEventListener("click", allert);
//11. Aggiungi classe CSS con evento:Aggiungi una classe CSS a un elemento in risposta a un evento, come un clic.
let addClasse = document.getElementById("aggiungiClasse");
function addNewClass() {
  addClasse.classList.add("classeAggiunta");
}
addClasse.addEventListener("click", addNewClass);
//13.todolist

let todoBtn = document.getElementById("todoBtn");
function todolistAdd() {
  let todoInput = document.getElementById("todoInput").value;
  document.getElementById("todolist").innerHTML += "<li>" + todoInput + "</li>";
}
todoBtn.addEventListener("click", todolistAdd);

let CounterBtn = document.getElementById("CounterBtn");
let CounterValue = document.getElementById("CounterValue");
//-14. Contatore di click su un bottone:
function Counter() {
  CounterValue.innerHTML++;
}

CounterBtn.addEventListener("click", Counter);
//15. Cambia colore di sfondo al mouseout:
let outDiv = document.getElementById("outDiv");

function changeColorOut() {
  outDiv.style.backgroundColor = "blueviolet";
}

outDiv.addEventListener("mouseout", changeColorOut);

//16. Modifica immagine al passaggio del mouse su un'altra
let cambioImg = document.getElementById("cambioImg");
let x = 0;
function changeImg() {
  if (x == 0) {
    x = 1;
    cambioImg.src = "doge96.png";
  } else {
    x = 0;
    cambioImg.src = "poop.png";
  }
}

cambioImg.addEventListener("mouseover", changeImg);
//17. Menu a tendina

let menuBtn = document.getElementById("menuBtn");
let menu = document.getElementById("menu");

function menuToggle() {
  if (menu.style.display == "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

menuBtn.addEventListener("mouseover", menuToggle);
//19. Cambia testo con input:

let xx = document.getElementById("xx");

function valTextChange() {
  let tchange = document.getElementById("tchange").value;

  document.getElementById("val").innerHTML = tchange;
}

xx.addEventListener("click", valTextChange);

//20.Controllo visibilità con checkbox:
let checkDiv = document.getElementById("checkDiv");
let check = document.getElementById("check");
let checkSpan = document.getElementById("checkSpan");
function checkVisibility() {
  if (checkSpan.style.display == "none") {
    check.checked = false;
  } else {
    check.checked = true;
  }
}
function hideCheckSpan() {
  if (checkSpan.style.display == "flex") {
    checkSpan.style.display = "none";
  } else {
    checkSpan.style.display = "flex";
  }
  checkVisibility();
}
checkVisibility();
checkDiv.addEventListener("click", hideCheckSpan);
//Cambia stile con cambio testo input:
let colorDiv = document.getElementById("colorDiv");
let colorBtn = document.getElementById("colorBtn");

function changeColorInput() {
  colorDiv.style.background = document.getElementById("colorInput").value;
}
colorBtn.addEventListener("click", changeColorInput);
//22. Carosello di immagini:
let slides = document.getElementsByClassName("slide");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let molt = 0;
function changeSlidepre() {
  if (molt < 2) {
    molt++;
    let indexS = 110 * molt + "px";

    let translate = "translate(" + indexS + ", 0px)";

    for (let i = 0; i < slides.length; i++) {
      // Applichiamo la trasformazione a ciascun elemento "slide"
      slides[i].style.transform = translate;
    }
  }
  console.log(molt);
}

// Aggiungiamo un listener per l'evento click al pulsante "nextBtn"
prevBtn.addEventListener("click", changeSlidepre);

function changeSlidenext() {
  if (molt > -2) {
    molt--;
    let indexS = 110 * molt + "px";

    let translate = "translate(" + indexS + ", 0px)";

    for (let i = 0; i < slides.length; i++) {
      // Applichiamo la trasformazione a ciascun elemento "slide"
      slides[i].style.transform = translate;
    }
  }
  console.log(molt);
}
nextBtn.addEventListener("click", changeSlidenext);
