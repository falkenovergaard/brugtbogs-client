/**
 * Created by C.F. Overgaard on 21/11/2016.
 */
$(document).ready(function () {


    $("#logOutLink").on("click", function () {
        SDK.logOut();
        window.location.href = "index.html";
    });

    SDK.Ad.getAds(function(err, ads){
        if(err) throw(err);

        var $adsTableBody = $("#adsTableBody");
        ads.forEach(function (ad) {

            $adsTableBody.append(
                "<tr>" +
                "<td>" + ad.isbn + "</td>" +
                "<td>" + ad.bookTitle + "</td>" +
                "<td>" + ad.bookAuthor + "</td>" +
                "<td>" + ad.bookEdition + "</td>" +
                "<td>" + ad.price + "</td>" +
                "<td>" + ad.comment + "</td>" +
                "<td>" + ad.rating + "</td>" +
                "</tr>");
        });

    });

    SDK.Ad.getMyAds(function(err, ads){
        if(err) throw(err);

        var $myAdsTableBody = $("#myAdsTableBody");
        ads.forEach(function (ad){

            $myAdsTableBody.append(
                "<tr>" +
                "<td>" + ad.isbn + "</td>" +
                "<td>" + ad.bookTitle + "</td>" +
                "<td>" + ad.bookAuthor + "</td>" +
                "<td>" + ad.bookEdition + "</td>" +
                "<td>" + ad.price + "</td>" +
                "<td>" + ad.comment + "</td>" +
                "<td>" + ad.rating + "</td>" +
                "</tr>");
        });

    });

});