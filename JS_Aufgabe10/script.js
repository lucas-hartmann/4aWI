let config = {

    offset: 0,

    month: [
        { name: "Jan", day: 31 },
        { name: "Feb", day: 28 },
        { name: "Mar", day: 31 },
        { name: "Apr", day: 30 },
        { name: "Mai", day: 31 },
        { name: "Jun", day: 30 },
        { name: "Jul", day: 31 },
        { name: "Aug", day: 31 },
        { name: "Sep", day: 30 },
        { name: "Okt", day: 31 },
        { name: "Nov", day: 30 },
        { name: "Dez", day: 31 }
    ],

}

printMonth();

function weekDay() {
    console.log("");
    console.log(" | MO | DI | MI | DO | FR | SA | SO | ");
}


function printMonth() {
    for (i = 0; i < config.month.length; i++) {
        weekDay();
        let day = config.month[i].day;
        let row = " | ";
        for (j = 1; j <= day; j++) {
            if (j % 7 == 0) {
                console.log(row)
                row = (" | ")
            }
            else {
                row += (j + " | ")
            }
        }
    }
}

