$(document).ready(function() {
    function flipMe() {
        var flip = ["heads", "tails"];
        var side = flip[Math.floor(Math.random() * flip.length)];
      
        if (side == "heads") {
            $("#flipResult").html("You Got " + side).addClass('animated pulse');
            $('h1').addClass('animated pulse');
            $(".coin").html('<img class="heads" src="img/head.png"/>');
            $('.heads').addClass('animated flip');
        } else {
            $("#flipResult").html("You Got " + side);
            $('h1').addClass('animated pulse');
            $(".coin").html('<img class="tails" src="img/tail.png"/>');
            $('.tails').addClass('animated flip');
        }
    }
    
    $(".coin").click(flipMe);
    
});