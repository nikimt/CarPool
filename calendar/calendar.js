$(document).ready(function() {
    localStorage.setItem('offerTo', JSON.stringify(false));
    localStorage.setItem('requested', JSON.stringify(false));
    localStorage.setItem('dates', JSON.stringify(false));
    var today = new Date();
    var first = new Date(today.getFullYear(), today.getMonth(), 1);
    var total_days = new Date(today.getFullYear(), today.getMonth()+1, 0).getDate();
    var dates = []
    load_dates(today, first, total_days);

    var clear_inputs = function() {
    }

    $('.selectable')
        .popup({
            on: 'click',
            popup: '.special.popup',
            position: 'right center',
            onHide: clear_inputs()
        })

        .click(function() {
            var x = this.id;
            dates.push(x);
            localStorage.setItem('dates', JSON.stringify(dates));
            $('#namesList').text('');
            if (this.id == 'this-9'){
                $('#namesList').append("<div class='item'><div class='ui checked checkbox'><input type='checkbox'><label>Joanne Li</label></div></div><div class='item'><div class='ui checked checkbox'><input type='checkbox'><label>Jane Style</label></div></div>")

                $(':checkbox').change(function() {
                    var checkedAtLeastOne = false;
                    $('input[type="checkbox"]').each(function() {
                        if ($(this).is(":checked")) {
                            checkedAtLeastOne = true;
                        }
                    });
                    if (checkedAtLeastOne) {
                        $('#offer').show()
                        $('#disabledOffer').hide()
                    } else {
                        $('#offer').hide()
                        $('#disabledOffer').show()
                    }
                }); 
            }
            if (this.id == 'this-24'){
                $('#namesList').append("<div class='item'><div class='ui checked checkbox'><input type='checkbox'><label>Georgia Markus</label></div></div>")

                $(':checkbox').change(function() {
                    var checkedAtLeastOne = false;
                    $('input[type="checkbox"]').each(function() {
                        if ($(this).is(":checked")) {
                            checkedAtLeastOne = true;
                        }
                    });
                    if (checkedAtLeastOne) {
                        $('#offer').show()
                        $('#disabledOffer').hide()
                    } else {
                        $('#offer').hide()
                        $('#disabledOffer').show()
                    }
                }); 
            }
        })
    ;
    $('#this-9').append("<i class='big user icon'></i>")
    $('#this-24').append("<i class='big user icon'></i>")
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

function requestRide() {
    $('#me').show()
    $('#request').hide()
    $('#disabledRequest').show()
    localStorage.setItem('requested', JSON.stringify(true));
}

function cancelRide() {
    $('#me').hide()
    $('#request').show()
    $('#disabledRequest').hide()
}

function offerRide() {
    $('input[type="checkbox"]').each(function() {
        if ($(this).is(":checked")) {
            $(this).parent().remove();
            $('#offer').hide()
            $('#disabledOffer').show()
            localStorage.setItem('offerTo', JSON.stringify(true));
        }
    });
}