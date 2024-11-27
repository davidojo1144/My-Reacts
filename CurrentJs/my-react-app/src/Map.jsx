

// A map() accept a callback and applies that function
// to each element of an array, then return a new array




const number =[1,2,3,4,5,6]
const date = ["2024-24-6", "1990-30-8", "2025-28-12"]
const digits = ["5,000", "2,000", "10,000"]
const myNumbers = ["43-2-67-9"]




const squares = number.map(Square)
console.log(squares)

const cubes = number.map(Cube)
console.log(cubes)

const dateReset = date.map(dateFormat)
console.log(dateReset)

const digitChange = digits.map(splitDigits)
console.log(digitChange)

const nums = myNumbers.map(splitNumbers)
console.log(nums)




function Square(element){
    return Math.pow(element,2);
}


function Cube(element){
    return Math.pow(element,3);
}

function dateFormat(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`

}



function splitDigits(element){
    const parts = element.split(",");
    return `${parts[1]}/${parts[0]}`
}

function splitNumbers(element){
    const parts = element.split("-")
    return `${parts[2]}/${parts[1]}/${parts[3]}/${parts[0]}`
}





export default Square