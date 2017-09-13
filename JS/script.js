$(document).ready(function () {

    $("#2nd").hide();
    $("#reload").hide();

    function validMail() {
        var mail = document.forms["myForms"]["email"].value;
        var atkey = mail.indexOf("@");
        var dotpos = mail.lastIndexOf(".");
        if (atkey < 1 || dotpos < atkey + 2 || dotpos + 2 >= mail.length) {
            alert("Not a valid e-mail address");
            return false;
        }
    };

    $("#start").on("click", function () {
        $("p").hide();
        $("form").hide();
        $("#start").hide();
        $("#2nd").show();
        $("#reload").show();

    });

    var spiel = '<div class="XO">O</div>';

    $(".box").one("click", function () {

        $(this).html(spiel);
        if (spiel == '<div class="XO">X</div>') {
            spiel = '<div class="XO">O</div>'
        } else {
            spiel = '<div class="XO">X</div>'
        }
    });


    $("#reload").on("click", function () {
        //$(".box").htbml("");
        //location.reload();
        $(".XO").removeClass();
        $

    });

});
