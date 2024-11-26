
let numbers = [1,2,3,4,5];

numbers.forEach(Cube)
numbers.forEach(Display)

function Double(element, index, array){
    array[index] = element * 2;
}

function Triple(element, index, array){
    array[index] = element * 3;
}

function Square(element, index, array){
    array[index] = Math.pow(element,2);
}

function Cube(element, index, array){
    array[index] = Math.pow(element,3);
}







let fruits = ["banana", "apple", "orange", "guava"]

fruits.forEach(capitalize)
fruits.forEach(Display)

function upperCase(element, index, array){
    array[index] = element.toUpperCase()
}


function lowerCase(element, index, array){
    array[index] = element.toLowerCase()
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1)
}


function Display(element){
    console.log(element)
}



export default Display