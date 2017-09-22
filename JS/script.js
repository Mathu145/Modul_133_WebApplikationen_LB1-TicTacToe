/*
Javascript Document for Modul 133, LB1
This Scripts is made by Mathusan Aiyadurai Iyer
For more information you can contact me under my mail mathusan.aiyaduraiiyer@gmail.com
*/
//Here jquery is used
$(document).ready(function () {
    //Unused elements are hidden
    $("#2nd").hide();
    $("#reload").hide();
    $("#firstLine").hide();
    //Here is the function for validating the mail
    function validMail() {
        var check = true;
        //The mail is checked with Regex according to requirements
        var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //Here you can check which radio button is selected 
        var checkedRadio = $("#formular").find("input:checked")[0].value;
        if (checkedRadio == "HUMAN") {
            //Check if Player 1 Mail and Player 2 Mail are the same
            if ($("#P1").val() == $("#P2").val()) {
                alert("You can't use the same mail twice!");
                check = false;
            }
            if (!(reg.test($("#P1").val()))) {
                //If the mail is not vaild it should make an alert
                alert("Player 1 Mail is not correct, please enter a real mail!");
                check = false;
            }
            if (!(reg.test($("#P2").val()))) {
                //If the mail is not vaild it should make an alert
                alert("Player 1 Mail is not correct, please enter a real mail!");
                check = false;
            }
        }
        //Here is checked Human vs. PC
        if (checkedRadio == "HUMANPC") {
            if (!(reg.test($("#P3").val()))) {
                alert("Mail not correct");
                check = false;
            }
        }
        return check
    };
    //If you click start, the elements that are unnecessary will be hidden and the relevant ones will be shown. Click Start to call the validMail function.
    $("#start").on("click", function () {
        if (validMail()) {
            $("p").hide();
            $("#formular").hide();
            $("#start").hide();
            $("hr").hide();
            $("#2nd").show();
            $("#reload").show();
            $("#firstLine").show();
        }
    });
    //Here the X & O is inserted on each box with the click inverted
    var spiel = '<div class="XO" id="O">O</div>';
    $(".box").on("click", function () {
        if (!($(this).children().hasClass("XO"))) {
            $(this).html(spiel);
            if (spiel == '<div class="XO" id="X">X</div>') {
                spiel = '<div class="XO" id="O" >O</div>'
            } else {
                spiel = '<div class="XO" id="X">X</div>'
            }
        }
    });
    //Clicking on the Reset button removes the elements from the box and removes Class XO
    $("#reload").click(function () {
        $(".box").html("");
        $(".XO").removeClass();

    });
});
