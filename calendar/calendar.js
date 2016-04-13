$(document).ready(function() {
    var today = new Date();
    var first = new Date(today.getFullYear(), today.getMonth(), 1);
    console.log(first.getDay());
    console.log(today.getDate());
    console.log(today.getDay());
    load_dates(first);
});

var load_dates = function(first) {
    var firstWeekday = first.getDay();
    calendar_html = "<tr class='calendar-row'>";
    for (i = 0; i < firstWeekday; i++) {
        calendar_html += "<td class='selectable'>" +
            "<a href='#'>1</a>" +
        "</td>" +
    }


        "<td class='selectable'>" +
            "<a href='#'>1</a>" +
        "</td>" +
        "<td class='selectable'>" +
            "<a href='#'>2</a>" +
        "</td>" +
        "<td class='selectable'>" +
            "<a href='#'>3</a>" +
        "</td>" +
        "<td class='selectable'>" +
            "<a href='#'>4</a>" +
        "</td>" +
        "<td class='selectable'>" +
            "<a href='#'>5</a>" +
        "</td>" +
        "<td class='selectable'>" +
            "<a href='#'>6</a>" +
        "</td>" +
        "<td class='selectable'>" +
            "<a href='#'>7</a>" +
        "</td>" +

    calendar_html += "</tr>";
    $('#calendar_display').append(calendar_html);
}