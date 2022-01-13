var urlTeams = "https://api.football-data.org/v2/competitions/2002/teams";
var urlStand = "http://api.football-data.org/v2/competitions/2002/standings";

function gen_table() {
    fetch(urlStand, {
            method: "GET",
            headers: {
                "x-auth-token": "97848eae87a54d3781c5100431aaa273"
            }
        })
        .then(response => response.json())
        .then(function(data) {
            let html = "";
            data.standings[0].table.forEach(element => {
                html += "<li> Platzierung: " + element.position + "<br> Verrein: " + element.team.name + "<br> Punkte: " + element.points + "<br> Torverhältnis: " + element.goalDifference + "</li>";
            });
            document.getElementById("request").innerHTML = html;

        })
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
                html += "<li><img src='" + element.crestUrl + "'> " + element.name + "</li>";
            });
            document.getElementById("request").innerHTML = html;

        })
}

function gen_contact() {
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
                html += "<li>" + element.shortName + "<br> Website: " + element.website + "<br> E-Mail: " + element.email + "<br> Nummer: " + element.phone + "</li>";
            });
            document.getElementById("request").innerHTML = html;

        })
}

function gen_stadien() {
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
                html += "<li>" + element.shortName + "<br> Stadion: " + element.venue + "<br> Adresse: " + element.address + "</li>";
            });
            document.getElementById("request").innerHTML = html;

        })
}