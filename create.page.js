/**
 * Created by C.F. Overgaard on 20/11/2016.
 */

$(document).ready(function () {

        $("#createUserButton").on("click", function () {

            var mobileIsChosen = 0;
            if($("input[name=mobilepay]:checked").val()){
                mobileIsChosen = 1;
            }
            var cashIsChosen =0;
            if($("input[name=cash]:checked").val()){
                cashIsChosen=1;
            }
            var transferIsChosen =0;
            if ($("input[name=transfer]:checked").val()){
                transferIsChosen=1;
            }

            //Create JSON object
            var user = {
                username: $("#newUsername").val(),
                email: $("#newEmail").val(),
                phonenumber: parseInt($("#newPhonenumber").val()),
                password: $("#newPassword").val(),
                address: $("#newAddress").val(),

                mobilepay: mobileIsChosen,
                cash: cashIsChosen,
                transfer: transferIsChosen
            };

            SDK.User.create(user, function(err, data) {
                if (err) throw err ;

                console.log(user.username);

                document.forms['form-horizontal'].reset()
                window.location.href="index.html";

        });

    });

});



