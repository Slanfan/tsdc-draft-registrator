var chessClock;
var settingsMin = 25;
var settingsSec = 0;

$( '.btnChessClock' ).bind( 'click', function() {
    
    // show pause button
    $( '#btnPause' ).removeClass( 'btnHidden' );
    
    // pause timer
    clearInterval(chessClock);
    
    // set background to active
    $( '.btnChessClock' ).css( 'background-color', '' );
    $( this ).css( 'background-color', 'rgba(255,175,0,1)' );
    
    // get active time
    var min = parseInt( $( this ).find( '.m' ).html() );
    var sec = parseInt( $( this ).find( '.s' ).html() );
    
    // store elements
    var minElement = $( this ).find( '.m' );
    var secElement = $( this ).find( '.s' );
      
    // start timer
    chessClock = setInterval( function() {
        if( sec == 0 ) {
            min--;
            sec = 59;
        } else {
            sec--;
        }
        
        minElement.html( min );
        secElement.html( leadingZero( sec ) );
        
    }, 1000);
    
});

var leadingZero = function (n) {
    if (n < 10 && n >= 0) return '0' + n;
    else return n;
}

$( '.menuChessClock img' ).bind( 'click', function() {
    
    // store action
    var action = $( this ).data( 'action' );
    
    // perform action
    switch ( action ) {
        case 'pause':
            // pause timer
            clearInterval(chessClock);
            
            // reset backgrounds
            $( '.btnChessClock' ).css( 'background-color', '' );
            
            // hide button
            $( '#btnPause' ).addClass( 'btnHidden' );
            
            break;
            
        case 'settings':
            
            break;
            
        case 'reset':
            
            navigator.notification.confirm(
                'Are you sure you like to reset?',                  // message
                function(buttonIndex) {
                    if ( buttonIndex == 1 ) {
                        // restore backgrounds
                        $( '.btnChessClock' ).css( 'background-color', '' );
                        
                        // restore timers
                        $( '.m' ).html( settingsMin );
                        $( '.s' ).html( settingsSec );
                        
                    } else {
                        // nothing
                    }
                },                                                  // callback
                'Reset timer?',                                     // title
                ['YES','NO']                                        // buttonName
            );
            
            break;
            
    }
    
});