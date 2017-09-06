const Player1 = 'X'

$(document).ready(function () {

    const grind = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
    $('.box').click(function(){
        $(this).html(Player1);
        
    });


}); // end document ready
