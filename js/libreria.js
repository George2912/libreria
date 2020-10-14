const my = {}

my.each = (array, callback) => {
    for( var i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

my.filter = (array, callback) => {
    var newArray = [];
    for( var i = 0; i < array.length; i++) {
        if(callback(array[i]) === true) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

my.map = (array, callback) => {
    var newArray= [];
    for( var i = 0; i < array.length; i++) {
        newArray.push(callback[i])
    }
    return newArray
}


my.find = (array, callback) => {
    for( var i = 0; i < array.length; i++) {
        if(callback(array[i]) === true) {
            return array[i]
        }
    }
    
}

my.findIndex = (array, callback) => {
    for( var i = 0; i < array.length; i++) {
        if(callback(array[i]) === true) {
            return i
        }
    }
}
// no funciono
my.contains = (array, callback) => {
    for( var i = 0; i < array.length; i++) {
        if(callback[i] === array[i]) {
            return true
        }else{
            return false
        }
    }
}

my.pluck = (array, callback) => {
    var newArray= [];
    for( var i = 0; i < array.length; i++) {
        newArray.push(callback)
    }
    return newArray
}
//no funciono
// my.without = (element, array) => {
//     var index = array.indexOf(element);
//     if(index > -1) {
//     array.splice(index, 1);
//     } else {
//     alerts('no contiene el elemento')
//     }
// }
export default my;



// if(callback[i] === array[i]) {
//     console.log(callback[i])
//     return i 
// }else if (i > 1) {
//     return true
// }else { return false
// }
// }
// }