$(document).ready(function () {
    
    var move = $(window).width() * 1.1;
    $('.page').animate( {
        right: '-=' + move,
        left: '+=' + move
    });
    
    $('#draft').animate( {
        right: '+=' + move,
        left: '-=' + move
    });
    
    setTimeout(function () {
        $('#splash').fadeOut('fast');
    }, 3000);
});
$(document).ready(function () {
    var url = "http://www.slanfan.com/phone-gap/mysql/booster.php";
    $.ajax({
        dataType: "json",
        url: url,
        success: function(response) {
            if (response["status"] === "success") {
                // load cards and booster info
                $("#booster").html(response["cards"]);
                $("#booster-info").html(response["booster-info"]);
            } else {
                // nothing
            }
        },
        error: function(response) {
            // nothing
        }
    }).done(function () {
        $("#booster").slick({
            dots: false,
            arrows: false
        });
    });
});
function showPage(page) {
    var move = $(window).width() * 1.1;
    $('#'+page).animate( {
        right: '+=' + move,
        left: '-=' + move
    }, 500);
}
function hidePage(page) {
    var move = $(window).width() * 1.1;
    $('#'+page).animate( {
        right: '-=' + move,
        left: '+=' + move
    }, 200);
}
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
    var Color = $("#card-" + id).data("card-color");
    var Cost = $("#card-" + id).data("card-cost");
    var Cmc = $("#card-" + id).data("card-cmc");
    var Type = $("#card-" + id).data("card-type");
    var Multiverseid = $("#card-" + id).data("card-id");
    var Manacost;
    
    var result = Cost.match(/[^{}]+/g);
    for(var i = 0; i < result.length; i++) {
        Manacost += '<div class="mana-symbol"><img src="img/mana-symbols/' + result[i] + '.png"></div>';
    }
    
    var Listitem = '<li class="card-list-item color-' + Color + '" data-color="' + Color +'" data-cmc="' + Cmc + '" data-name="' + Name + '" data-type="' + Type + '"><div class="type-box" onclick="sortType()"><img class="type-symbol" src="img/type-symbols/' + Type + '.png"></div><div class="name-box">' + Name + '</div><div class="cost-box" onclick="sortCost()">' + Manacost + '</div><div class="card-box"><div class="card-wrapper"><img class="card-image" src="http://mtgimage.com/multiverseid/' + Multiverseid + '.jpg" width="100%" /></div></div></li>';
    
    $('.pick-list').append(Listitem);
    $("#info").html(Name + " picked");
    
    
    
}