$(document).ready(function() {
    var members_list = [
        { name: 'Jane Style', img_src: '../images/hedgehog.jpg' },
        { name: 'Cristie Clark', img_src: '../images/hedgehog4.jpg' },
        { name: 'Joanne Li', img_src: '../images/hedgehog5.jpg' },
        { name: 'Leslie Lemmelson', img_src: '../images/hedgehog6.jpg' },
        { name: 'Amy Lewis', img_src: '../images/hedgehog7.jpg' },
        { name: 'Jay Z.', img_src: '../images/hedgehog8.jpg' },
        { name: 'Adam Smith', img_src: '../images/hedgehog9.jpg' },
        { name: 'Jodie Walker', img_src: '../images/hedgehog10.jpg' },
        { name: 'Ellie Wright', img_src: '../images/hedgehog11.jpg' },
        { name: 'Georgia Markus', img_src: '../images/hedgehog12.jpg' },
        { name: 'Penelope Rose', img_src: '../images/hedgehog13.jpg' },
        { name: 'Tanya West', img_src: '../images/hedgehog14.jpg' },
        { name: 'Kim Stephens', img_src: '../images/hedgehog15.jpg' },
        { name: 'Karen Young', img_src: '../images/hedgehog16.jpg' },
        { name: 'Olga Rasmusen', img_src: '../images/hedgehog17.jpg' },
        { name: 'Clark Simpson', img_src: '../images/cat.jpg' }
    ];

    generate_cards(members_list);

    $('#search-bar').keyup(function(evt) {
        var search_val = $(this).val();
        console.log(search_val);
        var visible_members = get_visible_members(members_list, search_val);
        console.log(visible_members);
        update_cards(visible_members);
    });

});

var get_visible_members = function(members_list, search_val) {
    var visible_members = [];
    for (var i = 0; i < members_list.length; i++) {
        var member = members_list[i];
        if (member.name.toLowerCase().indexOf(search_val) != -1) {
            visible_members.push(member);
        }
    }
    return visible_members;
}

var update_cards = function(visible_members) {
    var cards = $('#members-page .ui.card');
    for (var i = 0; i < cards.length; i++) {
        var card_elt = $(cards[i]);
        var content = $(card_elt.children()[1]);
        var is_hide = true;
        for (var j = 0; j < visible_members.length; j++) {
            if (content.text() == visible_members[j].name) {
                is_hide = false;
            }
        }
        if (is_hide) {
            card_elt.hide();
        } else {
            card_elt.show();
        }

    }
}

var generate_cards = function(members_list) {
    var cards_html = "";
    for (var i = 0; i < members_list.length; i++) {
        cards_html += 
            "<div class='column'>" +
                "<div class='ui fluid card'>" +
                    "<div class='image'>" +
                        "<img src=" + members_list[i].img_src + ">" +
                    "</div>" +
                    "<div class='content'>" + 
                        "<div class='header'>" + members_list[i].name + "</div>" +
                    "</div>" +
                "</div>" +
            "</div>"
        ;
    }
    var menu_element = document.getElementById("members-list");
    menu_element.innerHTML = cards_html;
}