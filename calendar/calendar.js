$(document).ready(function() {
    var today = new Date();
    // var today = new Date(2016, 3, 17)
    var first = new Date(today.getFullYear(), today.getMonth(), 1);
    var total_days = new Date(today.getFullYear(), today.getMonth()+1, 0).getDate();
    load_dates(today, first, total_days);

    var clear_inputs = function() {
        console.log('clearing inputs');
        $('#ride-req-input').text('');
        $('#seat-offer-input').text('');
    }

    $('.selectable')
        .popup({
            on: 'click',
            popup: '.special.popup',
            position: 'right center',
            onHide: clear_inputs()
            // preserve: false,
            // closable: true
        })
    ;

    $('#key')
        .popup( {
            on: 'click',
            popup: $('#key-popup'),
        })
    ;

    $('#seat-offer-input').keypress(function (e) {
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

var load_dates = function(today, first, total_days) {
    var currentDay = 1;
    currentDay = load_first_row(today, first, currentDay);
    var row_html = "";

    var col = 0;
    while (currentDay <= total_days) {
        if (col == 0) {
            row_html += "<tr class='calendar-row'>";
            col += 1;
        }
        else if (col > 0 && col <= 7) {
            if (col == 2 || col == 3 || col == 6) {
                row_html += "<td class='selectable practice' "
            } else {
                row_html += "<td class='selectable' "
            }
            row_html += "id=this-" + currentDay + ">" +
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
    next_month_date = 1;
    if (col != 0) {
        for (j = col; j < 8; j++) {
            if (j == 2 || j == 3 || j == 6) {
                row_html += "<td class='selectable practice'>"
            } else {
                row_html += "<td class='selectable'>"
            }
            row_html += "<div class='last-month-date-number'>" + next_month_date + "</div>" +
                "</td>";
            next_month_date += 1;

        }
        row_html += "</tr>";
        $('#calendar_display').append(row_html);
    }
    
}

var load_first_row = function(today, first, currentDay) {
    var firstWeekday = first.getDay();

    var calendar_html = "<tr class='calendar-row'>";
    var last_month_date = 27;
    for (i = 0; i < firstWeekday; i++) {
        if (i == 1 || i == 2 || i == 5) {
            calendar_html += "<td class='selectable practice' "
        } else {
            calendar_html += "<td class='selectable' "
        }
        calendar_html += "id='prev-" + last_month_date + "'>" +
                            "<div class='last-month-date-number'>" + last_month_date + "</div>" +
                        "</td>";
        last_month_date += 1;
    }
    for (j = firstWeekday; j < 7; j++) {
        if (j == 1 || j == 2 || j == 5) {
            calendar_html += "<td class='selectable practice' "
        }
        else {
            calendar_html += "<td class='selectable' "
        }
        calendar_html += "id='this-" + currentDay + "'>" + currentDay + "</td>";
        currentDay += 1;
    }
    calendar_html += "</tr";
    $('#calendar_display').append(calendar_html);
    return currentDay;
}