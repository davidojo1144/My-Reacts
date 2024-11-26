
let numbers = [1,2,3,4,5];

numbers.forEach(Double)
numbers.forEach(Triple)
numbers.forEach(Display)


function Double(element, index, array){
    array[index] = element * 2;
}

function Triple(element, index, array){
    array[index] = element * 3;
}

function Display(element){
    console.log(element)
}



export default Display