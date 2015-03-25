/* SET NUMPAD FUNCTIONS */
$(document).ready(function() {
    // function for numpads
    $(".keypad .numpad").click(function() {
        var number = $(this).html();
        var id = parseInt($("#card-id").val() + number);
        $("#card-id").val(id);
        find_card(id);
    });
    
    // function for clear button
    $(".keypad .clear").click(function() {
        $("#card-id").val('');
        $(".auto-card-name").html("Please enter card id");
    });
    
    // function for add button
    $(".keypad .add").click(function() {
        $("#card-id").val(''); 
    });
});

/* CARDNAME FETCHER */
function find_card(id) {
    var url = "http://www.slanfan.com/cubescripts/get_name_by_id.php?id=" + id;
    $.ajax({
        url: url,
        success: function(response) {
            $(".auto-card-name").html(response);
        },
        error: function() {
            $(".auto-card-name").html("Error connecting to server...");
        }
    });
}