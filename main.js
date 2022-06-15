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
let div = document.createElement('div');
div.textContent = dict[random]
let intento = document.getElementById('intento');
console.log(intento);
if(dict.includes(intento)){
  console.log('Esta en el array');
}
function logReset(event) {
  log.textContent = `button2: ${event.timeStamp}`;
}
