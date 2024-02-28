/* írd ki a cipolista tipusait árát */

export function kiiras(lista) {
    for (let i = 0; i < lista.length; i++) {
      console.log(`A(z) ${lista[i].tipus} cipő ára: ${lista[i].ar} ft`);
      }
      }

export function felsorolasOsszeallit(lista){
    let txt = "<ul>";
    for (let i = 0; i < lista.length; i++) {
    txt+= `<li> A(z) ${lista[i].tipus} cipő ára: ${lista[i].ar} ft </li>`;
    }
    txt += "<ul>";

    console.log(txt)
    return txt
}


export function dives(lista){
    let szoveg = "<div id=dives>"
    for (let i = 0; i < lista.length; i++) {
        szoveg+= `<div class=termek><h3> ${lista[i].tipus} </h3> <p>${lista[i].szin}</p> <p>${lista[i].ar}</p></div>`;
    }
    szoveg += "</div>";

    console.log(szoveg)
    return szoveg
}

export function osszegzes(lista){
    let ossz = 0;
    for (let i = 0; i < lista.length; i++) {
        ossz += lista[i].ar;
    }
    console.log(ossz)
    return ossz
}

export function legdragabb(lista){
    let legdI = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].ar > lista[legdI].ar)
            legdI = i
    }
    console.log(`A legdrágább cipő indexe: ${legdI}`)
    return legdI
}