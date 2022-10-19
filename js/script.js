
'use strict';

let pojistenci = [];

const addPojistenec = (e) => {
  e.preventDefault();

  const pojistenec = new Pojistenec(
    document.getElementById('jmeno').value,
    document.getElementById('prijmeni').value,
    document.getElementById('vek').value,
    document.getElementById('telefon').value
  )
  pridejPojistenceDoTabulky(pojistenec);
  pojistenci.push(pojistenec);
  document.forms[0].reset();
}

localStorage.setItem('newPojistenec', JSON.stringify(pojistenci));

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('btn-ulozit');
  button.addEventListener('click', addPojistenec);
});



const pridejPojistenceDoTabulky = (pojistenec) => {

  let radek = document.createElement('tr');
  let bunkaJmenoPrijmeni = document.createElement('td');
  bunkaJmenoPrijmeni.textContent = pojistenec.vratCeleJmeno();
  radek.appendChild(bunkaJmenoPrijmeni);

  let bunkaTelefon = document.createElement('td');
  bunkaTelefon.textContent = pojistenec.telefon;
  radek.appendChild(bunkaTelefon);

  let bunkaVek = document.createElement('td');
  bunkaVek.textContent = pojistenec.vek;
  radek.appendChild(bunkaVek);

  let table = document.getElementById('table');
  table.appendChild(radek);
}



