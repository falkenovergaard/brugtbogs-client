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
                "<td><button id='reserveAdButton' class='btn-default btn'  data-adid="+ ad.adId +">Reservér</button></td>"+
                "</tr>");
        });

        $("#reserveAdButton").on("click", function (){

            var $reserveAd = $(this);

            var adId = {
                id : $reserveAd.data("adid")
            }

            SDK.Ad.reserveAd(adId, function(err, data){
                if (err) throw err;
                location.reload

            });

        });
    });

    SDK.Ad.getMyAds(function(err, ads){
        if(err) throw(err);

        var $myAdsTableBody = $("#myAdsTableBody");
        ads.forEach(function (ad){

            $myAdsTableBody.append(
                "<tr>" +
                "<td>" + ad.adId + "</td>" +
                "<td>" + ad.isbn + "</td>" +
                "<td>" + ad.price + "</td>" +
                "<td>" + ad.rating + "</td>" +
                "<td>" + ad.comment + "</td>" +
                "<td>" + ad.locked + "</td>" +
                "</tr>");
        });

    });

});