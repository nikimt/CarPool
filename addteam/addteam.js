$(document).ready(function() {
    var current_teams = JSON.parse(localStorage.getItem('teams'));
    if (!current_teams) {
        current_teams = teams;
        localStorage.setItem('teams', JSON.stringify(current_teams));
    }
    generate_team_cards(current_teams);
});

var generate_team_cards = function(teams) {
    var cards_html = "";
    for (var i = 0; i < teams.length; i ++) {
        var member_word = "member";
        if (teams[i].num_members != 1) {
            member_word = "members";
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
                    "<div class='ui button'>" +
                        "<i class='unhide icon'></i>" +
                        "View" +
                    "</div>" +
                    "<div class='ui button'>" +
                        "<i class='add icon'></i>" +
                        "Join" +
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
        times: ["Tues 5:00PM-7:00PM", "Thurs 5:00PM-7:00PM"]
    },
    {
        name: "Orange Bruins Baseball Team",
        num_members: 23,
        times: ["Tues 5:00PM-7:00PM", "Thurs 5:00PM-7:00PM"]
    },
    {
        name: "The Pink Socks Baseball",
        num_members: 25,
        times: ["Mon 3:00PM-4:00PM", "Tues 3:00PM-5:00PM", "Thurs 4:00PM-5:00PM"]
    },
    {
        name: "Sunflower Elementary Afterschool Baseball",
        num_members: 30,
        times: ["Mon 4:00PM-5:00PM", "Wed 4:00PM-5:00PM"]
    }
];