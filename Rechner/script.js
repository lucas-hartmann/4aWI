function buttonClick() {
    let num1 = parseInt(document.getElementById("number1").value);
    let num2 = parseInt(document.getElementById("number2").value);
    let op = document.getElementById("operation").value;
    let result = 0;

    if (op == "add") {
        result = num1 + num2;
    }
    else if (op == "neg") {
        result = num1 - num2;
    }
    else if (op == "multi") {
        result = num1 * num2;
    }
    else if (op == "div") {
        if (num2 == 0) {
            document.getElementById("fehler").innerHTML = "Erste Klasse Volksschule, division durch 0 ist verrrrrrrboten!!";
        }
        result = num1 / num2;
    }

    document.getElementById("result").innerHTML = result;

}