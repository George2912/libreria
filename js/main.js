import my from './libreria.js'

var ages = [9, 4, 1, 4, 26, 21, 38, 15];

const foods = [
    {
        principal: 'tacos',
        dessert: 'galletas',
    },
    {
        principal: 'sushi',
        dessert: 'helado',
    },
    {
        principal: 'pizza',
        dessert: 'pastel',
    },
];
// El for each llama a una función una vez para cada elemento de una matriz, en orden.
my.each(ages, (element) => {
    // console.log(element)
})

// El filter crea una matriz llena de todos los elementos
// de la matriz que pasan una prueba (proporcionada como función).
var adult = my.filter(ages, age => age >= 18 ); 
// console.log(adult)


// El map crea una nueva matriz con el resultado de llamar a una 
// función para cada elemento de la matriz.
var desserts = my.map(foods, food => food.dessert);
// console.log(desserts)

// El find devuelve el valor del primer elemento de una matriz
// que pasa una prueba (proporcionado como función).
var firstAdult = my.find(ages, age => age >= 18);
// console.log(firstAdult)

// El findIndex devuelve el índice del primer elemento de una matriz
//  que pasa una prueba (proporcionado como función).
var adultIndex = my.findIndex(ages, age => age >= 38);
// console.log(adultIndex)

// El contains Devuelve verdadero si el valor está presente en la lista.
var contains = my.contains(ages, age => age = 38);
    // console.log(contains)

// Una versión conveniente de lo que quizás sea el caso de uso más común para map
// extraer una lista de valores de propiedad.
var principals = my.pluck(foods, food => food.principal);
console.log(principals)


//Devuelve una copia de la matriz con todas las instancias de los valores eliminados.
// var erasedAges = my.without(ages, age => age[2])
// console.log(erasedAges)