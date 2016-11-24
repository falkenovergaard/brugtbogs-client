/**
 * Created by C.F. Overgaard on 21/11/2016.
 */
$(document).ready(function () {


    $("#logOutLink").on("click", function () {
        SDK.logOut();
        window.location.href = "index.html";
    });

});