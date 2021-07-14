const fetch = require('node-fetch');
const fs = require('fs');

filePath = process.argv[2];

let names = fs.readFileSync('./names.txt', 'utf-8')
names = names.split('\r\n').join(', '); 
console.log("List: ", names);

//  fetch('https://pokeapi.co/api/v2/pokemon/charizard')
//  .then(response => {
//      return response.json();
//  })
//  .then(response => {
//      console.log(response.name);
//      for (let index = 0; index < response.types.length; index++) {
//          let allTypes = response.types[index].type.name;
//          console.log(allTypes);
//      }
// })

function pullTypes (list) {
   return new Promise((resolve, reject) => {})
for (let i = 0; i < names.length; i++) {
   fetch('https://pokeapi.co/api/v2/pokemon/charizard')
   .then(response => response.json())
   .then(poke => {
       let pokeTypes = '';
       let numofTypes = 0;
       for (let index = 0; index < poke.types.length; index++) {
           pokeTypes += poke.types[index].type.name + ' ';
           numofTypes += 1;
       }
       if (numofTypes > 1) {
           pokeTypes = pokeTypes.split(' ').join(', ').slice(0, pokeTypes.length) + '.';
       } else {
           pokeTypes = pokeTypes.slice(0, pokeTypes.length - 1) + '.';
       }
       console.log(poke.name + ': ' + pokeTypes);
   })
   .catch(error => console.log(Error + ' is not a valid pokemon name'));
 }
}
