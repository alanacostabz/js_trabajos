// Esperar que el DOM esté listo
$(document).ready(function () {
    // Parent
    // var $parent = $('.lateral').find('span').last().parent();
    // $parent.css('border', '1px solid red');

    // Children / find
    // var $children = $('main').children();
    // $children.css('border', '1px solid red');

    var $children = $('main').find('*');
    $children.css({
        'transition': 'all 2s',
        'transform': 'rotate(180deg)'
    });

});