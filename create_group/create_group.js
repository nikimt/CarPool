$(document).ready(function() {
    // $('.ui.form')
    //     .form({
    //         fields: {
    //             "team-name": 'empty',
    //             "description": 'empty',
    //         }
    //     })

    $("#create-group-page .submit.button").click(function(evt) {
        var fields = $("#create-group-page .form").form('get values');
        var team = parse_form(fields);
        console.log(team);

        if (team) {
            add_to_local_storage(team);
            window.location.href = "../index.html";
        }
    });

    $("#create-group-page .general.reset.button").click(function(evt) {
        $("#create-group-page .form").form('reset');
    });
});

var parse_form = function(fields) {
    var team = {
        name: fields["team-name"],
        num_members: 1,
        extra: "unavailable"
    };

    var times = [];
    var days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

    for (var i = 0; i < days.length; i++) {
        var day = days[i].toLowerCase();

        if (fields["hour-start-" + day] != "" && fields["min-start-" + day] != ""
            && fields["hour-end-" + day] != "" && fields["min-end-" + day] != "") {
            var start_time = fields["hour-start-" + day] + ":" + fields["min-start-" + day] + fields["time-start-" + day];
            var end_time = fields["hour-end-" + day] + ":" + fields["min-end-" + day] + fields["time-end-" + day];
            times.push(days[i] + " " + start_time + "-" + end_time);
        }
    }

    team.times = times;

    if (team.name != "") {
        return team;
    }
}

var add_to_local_storage = function(team) {
    var current_teams = JSON.parse(localStorage.getItem('my-teams'));
    current_teams.push(team);
    localStorage.setItem('my-teams', JSON.stringify(current_teams));
}