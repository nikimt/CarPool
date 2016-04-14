$(document).ready(function() {
    var today = new Date();
    var first = new Date(today.getFullYear(), today.getMonth(), 1);
    var total_days = new Date(today.getFullYear(), today.getMonth()+1, 0).getDate();
    load_dates(first, total_days);

    $('.selectable')
        .popup({
            on: 'click',
            popup: '.special.popup',
            position: 'right center'
        })
    ;

    $('#key')
        .popup( {
            on: 'click',
            popup: $('#key-popup'),
        })
    ;

    $('#ride-req-input').keypress(function (e) {
        var key = e.which;
        if(key == 13)  // the enter key code
        {
            $("#tohide").show();
            // $('#ride-req-input').blur();
        }
    });

    $('#this-4').append("<i class='big user icon'></i>")
    $('#this-4').append("<i class='big shipping icon'></i>")
    $('#this-15').append("<i class='big user icon'></i>")
    $('#this-18').append("<i class='big shipping icon'></i>")
});

var load_dates = function(first, total_days) {
    var currentDay = 1;
    currentDay = load_first_row(first, currentDay);
    var row_html = "";

    var col = 0;
    while (currentDay <= total_days) {
        if (col == 0) {
            row_html += "<tr class='calendar-row'>";
            col += 1;
        }
        else if (col > 0 && col <= 7) {
            row_html +=
            "<td class='selectable' id=this-" + currentDay + ">" +
                "<div class='date-number'>" + currentDay + "</div" +
            "</td>";
            currentDay += 1;
            col += 1;
        }
        if (col == 8) {
            row_html += "</tr";
            col = 0;
            $('#calendar_display').append(row_html);
            row_html = "";
        }
    }
    if (col != 0) {
        for (j = col; j < 7; j++) {
            row_html +=
             "<td class='selectable'>" +
            "</td>";
        }
        row_html += "</tr>";
        $('#calendar_display').append(row_html);
    }
    
}

var load_first_row = function(first, currentDay) {
    var firstWeekday = first.getDay();

    var calendar_html = "<tr class='calendar-row'>";
    var last_month_date = 27;
    for (i = 0; i < firstWeekday; i++) {
        calendar_html +=
        "<td class='selectable' id='prev-" + last_month_date + "'>" +
            "<div class='last-month-date-number'>" + last_month_date + "</div>" +
        "</td>";
        last_month_date += 1;
    }
    for (j = firstWeekday; j < 7; j++) {
        calendar_html +=
         "<td class='selectable' id='this-" + currentDay + "'>" +
            currentDay +
        "</td>";
        currentDay += 1;
    }
    calendar_html += "</tr";
    $('#calendar_display').append(calendar_html);
    return currentDay;
}