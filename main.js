let dict = [
  'gatos',
  'papas',
  'fuego',
  'huevo',
  'color',
  'casas',
  'arbol',
  'nueve',
  'zorro',
  'remar',
  'locro',
  'jamon',
  'feliz',
  'cinco',
  'tonto',
  'cuero',
  'volar',
  'vuelo',
  'avion',
  'genio',
  'pibes'
];

let random = Math.floor(Math.random() * dict.length);
let intento = document.getElementById('intento').value;


function imprimir(e) {
  e.preventDefault();
  let intento = e.target.intento.value;
  if(dict.includes(intento)){
    console.log(e.target.intento.value);
    for (let i = 0; i < 5; i++) {
      let div = document.createElement('div');
      div.className = "letras";
      div.innerHTML = intento[i];
      document.getElementById('container').append(div);
    }
  }
  else {
    console.log('no esta en el array')
  }
}
//
// function nextFocus(iF, iS) {
//   document.getElementById(iF).addEventListener('keyleft', function(event)
// )
// }
