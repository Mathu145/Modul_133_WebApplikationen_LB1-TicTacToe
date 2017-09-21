/**/$(document).ready(function () {
    $("#2nd").hide();
    $("#reload").hide();
    $("#firstLine").hide();

    function validMail() {
        var check = true;
        var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var checkedRadio = $("#formular").find("input:checked")[0].value;
        if (checkedRadio == "HUMAN") {
            if ($("#P1").val() == $("#P2").val()) {
                alert("You can't you this Mail Address twice time!");
                check = false;
            }
            if (!(reg.test($("#P1").val()))) {
                alert("isnt corectly for player 1 pls retyype");
                check = false;
            }
            if (!(reg.test($("#P2").val()))) {
                alert("isnt corectly for player 2 pls retyype");
                check = false;
            }
        }

        if (checkedRadio == "HUMANPC") {
            if (!(reg.test($("#P3").val()))) {
                alert("Mail not correct");
                check = false;
            }
        }

        return check
    };

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


<<<<<<< HEAD
<<<<<<< HEAD
    $("#reload").on("click", function () {
        //$(".box").html("");
        //location.reload();
        //$(".XO").removeClass();
        $("#a1").removeClass("XO");
=======
=======
>>>>>>> e51bda8ec1befadae1586020d931466e3772faac

    $("#reload").click(function () {
        $(".box").html("");
        $(".XO").removeClass();
<<<<<<< HEAD
>>>>>>> e51bda8ec1befadae1586020d931466e3772faac
=======
>>>>>>> e51bda8ec1befadae1586020d931466e3772faac

    });

});
