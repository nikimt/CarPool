$(document).ready(function() {
    // var current_teams = JSON.parse(localStorage.getItem('teams'));
    // if (!current_teams) {
        var joinOB = JSON.parse(localStorage.getItem('joinedOB'));
        if (joinOB != true) {
            teams.push(OBTeam);
        }
        var current_teams = teams;
        localStorage.setItem('teams', JSON.stringify(current_teams));
    // }
    generate_team_cards(current_teams);

    $('#search-bar').keyup(function(evt) {
        var search_val = $(this).val();
        var visible_teams = get_visible_teams(current_teams, search_val);
        update_cards(visible_teams);
    })
});

var get_visible_teams = function(teams_list, search_val) {
    var visible_teams = [];
    for (var i = 0; i < teams_list.length; i++) {
        var team = teams_list[i];
        if (team.name.toLowerCase().indexOf(search_val.toLowerCase()) != -1) {
            visible_teams.push(team);
        }
    }
    return visible_teams;
}

var update_cards = function(visible_teams) {
    var cards = $('#team-list .card');
    for (var i = 0; i < cards.length; i++) {
        var card = $(cards[i]);
        var content = $($(card.children()[0]).children()[0]); 
        var is_hide = true;
        for (var j = 0; j < visible_teams.length; j++) {
            if (content.text() == visible_teams[j].name) {
                is_hide = false;
                break;
            }
        }
        if (is_hide) {
            card.css("display", "none");
        } else {
            card.css("display", "");
        }
    }
}

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
                    // "<div class='ui button'>" +
                    //     "<i class='unhide icon'></i>" +
                    //     "View" +
                    // "</div>" +
                    "<div class='ui button" + teams[i].extra + "'>" +
                        "<i class='add icon'></i>" +
                        "Join" +
                    "</div>" +
                "</div>" +
            "</div>"
        ;
    }
    var menu_element = document.getElementById("team-list");
    menu_element.innerHTML = cards_html;

    $('.button').on("click", function() {
        alert("You will receive a notification when your request is approved.");
    })

    $('.addOB').on("click", function() {
        alert("Your request to join the Orange Bruins Baseball Team has been approved.");
        $(this).parent().parent().hide();
        localStorage.setItem('joinedOB', JSON.stringify(true));
    });
}

var teams = [
    {
        name: "The Yellow Sox Baseball",
        num_members: 26,
        times: ["Tues 5:00PM-7:00PM", "Thurs 5:00PM-7:00PM"],
        extra: ""
    },
    {
        name: "The Pink Socks Baseball",
        num_members: 25,
        times: ["Mon 3:00PM-4:00PM", "Tues 3:00PM-5:00PM", "Thurs 4:00PM-5:00PM"],
        extra: ""
    },
    {
        name: "Sunflower Elementary Afterschool Baseball",
        num_members: 30,
        times: ["Mon 4:00PM-5:00PM", "Wed 4:00PM-5:00PM"],
        extra: ""
    }
];

var OBTeam = 
    {
        name: "Orange Bruins Baseball Team",
        num_members: 23,
        times: ["Tues 5:00PM-7:00PM", "Thurs 5:00PM-7:00PM"],
        extra: " addOB"
    };