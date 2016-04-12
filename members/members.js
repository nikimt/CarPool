$(document).ready(function() {
    var members_list = [
        { name: 'Jane Style', img_src: '../images/hedgehog.jpg' },
        { name: 'Cristie Clark', img_src: '../images/hedgehog.jpg' },
        { name: 'Joanne Li', img_src: '../images/hedgehog.jpg' },
        { name: 'Leslie Lemmelson', img_src: '../images/hedgehog.jpg' },
        { name: 'Amy Lewis', img_src: '../images/hedgehog.jpg' },
        { name: 'Jay Z.', img_src: '../images/hedgehog.jpg' },
        { name: 'Adam Smith', img_src: '../images/hedgehog.jpg' },
        { name: 'Jodie Walker', img_src: '../images/hedgehog.jpg' },
        { name: 'Ellie Wright', img_src: '../images/hedgehog.jpg' },
        { name: 'Georgia Markus', img_src: '../images/hedgehog.jpg' },
        { name: 'Penelope Rose', img_src: '../images/hedgehog.jpg' },
        { name: 'Tanya West', img_src: '../images/hedgehog.jpg' },
        { name: 'Kim Stephens', img_src: '../images/hedgehog.jpg' },
        { name: 'Karen Young', img_src: '../images/hedgehog.jpg' },
        { name: 'Olga Rasmusen', img_src: '../images/hedgehog.jpg' },
        { name: 'Clark Simpson', img_src: '../images/hedgehog.jpg' }
    ];

    generate_cards(members_list);
});

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