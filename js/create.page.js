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

            SDK.User.create(user, function(err) {
                if (err) throw err ;

                window.alert("Du har nu oprettet bruger")

                document.forms['form-horizontal'].reset()
                window.location.href="index.html";

        });

    });

    $("#createAdButton").on("click", function(){

        var ad = {
            isbn: parseInt($("#newIsbn").val()),
            rating: parseInt($("#newAppearence").val()),
            comment: $("#newComment").val(),
            price: parseInt($("#newPrice").val()),

        };

        SDK.Ad.createAd(ad, function(err){
            if (err) throw err;

            window.alert("Du har nu oprettet en annonce")

            document.forms['form-horizontal'].reset()
            window.location.href="user.html";


        });
    });

});



