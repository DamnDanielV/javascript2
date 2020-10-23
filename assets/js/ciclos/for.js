const heroes = ['Batman', 'Superman', 'Doctor Strange', 'Star Lord'];

console.log('===for tradicional===');
for (let index = 0; index < heroes.length; index++) {
    console.log(heroes[index]);
}

console.log('===for in===');

for (let i in heroes) {
    console.log(heroes[i]);
}

console.log('===for of===');
// es utilizado para obtener referencias a valores de objetos o arreglos de manera mas sencilla
for (let heroe of heroes) {
    console.log(heroe);
}
