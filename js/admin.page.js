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
                "<td><a id='deleteUser' class='btn btn-default'>Slet</a></td>"+
                "</tr>");
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