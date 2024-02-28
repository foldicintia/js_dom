import { CIPOLISTA } from "./adat.js";
import { dives, felsorolasOsszeallit, kiiras, legdragabb, osszegzes } from "./fuggveny.js";



kiiras(CIPOLISTA)

/* HTML DOM-ba irjuk ki felsorolasba */
/* 1. Megfogjuk a html megfelelo elemet */
// const CIPOKELEM = document.getElementById("cipok")
const CIPOKELEM = document.querySelector("#cipok")
console.log(CIPOKELEM)

/* 2. Összeállítjuk a html kódot, és */
let txt = felsorolasOsszeallit(CIPOLISTA)

/* 3. Beletesszuk az elemet */
CIPOKELEM.innerHTML="<h3>Szép nap van!</h3>"
CIPOKELEM.innerHTML+= txt;
      


const TERMEKEK = document.querySelector("#dives")
let szoveg = dives(CIPOLISTA)
TERMEKEK.innerHTML+= szoveg;

const OSSZEGZES = document.querySelector("#osszegzes")
let ossz = osszegzes(CIPOLISTA)
OSSZEGZES.innerHTML += `<p>A cipők össz ára: ${ossz} ft</p>`


const LEGDRAGABBElem = document.querySelector("#legdragabb")
let legd = legdragabb(CIPOLISTA)
LEGDRAGABBElem.innerHTML+= `<p> A legdrágább termék: ${CIPOLISTA[legd].tipus} </p>`