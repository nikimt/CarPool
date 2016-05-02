$(document).ready(function() {
    var members_list = load_members();

    generate_cards(members_list);
    initialize_modals();

    $('#search-bar').keyup(function(evt) {
        var search_val = $(this).val();
        var visible_members = get_visible_members(members_list, search_val);
        update_cards(visible_members);
    });

    $('#members-list .ui.card').click(function(evt) {
        var id = $(this).attr('id');
        id = id.slice('card-'.length, id.length);
        var modal_id = "modal-" + id;
        $('#' + modal_id).modal('show');
    });

});

var get_visible_members = function(members_list, search_val) {
    var visible_members = [];
    for (var i = 0; i < members_list.length; i++) {
        var member = members_list[i];
        if (member.name.toLowerCase().indexOf(search_val.toLowerCase()) != -1) {
            visible_members.push(member);
        }
    }
    return visible_members;
}

var update_cards = function(visible_members) {
    var columns = $('#members-list .column');
    for (var i = 0; i < columns.length; i++) {
        var column = $(columns[i]);
        var card_elt = $(column.children()[0]);
        var content = $(card_elt.children()[1]);
        var is_hide = true;
        for (var j = 0; j < visible_members.length; j++) {
            if (content.text() == visible_members[j].name) {
                is_hide = false;
                break;
            }
        }
        if (is_hide) {
            column.css("display", "none");
        } else {
            column.css("display", "");
        }

    }
}

var generate_cards = function(members_list) {
    var cards_html = "";
    var modal_html = "";
    for (var i = 0; i < members_list.length; i++) {
        cards_html += 
            "<div class='column'>" +
                "<div class='ui fluid link card' id='card-" + members_list[i].id + "'>" +
                    "<div class='image'>" +
                        "<img src=" + members_list[i].img_src + ">" +
                    "</div>" +
                    "<div class='content'>" + 
                        "<div class='header'>" + members_list[i].name + "</div>" +
                    "</div>" +
                "</div>" +
            "</div>"
        ;
        modal_html +=
            "<div class='ui modal members-modal' id='modal-" + members_list[i].id + "'>" +
                "<i class='close icon'></i>" +
                "<div class='header'>" + members_list[i].name + "</div>" +
                "<div class='image content'>" +
                    "<div class='image'>" +
                        "<img src=" + members_list[i].img_src + ">" +
                    "</div>" +
                    "<div class='description ui grid two columns'>" +
                        "<div class='column'>" +
                            "<h5 class='ui header'>Phone Number</h5>" +
                            "<p>" + members_list[i].phone_number + "</p>" +
                            "<h5 class='ui header'>Email Address</h5>" +
                            "<p>" + members_list[i].email_address + "</p>" +
                        "</div>" +
                        "<div class='column'>" +
                            "<h5 class='ui header'>Child's Name</h5>" +
                            "<p>" + members_list[i].child_name + "</p>" +
                            "<h5 class='ui header'>Home Address</h5>" +
                            "<p>" + members_list[i].home_address + "</p>" +
                        "</div>"
                    "</div>" +
                "</div>" + 
            "</div>"
        ;
        // console.log(modal_html);
    }
    cards_html += modal_html;
    var menu_element = document.getElementById("members-list");
    menu_element.innerHTML = cards_html;
}

var initialize_modals = function() {
    $('.ui.modal').modal();
}

