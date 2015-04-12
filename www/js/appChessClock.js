var chessClock;

if ( localStorage.getItem( 'settingsMin' ) ) {
    $( '.lblSettingsTime' ).html( localStorage.getItem( 'settingsMin' ) );
    $( '.m' ).html( localStorage.getItem( 'settingsMin' ) );
    $( '#minSlider' ).val( localStorage.getItem( 'settingsMin' ) );
    $( '#timerMin' ).html( localStorage.getItem( 'settingsMin' ) );
}
if ( localStorage.getItem( 'settingsSec' ) ) {
    $( '#secSlider' ).val( localStorage.getItem( 'settingsSec' ) );
    $( '#timerSec' ).html( localStorage.getItem( 'settingsSec' ) );
}

$( '#minSlider' ).bind( 'touchmove', function() {
    $( '#timerMin' ).html( this.value );
});

$( '#secSlider' ).bind( 'touchmove', function() {
    $( '#timerSec' ).html( this.value );
});




$( '.btnSaveSettings' ).bind( 'touchstart', function() {
    var Mins = $( '#minSlider' ).val();
    var Secs = $( '#secSlider' ).val();
    
    window.localStorage.setItem( "settingsMin", Mins );
    window.localStorage.setItem( "settingsSec", Secs );
    
    $( '.settingsPanel' ).animate({ "top": "+=80vh" }, { duration: 1000, easing: 'easeOutExpo' });
});

$( '.btnChessClock' ).bind( 'touchstart', function() {
    
    // show pause button
    $( '#btnPause' ).removeClass( 'btnHidden' );
    
    // pause timer
    clearInterval(chessClock);
    
    // set background to active
    $( '.btnChessClock' ).css( 'background-color', '' );
    $( this ).css( 'background-color', '#FFA200' );
    
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

$( '.menuChessClock img' ).bind( 'touchstart', function() {
    
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
            
            $( '.settingsPanel' ).animate({ "top": "-=80vh" }, { duration: 1000, easing: 'easeOutExpo' });
            break;
            
        case 'reset':
            
            navigator.notification.confirm(
                '',                  // message
                function(buttonIndex) {
                    if ( buttonIndex == 1 ) {
                        // pause timer
                        clearInterval(chessClock);
                        
                        // restore backgrounds
                        $( '.btnChessClock' ).css( 'background-color', '' );
                        
                        var settingMins = window.localStorage.setItem( "settingsMin" );
                        var settingSecs = 0;
                        
                        // restore timers
                        $( '.m' ).html( settingsMin );
                        $( '.s' ).html( leadingZero( settingsSec ) );
                        
                    } else {
                        // nothing
                    }
                },                                                  // callback
                'Reset timer?',                                     // title
                ['Yes','No']                                        // buttonName
            );
            
            break;
    }
    
});