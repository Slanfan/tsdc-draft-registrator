<!DOCTYPE html>
<!--
 
-->
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        <!-- WARNING: for iOS 7, remove the width=device-width and height=device-height attributes. See https://issues.apache.org/jira/browse/CB-4323 -->
        <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi" />
        <link rel="stylesheet" type="text/css" href="css/index.css" />
        <link rel="stylesheet" type="text/css" href="css/slick.css"/>
        
        <!-- Jquery -->
        <script src="js/jquery-1.11.1.js"></script>
        <script src="js/jquery.tinysort.js"></script>
        
        <!-- Google fonts -->
        <link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300' rel='stylesheet' type='text/css' />
        <link href='http://fonts.googleapis.com/css?family=Poiret+One|Advent+Pro:400,100,200,300,500,600,700' rel='stylesheet' type='text/css' />
        
        <title>Slanfans testing</title>
        <style>
            @font-face {
                font-family: "Mplantin";
                src: url(fonts/Mplantin.ttf);
                
                font-family: "Avenir Next";
                src: url(fonts/AvenirNextLTPro-UltLtCn.otf);
            }
            body {
                background-color: rgba(0, 0, 0, 0.6);
            }
            .color-w {
                background-size: 100% 100%;
                background-image: url('color-bars/w.png');
            }
            .color-u {
                background-size: 100% 100%;
                background-image: url('color-bars/u.png');
            }
            .color-b {
                background-size: 100% 100%;
                background-image: url('color-bars/b.png');
            }
            .color-r {
                background-size: 100% 100%;
                background-image: url('color-bars/r.png');
            }
            .color-g {
                background-size: 100% 100%;
                background-image: url('color-bars/g.png');
            }
            .color-a {
                background-size: 100% 100%;
                background-image: url('color-bars/a.png');
            }
            .color-mc {
                background-size: 100% 100%;
                background-image: url('color-bars/mc.png');
            }
            .color-l {
                background-size: 100% 100%;
                background-image: url('color-bars/l.png');
            }
            .card-list-wrapper {
                position: absolute;
                left: 0;
                top: 10vh;
                right: 0;
            }
            .card-list {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            .card-list-item {
                z-index: 100;
                margin-bottom: -.8vh;
                height: 4.4vh;
                width: 100vw;
                display: inline-block;
            }
            .type-box {
                vertical-align: middle;
                padding-top: 0.7vh;
                padding-left: 0.5vw;
                padding-right: 0.5vw;
                text-align: center;
                width: 5vw;
                float: left;
            }
            .type-symbol {
                height: 2.5vh;
            }
            .name-box {
                vertical-align: middle;
                padding-top: 0.7vh;
                text-align: left;
                font-size: 3vh;
                font-family: "Mplantin";
                text-shadow: 1px 1px 1px rgba(255, 255, 255, 1);
                float: left;
            }
            .cost-box {
                vertical-align: middle;
                padding-top: 0.5vh;
                padding-right: 1vh;
                text-align: right;
                float: right;
            }
            .mana-symbol {
                margin: 1px;
                height: 2.5vh;
                width: 2.5vh;
                overflow: hidden;
                border-radius: 2.5vh;
                -webkit-box-shadow: 1px 1px 2px 0px rgba(0,0,0,1);
                -moz-box-shadow: 1px 1px 2px 0px rgba(0,0,0,1);
                box-shadow: 1px 1px 2px 0px rgba(0,0,0,1);
                display: inline-block;
            }
            .mana-symbol img {
                height: 2.5vh;
            }
            .card-box {
                display: none;
                margin: 10vw;
            }
            .card-wrapper {
                border-radius: 2vh;
                background-color: black;
                overflow: hidden;
                padding: 1.4vh;
                margin-top: 8vh;
                margin-bottom: 4vh;
                -webkit-box-shadow: 0 0 20px 5px rgba(0,0,0,0.7);
                box-shadow: 0 0 20px 5px rgba(0,0,0,0.7);
            }
            .header-wrapper {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                height: 10vh;
                z-index: 10;
            }
            .header {
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                background-color: #595959;
                border-bottom: 2px solid rgba(0, 0, 0, 0.3);
                -webkit-box-shadow: 0px 0px 40px 0px rgba(0,0,0,0.8);
                -moz-box-shadow: 0px 0px 40px 0px rgba(0,0,0,0.8);
                box-shadow: 0px 0px 40px 0px rgba(0,0,0,0.8);
                z-index: initial;
            }
            .header-icon-left {
                position: absolute;
                top: 1vh;
                left: 1vh;
                bottom: 1vh;
                -webkit-filter: drop-shadow(1px 1px 0px rgba(255, 255, 255, 0.4));
                filter: url(shadow.svg#drop-shadow);
            }
            .header-icon-right {
                position: absolute;
                top: 1vh;
                right: 1vh;
                bottom: 1vh;
                -webkit-filter: drop-shadow(1px 1px 0px rgba(255, 255, 255, 0.4));
                filter: url(shadow.svg#drop-shadow);
            }
            .header-extra {
                display: none;
                position: absolute;
                top: 9vh;
                left: 2vw;
                right: 2vw;
                background-color: #393939;
                border: 1px solid rgba(0, 0, 0, 0.2);
                -webkit-box-shadow: 0px 0px 40px 0px rgba(0,0,0,0.8);
                -moz-box-shadow: 0px 0px 40px 0px rgba(0,0,0,0.8);
                box-shadow: 0px 0px 40px 0px rgba(0,0,0,0.8);
                z-index: -1;
                padding: 3vh;
            }
            .header-extra-list {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            .header-extra-list li {
                height: 6vh;
                border-bottom: 1px solid rgba(0, 0, 0, .5);
                border-top: 1px solid rgba(255, 255, 255, .2);
                vertical-align: middle;
                position: relative;
            }
            .header-extra-list li:first-child { border-top: none; }
            .header-extra-list li:last-child { border-bottom: none; }        
            .filter-button {
                position: absolute;
                top: 0;
                left: 0;
                height: 6vh;
                width: 6vh;
                padding: 1vh;
                border-radius: 5vh;
                overflow: hidden;
            }
            .filter-button.selected {
                -webkit-filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, .5));
                filter: url(shadow.svg#drop-shadow);
            }
            .filter-image-wrapper {
                width: auto;
                height: auto;
                -webkit-filter: drop-shadow(1px 1px 0px rgba(255, 255, 255, .5));
                filter: url(shadow.svg#drop-shadow);
            }
            .filter-button img {
                height: 4vh;
                margin-right: 10px;
            }
            .filter-text {
                position: absolute;
                top: .5vh;
                left: 7vh;
                height: 6vh;
                width: 70vh;
                padding: 1vh;
                color: rgba(255, 255, 255, 0.7);
                font-size: 3vh;
                font-family: 'Avenir Next';
                font-weight: 100;
            }
        </style>
        <script>
            function sortColor() {
                $('ul.card-list>li').tsort({ charOrder: 'wubrga{mc}la[Æ]', data: 'color' }, { charOrder: 'wubrga{mc}la[Æ]', data: 'name' });
                console.log("sort by color");
            }
            function sortCost() {
                $('ul.card-list>li').tsort({ charOrder: '1[w]2[u]', data: 'color' }, { order: 'asc', data: 'cmc' });
                console.log("sort by cost");
            }
            function sortType() {
                $('ul.card-list>li').tsort({ charOrder: 'wubrga{mc}l', data: 'color' }, { charOrder: 'wubrga{mc}la[Æ]', data: 'name' });
                console.log("sort by type");
            }
            $(document).ready(function (){
                $( ".name-box" ).bind({
                    click: function() {
                        // get card name
                        var cardName = $(this).closest('li').data('name');
                        // hide/show card
                        $(this).parent().find('.card-box').toggle();
                        
                        console.log("toggle card: "+cardName);
                    }
                });
                
                $('.card-image').bind({
                    click: function() {
                        // get card name
                        var cardName = $(this).closest('li').data('name');
                        // hide/show card
                        $(this).parent().parent().toggle();
                        
                        console.log("toggle card: "+cardName);
                    }
                })
            });
            function showFilter() {
                $('.header-extra').slideToggle();
            }
            function filterColor(color) {
                switch (color) {
                    case 'w':
                        $('.color-w').toggle();
                        $('#filter-w').toggleClass('selected');
                        break;
                    case 'u':
                        $('.color-u').toggle();
                        $('#filter-u').toggleClass('selected');
                        break;
                    case 'b':
                        $('.color-b').toggle();
                        $('#filter-b').toggleClass('selected');
                        break;
                    case 'r':
                        $('.color-r').toggle();
                        $('#filter-r').toggleClass('selected');
                        break;
                    case 'g':
                        $('.color-g').toggle();
                        $('#filter-g').toggleClass('selected');
                        break;
                }
            }
            function filterType(type) {
                switch (type) {
                    case 'creature':
                        $('*[data-type="creature"]').toggle();
                        $('#filter-creature').toggleClass('selected');
                        break;
                    case 'sorcery':
                        $('*[data-type="sorcery"]').toggle();
                        $('#filter-sorcery').toggleClass('selected');
                        break;
                    case 'instant':
                        $('*[data-type="instant"]').toggle();
                        $('#filter-instant').toggleClass('selected');
                        break;
                    case 'enchantment':
                        $('*[data-type="enchantment"]').toggle();
                        $('#filter-enchantment').toggleClass('selected');
                        break;
                    case 'artifact':
                        $('*[data-type="artifact"]').toggle();
                        $('#filter-artifact').toggleClass('selected');
                        break;
                    case 'planeswalker':
                        $('*[data-type="planeswalker"]').toggle();
                        $('#filter-planeswalker').toggleClass('selected');
                        break;
                    case 'land':
                        $('*[data-type="land"]').toggle();
                        $('#filter-land').toggleClass('selected');
                        break;
                }
            }
        </script>
    </head>
    <body>
        <div class="header-wrapper">
            <div class="header">
                <div class="header-icon-left">
                    <img src="close-arrow.png" height="100%" />
                </div>
                <div class="header-icon-right" onclick="showFilter()">
                    <img src="filter-list.png" height="100%" />
                </div>
                <div class="header-extra">
                    <ul class="header-extra-list">
                        <li>
                            <div id="filter-w" class="filter-button selected" onclick="filterColor('w')">
                                <div class="filter-image-wrapper">
                                    <img src="mana-symbols/w-clean.png" />
                                </div>
                            </div>
                            <div class="filter-text">show/hide white cards</div>
                        </li>
                        
                        <li>
                            <div id="filter-u" class="filter-button selected" onclick="filterColor('u')">
                                <div class="filter-image-wrapper">
                                    <img src="mana-symbols/u-clean.png" />
                                </div>
                            </div>
                            <div class="filter-text">show/hide blue cards</div>
                        </li>
                        
                        <li>
                            <div id="filter-b" class="filter-button selected" onclick="filterColor('b')">
                                <div class="filter-image-wrapper">
                                    <img src="mana-symbols/b-clean.png" />
                                </div>
                            </div>
                            <div class="filter-text">show/hide black cards</div>
                        </li>
                        
                        <li>
                            <div id="filter-r" class="filter-button selected" onclick="filterColor('r')">
                                <div class="filter-image-wrapper">
                                    <img src="mana-symbols/r-clean.png" />
                                </div>
                            </div>
                            <div class="filter-text">show/hide red cards</div>
                        </li>
                        
                        <li>
                            <div id="filter-g" class="filter-button selected" onclick="filterColor('g')">
                                <div class="filter-image-wrapper">
                                    <img src="mana-symbols/g-clean.png" />
                                </div>
                            </div>
                            <div class="filter-text">show/hide green cards</div>
                        </li>
                        
                        <li>
                            <div id="filter-artifact" class="filter-button selected" onclick="filterType('artifact')">
                                <div class="filter-image-wrapper">
                                    <img src="type-symbols/artifact.png" />
                                </div>
                            </div>
                            <div class="filter-text">show/hide artifact cards</div>
                        </li>
                        
                        <li>
                            <div id="filter-land" class="filter-button selected" onclick="filterType('land')">
                                <div class="filter-image-wrapper">
                                    <img src="type-symbols/land.png" />
                                </div>
                            </div>
                            <div class="filter-text">show/hide land cards</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
<?php

include('connect.php');

if(isset($_GET['action'])) {
    if($_GET['action'] == 'cardlist') {
        echo cardlist();
        exit;
    }
}

function cardlist() {
    
    // fetch 15 random cards
    $boosterQuery = mysql_query("select * from `ds_cubelist` order by RAND() limit 45");
    
    // Start output
    $cards = '<div class="card-list-wrapper"><ul class="card-list">';
    
    // Start loop
    while($card = mysql_fetch_array($boosterQuery)) {
        
        // store card information
        $cardId = $card['ID'];
        $cardCmc = $card['CMC'];
        $cardName = $card['NAME'];
        $cardCost = strtolower($card['COST']);
        $cardType = strtolower($card['TYPE']);
        $cardColor = strtolower($card['COLOR']);
        $cost =  '';
        
        if(preg_match_all('/\{(.*?)\}/',$cardCost,$match)) {
            
            foreach($match[1] as $symbol) {
                $cost .= '<div class="mana-symbol"><img src="mana-symbols/' . $symbol . '.png"></div>';
            }
        }
        
        $cards .= ' <li class="card-list-item color-' . $cardColor . '" data-color="' . $cardColor .'" data-cmc="' . $cardCmc . '" data-name="' . $cardName . '" data-type="' . $cardType . '">
                        <div class="type-box" onclick="sortType()"><img class="type-symbol" src="type-symbols/' . $cardType . '.png"></div>
                        <div class="name-box">' . $cardName . '</div>
                        <div class="cost-box" onclick="sortCost()">' . $cost . '</div>
                        <div class="card-box"><div class="card-wrapper"><img class="card-image" src="http://mtgimage.com/multiverseid/' . $cardId . '.jpg" width="100%" /></div></div>
                    </li>';
        
    }
    
    $ccards .= '</ul></div>';
    
    echo $cards;
    
}




// fetch 15 random cards
$boosterQuery = mysql_query("select * from `ds_cubelist` order by RAND() limit 15");

// check query
if(!$boosterQuery) { $return['status'] = 'error'; echo json_encode($return); exit; }

// if OK, loop through the cards and store output

// Start output
$cards = '';

// Start loop
while($card = mysql_fetch_array($boosterQuery)) {
    
    // store card information
    $cardId = $card['ID'];
    $cardName = $card['NAME'];
    $cardCost = $card['COST'];
    
    $cardCmc = $card['CMC'];
    $cardType = strtolower($card['TYPE']);
    $cardColor = strtolower($card['COLOR']);
    
    
    // store card output
    $cards .= '<div>';
    $cards .= '  <div class="card-container">';
    $cards .= '      <div id="card-' . $cardId . '" class="card non-selected" data-card-name="' . $cardName . '" data-card-cost="' .   $cardCost .'" data-card-cmc="' . $cardCmc . '" data-card-color="' . $cardColor . '" data-card-type="' . $cardType . '" data-card-id="' . $cardId . '">';
    $cards .= '          <img src="http://mtgimage.com/multiverseid/' . $cardId . '.jpg" width="100%" onclick="selectCard(' . $cardId . ')" />';
    $cards .= '          <div class="pick-button" onclick="pickCard(' . $cardId . ')">pick card</div>';
    $cards .= '    </div>';
    $cards .= '  </div>';
    $cards .= '</div>';
    
}

// Add a info about booster
$boosterInfo .= 'Pack 1 — Pick 1';

$return['status'] = 'success';
$return['cards'] = $cards;
$return['booster-info'] = $boosterInfo;


echo json_encode($return);



?>
</body>
</html>