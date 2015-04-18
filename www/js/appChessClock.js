var chessClock;

if ( localStorage.getItem( 'settingsMin' ) ) {
    $( '.lblSettingsTime' ).html( localStorage.getItem( 'settingsMin' ) );
    $( '.m' ).html( localStorage.getItem( 'settingsMin' ) );
    $( '#minSlider' ).val( localStorage.getItem( 'settingsMin' ) );
    $( '#timerMin' ).html( localStorage.getItem( 'settingsMin' ) );
} else {
    window.localStorage.setItem( 'settingsMin', 25 );
    $( '.lblSettingsTime' ).html( '25' );
    $( '.m' ).html( localStorage.getItem( '25' ) );
    $( '#minSlider' ).val( localStorage.getItem( '25' ) );
    $( '#timerMin' ).html( localStorage.getItem( '25' ) );
}
if ( localStorage.getItem( 'settingsSec' ) ) {
    $( '#secSlider' ).val( localStorage.getItem( 'settingsSec' ) );
    $( '#timerSec' ).html( localStorage.getItem( 'settingsSec' ) );
} else {
    window.localStorage.setItem( "settingsSec", 2 );
    $( '#secSlider' ).val( localStorage.getItem( '2' ) );
    $( '#timerSec' ).html( localStorage.getItem( '2' ) );
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

$( '.btnActive' ).bind( 'touchend', function() {
    
    // remove class to prevent clicks
    $( '.btnChessClock' ).addClass( 'btnActive' );
    $( this ).removeClass( 'btnActive' );
    
    // store variables of timer
    var min = parseInt( $( this ).find( '.m' ).html() );
    var sec = parseInt( $( this ).find( '.s' ).html() );
    var extraSecs = parseInt( localStorage.getItem( 'settingsSec' ) );
    
    // add extra seconds
    sec = sec + extraSecs;
    
    if ( sec > 59 ) {
        sec = sec - 60;
        min++;
    }
    
    // show pause button
    $( '#btnPause' ).removeClass( 'btnHidden' );
    
    // pause timer
    clearInterval(chessClock);
    
    // set background to active
    $( '.btnChessClock' ).css( 'background-color', '#FFA200' );
    $( this ).css( 'background-color', '' );
    
    // get active time
    var min = parseInt( $( '.btnActive' ).find( '.m' ).html() );
    var sec = parseInt( $( '.btnActive' ).find( '.s' ).html() );
    
    // store elements
    var minElement = $( '.btnActive' ).find( '.m' );
    var secElement = $( '.btnActive' ).find( '.s' );
      
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
            
            confirmReset();
            
            /*
            navigator.notification.confirm(
                '',                  // message
                confirmReset,         // callback
                'Reset timer?',      // title
                ['Yes','No']         // buttonName
            );
            */
            
            break;
    }
    
});

function confirmReset () {
    
    //alert( 'You selected button with index: ' + buttonIndex );
    
    // pause timer
    clearInterval(chessClock);
    
    // restore backgrounds
    $( '.btnChessClock' ).css( 'background-color', '' );
    
    // restore timers
    $( '.m' ).html( window.localStorage.getItem( "settingsMin" ) );
    $( '.s' ).html( leadingZero( 0 ) );
    
    // hide button
    $( '#btnPause' ).addClass( 'btnHidden' );

    
    if ( buttonIndex === 1 ) {
        
        
    } else {
        // nothing
    }
}

var leadingZero = function (n) {
    if (n < 10 && n >= 0) return '0' + n;
    else return n;
}