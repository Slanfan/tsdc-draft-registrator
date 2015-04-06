/* SET VARIABLES */
var players = 0;
var packs = 0;
var card_qty = 0;
var pack_qty = 0;
var pack = [];
var card_sub = 0;
var pick_num = 1;
var pack_num = 1;
var card_num = 1;

var cubelist_type = 'local';
var cubelist = {};
var list_count;

$.getJSON('http://www.slanfan.com/cubescripts/get_list.php', function(data) {
    $.each(data, function(key, val) {
        cubelist[key] = val;
    });
    console.log(cubelist);
    list_count = Object.keys(cubelist).length;
})
.success(function() { console.log("success: getting cubelist from mysql query, working local."); })
.error(function() { console.log("error: getting cubelist from mysql query, working online"); cubelist_type = 'online'; })
.complete(function() { console.log("getJson: complete"); });


/* SET NUMPAD FUNCTIONS */
$(document).ready(function() {
    
    
    // settingsbuttons
    $( '.btn' ).bind('touchstart', function() {
        number = parseInt( $(this).closest( 'tr' ).find( '.number' ).html() );
        if ( $(this).hasClass( 'Minus' ) ) {
            number--;
            $(this).closest( 'tr' ).find( '.number' ).html(number);
        }
        else if ( $(this).hasClass( 'Plus' ) ) {
            number++;
            $(this).closest( 'tr' ).find( '.number' ).html(number);
        }
    }); 
    
    $( '#btnStart' ).bind( 'touchstart', function() {
        var players = parseInt( $( '#players' ).html() );
        var packs = parseInt( $( '#boosters' ).html() );
        var card_qty = parseInt( $( '#cards' ).html() );
        
        console.log( 'Players: ' + players + ' | Packs: ' + packs + ' | Cards: ' + card_qty );
        
        pack_qty = packs * players;
        
        for (i = 1; i <= pack_qty; i++) {
           pack[i] = { card: []};
        }
        
        $( '.start-input' ).fadeOut( 'slow', function() {
            // animate info-container
            $( ".info-container" ).animate({ "top": "+=15vh" }, { duration: 500, easing: 'easeOutExpo' });
            // animate keypad-container
            $( ".keypad-container" ).animate( { "top": "-=50vh" }, { duration: 500, easing: 'easeOutExpo' });
        });
        
    });
    
    // function for numpads
    $(".keypad .numpad").bind('touchstart', function() {
        var number = $(this).html();
        var id = parseInt($("#card-id").val() + number);
        $("#card-id").val(id);
        $("#card-number").html("# " + pad(id,3));
        if(cubelist_type == 'local') {
            if (id > list_count) {
                $("#card-name").html('There is no card with id ' + id);
                return;
            }
            $("#card-name").html(cubelist[id]);
        } else {
            find_card(id);
        }
    });
    
    // function for clear button
    $(".keypad .clear").bind('touchstart', function() {
        $("#card-id").val('');
        $("#card-name").html("Please enter card id");
    	$("#card-number").html("# 000");
    });
    
    // function for add button
    $(".keypad .add").bind('touchstart', function() {
        var id = $("#card-id").val();
        var name = $("#card-name").html();
        
        if (name.substr(0,5) == "There" || name.substr(0,6) == "Please" || name.substr(0,2) == "No") {
            $("#card-name").html('No card added, enter a new id');
            $("#card-number").html('# 000');
            $("#card-id").val('');
            return;
        }
        
        pack[pack_num].card[card_num] = { id: id, name: name, picked: "False" };
        
        $("#booster").append('<li data-pack-num="' + pack_num + '" data-card-num="' + card_num + '" data-id="' + pack[pack_num].card[card_num].id + '" data-name="' + pack[pack_num].card[card_num].name + '">' + pack[pack_num].card[card_num].name + '<div class="pick-selector" onClick="pick_card(' + pack[pack_num].card[card_num].id + ',\'' + escape(pack[pack_num].card[card_num].name) + '\',' + pack_num + ',' + card_num + ')">pick card</div></li>');
        console.log('Pack#: ' + pack_num + '|Card#: ' + card_num + ' [id:' + pack[pack_num].card[card_num].id + ' | name:' + pack[pack_num].card[card_num].name + ']');
        
        $("#card-id").val('');
        $("#card-name").html('Please enter card id');
        
        if (card_num == (card_qty - card_sub)) {
            // ADD NEW HEADER
            $("#booster-header").html("Pick #" + pick_num);
            
            // OPEN PICK SELECTOR
            $(".booster-viewer").animate({top: "0%"});            
        } else {
            card_num++;
        }
        
        $("#card-number").html("# 000");
        $("#pick-info").html('Pack '+pack_num+' - card '+card_num);
        
    });
});

function pad (str, max) {
  	str = str.toString();
  	return str.length < max ? pad("0" + str, max) : str;
}

/* CARDNAME FETCHER */
function find_card(id) {
    var url = "../get_name_by_id.php?id=" + id;
    $.ajax({
        url: url,
        success: function(response) {
            $("#card-name").html(response);
        },
        error: function() {
            $("#card-name").html("Error connecting to server...");
        }
    });
}

/* CARD PICKER */
function pick_card(id,name,packNr,cardNr) {
    pack[packNr].card[cardNr].picked = "True";
    console.log('Pick #'+pick_num+'['+id+':'+name+']'+'(pack:'+pack_num+')');
    if (pack_num == pack_qty) {
        //END REGISTRATION
        var sub  = 0;
        var cla; 
        for(i = 1; i <= pack_qty; i++) {
            for(x = 1; x <= card_qty - sub; x++) {
                if (i % 2 === 0) { cla = "even"; } else { cla = "odd"; }
                $("#output-table").find('tbody:last').append("<tr class='"+cla+"'><td>"+i+"</td><td>"+x+"</td><td>"+pack[i].card[x].id+"</td><td>"+pack[i].card[x].name+"</td><td>"+pack[i].card[x].picked+"</td></tr>");
            }
            if (sub == card_qty - 1) {
                sub = 0;
            } else {
                sub++;
            }
        }
        
        $('.output-container').show();
        
        return;
    }
    pick_num++;
    pack_num++;
    card_num = 1;
    if (card_sub == card_qty - 1) {
        card_sub = 0;
    } else {
        card_sub++;
    }
    console.log('Card-sub:'+card_sub);
    
    $("#card-number").html("# 000");
    $("#pick-info").html('Pack '+pack_num+' - card '+card_num);
    
    // CLOSE PICK SELECTOR
    $(".booster-viewer").animate({top: "100%"});
    
    // CLEAR CARD LIST
    $("#booster").empty();
}