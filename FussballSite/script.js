var urlTeams = "https://api.football-data.org/v2/competitions/2002/teams";

function gen_tabelle() {

}

function gen_verrein() {
    fetch(urlTeams, {
            method: "GET",
            headers: {
                "x-auth-token": "97848eae87a54d3781c5100431aaa273"
            }
        })
        .then(response => response.json())
        .then(function(data) {
            let html = "";
            data.teams.forEach(element => {
                html += "<li>" + element.name + "</li>";
            });
            document.getElementById("request").innerHTML = html;
        })
}

function gen_spieler() {

}

function gen_stadien() {

}