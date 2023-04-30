"use strict";

$(document).ready(function () {
    $('.header_burger').click(function (event) {
        $('.header_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
})
const buttons = document.querySelectorAll('.btn'); // нашли элемент по которому кликнем
const servicelogo = document.querySelector("#photo_service") // куда вставим

function handleClick(a) {

    servicelogo.src = a

}

//
$('.scrollto a').on('click', function () {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 370,   // по умолчанию «400»
        easing: "linear" // по умолчанию «swing»
    });

    return false;
});

$(document).ready(function () {
    $("a[href*='#']").on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });
});

/*---------------------------------------mapsmodal---------------------*/



