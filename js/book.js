/**
 * Created by C.F. Overgaard on 19/11/2016.
 */


$(document).ready(function () {

    //Fires on page-load
    SDK.Book.getAll(function(err, data){
        if(err) throw err;

        function printAuthors(authors){
            return authors.map(function(author){
                return author.firstName + " " + author.lastName;
            }).join(", ");
        }

        var $booksTableBody = $("#booksTableBody");
        data.forEach(function (book, i) {
            $booksTableBody.append(
                "<tr>" +
                "<td>" + book.isbn + "</td>" +
                "<td>" + book.title + "</td>" +
                "<td>" + book.author  + "</td>" +
                "<td>" + book.edition + "</td>" +
                "</tr>");
        });

        $(".customerDetails").click(function (evt) {
            var cell = $(evt.target).closest("tr").children().first();
            var custID = cell.text();
            $("#viewPlaceHolder").load("/getbook", {ISBN: book.isbn, viewName: "SeeBook"});
        });
    });

//    var currentUser = SDK.User.current();
  //  $("#currentUserName").text(currentUser.firstName +  " " + currentUser.lastName);

});
