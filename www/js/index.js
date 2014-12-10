$(document).ready(function () {
    var url = "http://www.slanfan.com/phone-gap/mysql/booster.php";
    $.ajax({
        dataType: "json",
        url: url,
        success: function(response) {
            if (response["status"] === "success") {
                // load cards and booster info
                $("#booster").html(data["cards"]);
                $("#booster-info").html(data["booster-info"]);
            } else {
                // nothing
            }
        },
        error: function(response) {
            // nothing
        }
    }, function () {
        $("#booster").slick({
            dots: false,
            arrows: false
        });
    });
});
function selectCard(id) {
    
    var Name = $("#card-" + id).data("card-name");
    
    if ($("#card-" + id).hasClass("selected")) {
        $("#card-" + id).removeClass("selected");
        $("#card-" + id).addClass("non-selected");
        $("#card-" + id).find( ".pick-button" ).animate({ "bottom": "-20vh" }, "fast" );
        $("#info").html("No card selected");
    } else {
        $(".card").each(function () {
            $(this).removeClass("selected");
            $(this).addClass("non-selected");
            $(this).find(".pick-button").animate({ "bottom": "-40vh" }, "fast" );
        }).promise().done(function () {
            $("#card-" + id).addClass("selected");
            $("#card-" + id).removeClass("non-selected");
            $("#card-" + id).find( ".pick-button" ).animate({ "bottom": "4vh" }, "slow" );
            $("#info").html(Name + " selected");
        });
    }
}
function pickCard(id) {
    
    var Name = $("#card-" + id).data("card-name");
    
    $("#info").html(Name + " picked");
}