$(document).ready(function () {

    function validMail() {
        var mail = document.forms["myForms"]["email"].value;
        var atkey = mail.indexOf("@");
        var dotpos = mail.lastIndexOf(".");
        if (atkey < 1 || dotpos < atkey + 2 || dotpos + 2 >= mail.length) {
            alert("Not a valid e-mail address");
            return false;
        }
    }

    function check(radioButton) {
        document.getElementById("hiddenText").value = radioButton;
    }

    function hidden(radioButton) {
        document.getElementById("hiddenText").value = radioButton;
    }

    function myFunction() {
        var x = document.getElementById('field');
        if (x.style.display === 'none') {
            x.style.display = 'block';
        } else {
            x.style.display = 'none';
        }
    }
    
    $("").click(function()

}); // end document ready