var load_members = function () {
    return [
        {
            id: 1,
            name: 'Jane Style', 
            img_src: '../images/hedgehog.jpg' ,
            phone_number: '306-477-8834',
            email_address: 'janestyle@email.com',
            child_name: 'Larry Style',
            home_address: '123 Some Street, FL 12345'
        },
        {
            id: 2,
            name: 'Cristie Clark',
            img_src: '../images/hedgehog4.jpg',
            phone_number: '444-019-3378',
            email_address: 'cclark@mydomain.com',
            child_name: 'Marcus Clark',
            home_address: '123 Some Street, FL 12345'
        },
        {
            id: 3,
            name: 'Joanne Li',
            img_src: '../images/hedgehog5.jpg',
            phone_number: '431-761-6631',
            email_address: 'jli761@gmail.com',
            child_name: 'Herman Li',
            home_address: '4 Westbrook Lane, Miami, FL 12345'
        },
        {
            id: 4,
            name: 'Leslie Lemmelson',
            img_src: '../images/hedgehog6.jpg',
            phone_number: '444-299-7366',
            email_address: 'leslie@lemmelsonlabs.com',
            child_name: 'Harold Lemmelson',
            home_address: '123 Some Street, FL 12345'
        },
        {
            id: 5,
            name: 'Amy Lewis',
            img_src: '../images/hedgehog7.jpg',
            phone_number: '444-613-7546',
            email_address: 'iamamy@email.com',
            child_name: 'Abigail Lewis',
            home_address: '123 Some Street, FL 12345'
        },
        {
            id: 6,
            name: 'Jay Z.',
            img_src: '../images/hedgehog8.jpg',
            phone_number: '305-999-1200',
            email_address: 'jayz@boss.com',
            child_name: 'Blue Ivy Carter',
            home_address: '123 Some Street, FL 12345'
        },
        {
            id: 7,
            name: 'Adam Smith',
            img_src: '../images/hedgehog9.jpg',
            phone_number: '587-366-0240',
            email_address: 'atleastimnotjohn@generic.com',
            child_name: 'Ronald Smith',
            home_address: '123 Some Street, FL 12345'
        },
        {
            id: 8,
            name: 'Jodie Walker',
            img_src: '../images/hedgehog10.jpg',
            phone_number: '587-787-3209',
            email_address: 'jodiew2k16@email.com',
            child_name: 'Jamie Walker',
            home_address: '123 Some Street, FL 12345'
        },
        {
            id: 9,
            name: 'Elizabeth Wright',
            img_src: '../images/hedgehog11.jpg',
            phone_number: '587-335-9011',
            email_address: 'ewright@weright.com',
            child_name: 'Joe Wright',
            home_address: '123 Some Street, FL 12345'
        },
        {
            id: 10,
            name: 'Georgia Markus',
            img_src: '../images/hedgehog12.jpg',
            phone_number: '444-998-9870',
            email_address: 'georgia@florida.com',
            child_name: 'Virginia Markus',
            home_address: '123 Some Street, FL 12345'
        },
        {
            id: 11,
            name: 'Penelope Rose',
            img_src: '../images/hedgehog13.jpg',
            phone_number: '306-203-4487',
            email_address: 'penelope.rose@flowernames.com',
            child_name: 'Summer Rose',
            home_address: '123 Some Street, FL 12345'
        },
        {
            id: 12,
            name: 'Tanya West',
            img_src: '../images/hedgehog14.jpg',
            phone_number: '444-809-3267',
            email_address: 'tanyawest@cardinal.com',
            child_name: 'Kanye West',
            home_address: '123 Some Street, FL 12345'
        },
        {
            id: 13,
            name: 'Kim Stephens',
            img_src: '../images/hedgehog15.jpg',
            phone_number: '987-370-0909',
            email_address: 'kim@email.com',
            child_name: 'Tim Stephens',
            home_address: '123 Some Street, FL 12345'
        },
        {
            id: 14,
            name: 'Karen Young',
            img_src: '../images/hedgehog16.jpg',
            phone_number: '444-338-5570',
            email_address: 'karen@fountainofyouth.com',
            child_name: 'Wally Young',
            home_address: '123 Some Street, FL 12345'
        },
        {
            id: 15,
            name: 'Olga Rasmusen',
            img_src: '../images/hedgehog17.jpg',
            phone_number: '306-112-0956',
            email_address: 'olgathewitch@email.com',
            child_name: 'Steve Rasmusen',
            home_address: '123 Some Street, FL 12345'
        },
        {
            id: 16,
            name: 'Clark Simpson',
            img_src: '../images/cat.jpg' ,
            phone_number: '948-129-3094',
            email_address: 'iambetterthanbart@simpsons.com',
            child_name: 'Bart Simpson',
            home_address: '123 Some Street, FL 12345'
        }
    ];
}