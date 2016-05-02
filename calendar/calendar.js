var dates = JSON.parse(sessionStorage.getItem('dates'));
if (dates === null) {
    var dates = [];
}
// var dates = [];
// sessionStorage.setItem('offerTo', JSON.stringify(false));

$(document).ready(function() {
    // sessionStorage.setItem('offerTo', JSON.stringify(false));
    // sessionStorage.setItem('dates', JSON.stringify(false));
    var today = new Date();
    var first = new Date(today.getFullYear(), today.getMonth(), 1);
    var total_days = new Date(today.getFullYear(), today.getMonth()+1, 0).getDate();
    load_dates(today, first, total_days);
    var offered_9 = JSON.parse(sessionStorage.getItem('offerTo9'));
    var offered_24 = JSON.parse(sessionStorage.getItem('offerTo24'));

    var clear_inputs = function() {
    }

    $('.selectable')
        // .popup({
        //     on: 'click',
        //     popup: '.special.popup',
        //     position: 'right center',
        //     onHide: clear_inputs()
        // })

        .click(function() {
            $('#namesList').text('');
            if (this.id == 'this-9'){
                // $('#popup-9').find('namesList').append("<div class='item'><div class='ui checked checkbox'><input type='checkbox'><label>Joanne Li</label></div></div><div class='item'><div class='ui checked checkbox'><input type='checkbox'><label>Jane Style</label></div></div>")
                // console.log('here!');
                $(':checkbox').change(function() {
                    var checkedAtLeastOne = false;
                    $('input[type="checkbox"]').each(function() {
                        if ($(this).is(":checked")) {
                            checkedAtLeastOne = true;
                        }
                    });
                    if (checkedAtLeastOne) {
                        $('#popup-9 > #offer').show()
                        $('#popup-9 > #disabledOffer').hide()
                    } else {
                        $('#popup-9 > #offer').hide()
                        $('#popup-9 > #disabledOffer').show()
                    }
                }); 
            }
            if (this.id == 'this-24'){
                // $('#namesList').append("<div class='item'><div class='ui checked checkbox'><input type='checkbox'><label>Georgia Markus</label></div></div>")

                $(':checkbox').change(function() {
                    var checkedAtLeastOne = false;
                    $('input[type="checkbox"]').each(function() {
                        if ($(this).is(":checked")) {
                            checkedAtLeastOne = true;
                        }
                    });
                    if (checkedAtLeastOne) {
                        $('#popup-24 > #offer').show()
                        $('#popup-24 > #disabledOffer').hide()
                    } else {
                        $('#popup-24 > #offer').hide()
                        $('#popup-24 > #disabledOffer').show()
                    }
                }); 
            }
        })
    ;
    $('#this-9').append("<i class='big user icon'></i>")
    $('#this-24').append("<i class='big user icon'></i>")

    // $(function() {
    //     $('#this-1').popup({
    //         on: 'click',
    //         popup: '.special.popup',
    //         position: 'right center',
    //         onHide: clear_inputs(),
    //     });
    //     $('#this-2').popup({
    //         on: 'click',
    //         popup: '.special.popup',
    //         position: 'right center',
    //         onHide: clear_inputs()
    //     });
    // });

    // $('.')

    for (i = 1; i <= 35; i++) {
        popup_html = 
                "<div class='ui special popup' id='popup-" + i + "'>" +
                    "The following people need rides: <br>" +
                    "<div class='ui list' >" +
                        "<div id='namesList'>" 
        if (i== 9 && !offered_9) {
            popup_html += "<div class='item'><div class='ui checked checkbox'><input type='checkbox'><label>Joanne Li</label></div></div><div class='item'><div class='ui checked checkbox'><input type='checkbox'><label>Jane Style</label></div></div>";
        }
        if (i == 24 && !offered_24) {
            popup_html += "<div class='item'><div class='ui checked checkbox'><input type='checkbox'><label>Georgia Markus</label></div></div>";
        }
        popup_html += "</div>" +
                        "<div class='item' id='me' style='display:none'> " +
                            "<div class='ui disabled checkbox'><input type='checkbox' disabled='disabled'><label>Karen Young (me)</label></div>" +
                            "<a href='#'class='remove' id='removeIcon' style='float:right' onclick='cancelRide(" + i + ")' ><i class='remove icon'></i></a>" +
                        "</div>" +
                    "</div>  " +
                    "<button class='ui button' id='request' onclick='requestRide(" + i + ")''>I need a ride</button>  " +
                    "<button class='ui disabled button' id='disabledRequest' style='display:none'>I need a ride</button>" +
                    "<button class='ui button' id='offer' onclick='offerRide(" + i + ")' style='display:none' >Offer rides to selected parents</button> " +
                    "<button class='ui disabled button' id='disabledOffer'>Offer rides to selected parents</button> " +
                "</div>"
        $('#calendar-page').append(popup_html);
        name = '#this-' + i;
        popup_name = '#popup-' + i;
        $(name).popup({
            on: 'click',
            popup: $(popup_name),
            position: 'right center',
            onHide: clear_inputs(),
        });
    }

    var display_dates = JSON.parse(sessionStorage.getItem('dates'));
    console.log(display_dates);

    var uniqueNames = [];
        $.each(display_dates, function(i, el){
            if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
        });

    var arrayLength = uniqueNames.length;
    for (var i = 0; i < arrayLength; i++) {
        popup = '#popup-' + uniqueNames[i];
        $(popup).find('#me').show();
        $(popup).find('#request').hide();
        $(popup).find('#disabledRequest').show();
    }
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
                row_html += "<td class='selectable practice' "
            } else {
                row_html += "<td class='selectable' "
            }
            row_html += "id=this-" + currentDay + ">" +
                        "<div class='last-month-date-number'>" + next_month_date + "</div>" +
                        "</td>";
            next_month_date += 1;
            currentDay += 1;
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

function requestRide(n) {
    popup = '#popup-' + n;
    $(popup).find('#me').show();
    $(popup).find('#request').hide();
    $(popup).find('#disabledRequest').show();
    dates.push(n);
    sessionStorage.setItem('dates', JSON.stringify(dates));
}

function cancelRide(n) {
    popup = '#popup-' + n;
    $(popup).find('#me').hide();
    $(popup).find('#request').show();
    $(popup).find('#disabledRequest').hide();
    for(var i = dates.length - 1; i >= 0; i--) {
        if(dates[i] === n) {
           dates.splice(i, 1);
        }
    }
    sessionStorage.setItem('dates', JSON.stringify(dates));
}

function offerRide(n) {
    popup = '#popup-' + n;
    $('input[type="checkbox"]').each(function() {
        if ($(this).is(":checked")) {
            $(this).parent().remove();
            $(popup).find('#offer').hide();
            $(popup).find('#disabledOffer').show();
            if (n == 9) {
                sessionStorage.setItem('offerTo9', JSON.stringify(true));
            } else if (n == 24) {
                sessionStorage.setItem('offerTo24', JSON.stringify(true));
            }
            
        }
    });
}