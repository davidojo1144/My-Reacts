
// function displayConsole(result){
//     console.log(result)
// }

function sum(callBack, number1, number2){
    let result = number1 + number2;
    callBack(result)
}

function  DisplayPage(result){
    document.getElementById("myH1").textContent = result;
}

sum(DisplayPage, 40,50)


export default DisplayPage