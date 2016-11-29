/**
 * Created by C.F. Overgaard on 21/11/2016.
 */
$(document).ready(function () {

    var currentUser = SDK.User.current();
    $("#current").text(currentUser);

    SDK.User.getAll(function(err, data) {
        if (err) throw err;

        var $usersTableBody = $("#userTableBody");
        data.forEach(function (user) {
            $usersTableBody.append(
                "<tr>" +
                "<td>" + user.userId + "</td>" +
                "<td>" + user.username + "</td>" +
                "<td>" + user.email + "</td>" +
                "<td>" + user.phonenumber + "</td>" +
                "<td>" + user.address + "</td>" +
                "<td>" + user.mobilepay + "</td>" +
                "<td>" + user.cash + "</td>" +
                "<td>" + user.transfer + "</td>" +
                "<td>" + user.type + "</td>" +
                "<td><button id='deleteUserButton' class='btn-default btn' data-userid="+ user.userId + ">Slet</button></td>"+
                "</tr>");
        });

        $("#deleteUserButton").on("click", function (){
            window.alert("suppe")

            var $deleteUser = $(this);

            var userId = {
                id : $deleteUser.data("userId")
            }

            SDK.User.delete(userId, function(err){
                if (err) throw err;
                location.reload();

            });

        });
    });

    $("#deleteUser").on("click"), function () {
        SDK.logOut();
        window.location.href ="index.html";
    }

    $("#logOutLink").on("click", function () {
        SDK.logOut();
        window.location.href = "index.html";
    });
});