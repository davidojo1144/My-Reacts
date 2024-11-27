// .filter() creates new array by filtering out elements


const numbers = [1,2,3,4,5,6,7,8,9]
const age = [12,23,45,65,10,17,3,90,18,28,18,56]
const words = ["apple","orange","pineapple", "guava","kiwi"]



let evenNums = numbers.filter(isEven)
console.log(evenNums)

let oddNums = numbers.filter(isOdd)
console.log(oddNums)

let adult = age.filter(isAdult)
console.log(adult)

let child = age.filter(isChild)
console.log(child)

let shortFruit = words.filter(isShort)
console.log(shortFruit)

let longFruit = words.filter(isLong)
console.log(longFruit)




function isEven(element){
    return element % 2 === 0;
}


function isOdd(element){
    return element % 2 !== 0;
}


function isAdult(element){
    return element >= 18;
}


function isChild(element){
    return element < 18;
}


function isShort(element){
    return element.length <= 4
}


function isLong(element){
    return element.length > 4
}






export default isEven