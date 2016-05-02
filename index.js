$(document).ready(function() {
    var current_teams = JSON.parse(localStorage.getItem('my-teams'));
    // var joinOB = JSON.parse(localStorage.getItem('joinedOB'));
    // if (joinOB) {
    //     teams.push(OBTeam);
    // }
    if (!current_teams) {
        var current_teams = teams;
        localStorage.setItem('my-teams', JSON.stringify(current_teams));
    }
    generate_team_cards(current_teams);

    $('.unavailable').on("click", function() {
        alert("Sorry, this page is unavailable right now.");
    });

    $('.teamOB').on("click", function() {
        window.location.href = "./overview/overview.html";
    })
});

var generate_team_cards = function(teams) {
    var cards_html = "";
    for (var i = 0; i < teams.length; i ++) {
        var member_word = " member";
        if (teams[i].num_members != 1) {
            member_word = " members";
        }

        var times_html = ""
        for (var j = 0; j < teams[i].times.length; j++) {
            times_html += "<p>" + teams[i].times[j] + "</p>"
        }

        cards_html +=
            "<div class='card'>" + 
                "<div class='content'>" +
                    "<div class='header'>" + teams[i].name + "</div>" +
                    "<div class='meta'>" +
                        "<i class='users icon'></i>" +
                        teams[i].num_members + member_word +
                    "</div>" +
                    "<div class='description'>" + times_html + "</div>" +
                "</div>" +
                "<div class='ui bottom attached buttons'>" +
                    "<div class='ui button " + teams[i].extra + "'>" +
                        "<i class='unhide icon'></i>" +
                        "View" +
                    "</div>" +
                "</div>" +
            "</div>"
        ;
    }
    var menu_element = document.getElementById("team-list");
    menu_element.innerHTML = cards_html;
}

var teams = [
    {
        name: "The Yellow Sox Baseball",
        num_members: 26,
        times: ["Tues 5:00PM-7:00PM", "Thurs 5:00PM-7:00PM"],
        extra: "unavailable"
    }
];
