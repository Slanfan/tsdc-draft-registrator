$(document).ready(function (){
    $( "#booster" ).slick({
        dots: false,
        arrows: false
    });
});
function selectCard(id) {
    
    var card = "card-" + id;
    
    if ($("#" + card).hasClass( "selected" )) {
        $("#" + card).removeClass( "selected" );
        $("#" + card).addClass( "non-selected" );
        $("#" + card).find( ".pick-button" ).animate({ "bottom": "-20vh" }, "fast" );
        $( "#info" ).html( "No card selected" );
    } else {
        $( ".card" ).each(function () {
            $(this).removeClass( "selected" );
            $(this).addClass( "non-selected" );
            $(this).find( ".pick-button" ).animate({ "bottom": "-40vh" }, "fast" );
        }).promise().done(function () {
            $( "#" + card).addClass( "selected" );
            $( "#" + card).removeClass( "non-selected" );
            $( "#" + card).find( ".pick-button" ).animate({ "bottom": "4vh" }, "slow" );
            $( "#info" ).html( "Card with id: " + id + " selected" );
        });
    }
}
function pickCard(id) {
    $( "#info" ).html( "Card with id: " + id + " picked" );
}
$(document).ready(function () {
    var url = "http://www.slanfan.com/phone-gap/mysql/booster.php";
    alert(url);
    $( "#info" ).load( url );
});