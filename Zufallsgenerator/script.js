function buttonClick() {
    let min = parseInt(document.getElementById("number1").value);
    let max = parseInt(document.getElementById("number2").value);
    let result;

    result = Math.round(Math.random() * (max - min)) + min;

    document.getElementById("result").innerHTML = result;

}