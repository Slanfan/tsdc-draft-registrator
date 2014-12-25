function sortColor() {
    $('ul.pick-list>li').tsort({ charOrder: 'wubrga{mc}la[Æ]', data: 'color' }, { charOrder: 'wubrga{mc}la[Æ]', data: 'name' });
    console.log("sort by color");
}
function sortCost() {
    $('ul.pick-list>li').tsort({ charOrder: '1[w]2[u]', data: 'color' }, { order: 'asc', data: 'cmc' });
    console.log("sort by cost");
}
function sortType() {
    $('ul.pick-list>li').tsort({ charOrder: 'wubrga{mc}l', data: 'color' }, { charOrder: 'wubrga{mc}la[Æ]', data: 'name' });
    console.log("sort by type");
}
$( ".pick-list" ).on('click', 'div.name-box', function() {
    // get card name
    var cardName = $(this).closest('li').data('name');
    // hide/show card
    $(this).parent().find('.card-box').toggle();
    console.log("toggle card: "+cardName);
});

$('.pick-list').on('click', 'div.card-image', function() {
    // get card name
    var cardName = $(this).closest('li').data('name');
    // hide/show card
    $(this).parent().parent().toggle();
    console.log("toggle card: "+cardName);
});
function toggleCard(id) {
    $('#'+id).toggle();
}
function showFilter() {
    $('.header-extra').slideToggle();
}
function filterColor(color) {
    switch (color) {
        case 'w':
            $('.color-w').toggle();
            $('#filter-w').toggleClass('filter-selected');
            break;
        case 'u':
            $('.color-u').toggle();
            $('#filter-u').toggleClass('filter-selected');
            break;
        case 'b':
            $('.color-b').toggle();
            $('#filter-b').toggleClass('filter-selected');
            break;
        case 'r':
            $('.color-r').toggle();
            $('#filter-r').toggleClass('filter-selected');
            break;
        case 'g':
            $('.color-g').toggle();
            $('#filter-g').toggleClass('filter-selected');
            break;
    }
}
function filterType(type) {
    switch (type) {
        case 'creature':
            $('*[data-type="creature"]').toggle();
            $('#filter-creature').toggleClass('filter-selected');
            break;
        case 'sorcery':
            $('*[data-type="sorcery"]').toggle();
            $('#filter-sorcery').toggleClass('filter-selected');
            break;
        case 'instant':
            $('*[data-type="instant"]').toggle();
            $('#filter-instant').toggleClass('filter-selected');
            break;
        case 'enchantment':
            $('*[data-type="enchantment"]').toggle();
            $('#filter-enchantment').toggleClass('filter-selected');
            break;
        case 'artifact':
            $('*[data-type="artifact"]').toggle();
            $('#filter-artifact').toggleClass('filter-selected');
            break;
        case 'planeswalker':
            $('*[data-type="planeswalker"]').toggle();
            $('#filter-planeswalker').toggleClass('filter-selected');
            break;
        case 'land':
            $('*[data-type="land"]').toggle();
            $('#filter-land').toggleClass('filter-selected');
            break;
    }
}
