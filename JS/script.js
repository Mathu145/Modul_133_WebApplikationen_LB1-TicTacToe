$(document).ready(function () {
    
    $("#field").hide();

    $("#field").hide();

    function validMail() {
        var mail = document.forms["myForms"]["email"].value;
        var atkey = mail.indexOf("@");
        var dotpos = mail.lastIndexOf(".");
        if (atkey < 1 || dotpos < atkey + 2 || dotpos + 2 >= mail.length) {
            alert("Not a valid e-mail address");
            return false;
        }
    }
    //
    //    function check(radioButton) {
    //        document.getElementById("hiddenText").value = radioButton;
    //    }
    //
    //    function hidden(radioButton) {
    //        document.getElementById("hiddenText").value = radioButton;
    //    }

    $("#start").click(function () {
<<<<<<< HEAD
        $("#form").hide(2);
        $("p").hide(2);
=======
        $("#form").hide();
        $("p").hide();
>>>>>>> ff840f1d75e11bbb4f06120871a3baea71a227b6
        $("#field").show();
        
    });
    
    $('#reload').click(function() {
    location.reload();
});

});
