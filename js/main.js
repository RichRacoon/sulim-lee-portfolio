
$(document).ready(function () {

    var heroWidth = document.getElementById("hero").offsetWidth;
    var heroCopyWidth = document.getElementById("hero-copy-container").offsetWidth;
    var heroHeight = document.getElementById("hero").offsetHeight;
    var heroCopyHeight = document.getElementById("hero-copy-container").offsetHeight;
    var heroCopy = $('#hero-copy-container');
    var left = (heroWidth - heroCopyWidth) / 2;
    var leftString = left + 'px';
    var top = (heroHeight - heroCopyHeight) / 2;
    var topString = top + 'px';
    heroCopy.css({
        'left': leftString,
        'top': topString
    });

    console.log(heroWidth);
});


$.scrollify({
    section: '.section',
    //sectionName:false,
    scrollSpeed: 1100,
    after: function (i) {



        if (i === 2) {
            $.scrollify.setOptions({
                easing: 'easeOutExpo'
            });
        }

    }
});

//Scrollmagic Init JS--------------------------------------->

var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        duration: 100
    }
});

new ScrollMagic.Scene({
        triggerElement: '#section-1'
    })
    .setClassToggle('nav', 'active')
    .addTo(controller)
    .on('start', function () {
        $('#section-1').addClass('opacity-trigger');
    })