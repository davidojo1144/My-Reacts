
// function displayConsole(result){
//     console.log(result)
// }

function Sum(callback, number1, number2){
    let result = number1 + number2;
    callback(result)
}

function  DisplayPage(result){
    document.getElementById("myH1").textContent = result;
}

Sum(DisplayPage, 40,50)


export default DisplayPage