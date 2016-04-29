$(document).ready(function() {
    var today = new Date();
    var first = new Date(today.getFullYear(), today.getMonth(), 1);
    var total_days = new Date(today.getFullYear(), today.getMonth()+1, 0).getDate();
    load_dates(first, total_days);

    var clear_inputs = function() {
        console.log('clearing inputs');
        $('#popup').text('');
    }

    $('.selectable')
        
        .popup({
            on: 'click',
            popup: '.special.popup',
            position: 'right center',
            onHide: clear_inputs()
        })
        .click(function() {
            $('#popup').text('');
            if (this.id == 'this-4'){
                $('#popup').append("<div id='driving'> Orange Bruins Baseball Practice: You are driving Herman Li, son of Joanne Li. </div><br><div id='driving'> Orange Bruins Baseball Practice: You are driving Larry Style, son of Jane Style. </div>")
            }
            if (this.id == 'this-11'){
                $('#popup').append("<div id='request'> Orange Bruins Baseball Practice: Your request for a ride is pending. </div>")
            }
            if (this.id == 'this-18'){
                $('#popup').append("<div id='other'> Orange Bruins Baseball Practice: Cristie Clark is driving your child. </div>")
            }
        })
    ;


    $('#this-4').append("<div id='driving'>You are driving Herman Li.</div> <div id='driving'>You are driving Tommy Lee.</div>")
    $('#this-11').append("<div id='request'>Your request for a ride is pending. </div>")
    $('#this-18').append("<div id='other'>Cristie Clark is driving your child.</div>")

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
            // if (currentDay%7==4){
            //     var thisday = '#this-' + currentDay;
            //     console.log(thisday);
            //     console.log($(thisday));
            //     console.log($('#this-4'));
            //     var selectedday = $(thisday);
            //     day = '#this-'+currentDay.toString();
            //     $('#this-4').css("background-color", "#EDF4F7");
            //     $('#this-' + currentDay.toString()).css("background-color", "#EDF4F7");
            //     console.log($('#this-4').css("background-color"));
            // }
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