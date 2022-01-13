function generate() {
    var height = parseInt(document.getElementById("height").value);
    var weight = parseInt(document.getElementById("weight").value);
    if (weight == 0) {
        alert("Durch Null kann man nicht dividieren! Bitte geben Sie ein gültiges Gewicht ein!")
    }
    back = ((height * 1.43) / weight) - 3.4;
    out = "";

    ausgabe();
}

function ausgabe() {
    console.log(back);
    if (back < 0) {
        var i = 0;
        out += "Negativ <br>";
        for (i = 0; i > back; i = i - 1) {
            out += i + ", ";
        }
        out += " " + i;
    } else if (back > 0) {
        var i = 0;
        out += "Positiv <br>";
        for (i; i < back; i++) {
            out += i + ", ";
        }
        out += " " + i;
    } else if (back = 0) {
        out += "Null <br>";
        out += "0";
    }

    document.getElementById("output").innerHTML = out;
}