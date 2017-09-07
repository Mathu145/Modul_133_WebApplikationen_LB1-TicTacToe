$(document).ready(function () {

    $("#2nd").hide();

    function validMail() {
        var mail = document.forms["myForms"]["email"].value;
        var atkey = mail.indexOf("@");
        var dotpos = mail.lastIndexOf(".");
        if (atkey < 1 || dotpos < atkey + 2 || dotpos + 2 >= mail.length) {
            alert("Not a valid e-mail address");
            return false;
        }
    }

    $("#start").click(function () {
        $("#form").hide();
        $("p").hide();
        $("#2nd").show();

    });

    $('#reload').click(function () {
        location.reload();
    });

});
