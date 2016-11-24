/**
 * Created by C.F. Overgaard on 17/11/2016.
 */

$(document).ready(function () {

    $("#loginButton").on("click", function(e){
        e.preventDefault();

        var username = $("#username").val();
        var password = $("#password").val();

        SDK.login(username, password, function(err, data){

            //On wrong credentials
            if(err) {
                return $("#loginForm").find(".form-group").addClass("has-error");
            }

            //
            alert("succesfull login")

            if(data.type == 1) {
                window.location.href="admin.html";
            } else{
                window.location.href="user.html";
            }

        });

    });

});
