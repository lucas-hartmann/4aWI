
function generate_password() {

    var length = parseInt(document.getElementById("length").value);

    let settings = {
        special_on: 1,
        number_on: 1,
        uppercase_on: 1,
        lowercase_on: 1
    }

    let symbols = {
        characters: 'abcdefghijklmnopqrstuvwxyz',
        special: '|<>#+*~-_!?§$%&/()=@',
        numbers: '0123456789'
    }

    if (special_characters.checked) {
        settings.special_on = 1;
    }
    else
        settings.special_on = 0;

    if (number_characters.checked) {
        settings.number_on = 1;
    }
    else
        settings.number_on = 0;

    if (upper_characters.checked) {
        settings.uppercase_on = 1;
    }
    else
        settings.uppercase_on = 0;

    if (low_characters.checked) {
        settings.lowercase_on = 1;
    }
    else
        settings.lowercase_on = 0;

    let result = '';

    if (settings.special_on == 1)
        for (var i = 0; i < Math.ceil(length / 8); i++)
            result += symbols.special;

    if (settings.number_on == 1)
        for (var i = 0; i < Math.ceil(length / 5); i++)
            result += symbols.numbers;

    if (settings.uppercase_on == 1)
        for (var i = 0; i < Math.ceil(length / 8); i++)
            result += symbols.characters.toUpperCase();

    if (settings.lowercase_on == 1)
        for (var i = 0; i < Math.ceil(length / 8); i++)
            result += symbols.characters.toLowerCase();

    result = result.shuffle().slice(0, length);
    $('#pw_output').val(result).select();

}

// jQuery Funktion zum mischen des Strings
String.prototype.shuffle = function () {
    var chars = this.split("");
    var length = chars.length;

    for (var i = length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = chars[i];
        chars[i] = chars[j];
        chars[j] = tmp;
    }
    return chars.join("");
}



