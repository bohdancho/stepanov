//= component/jquery.js
//= component/smooth-scroll.js
// = component/maskedinput.js

/*
    Nav with active class on scroll
*/

let mainNavLinks = document.querySelectorAll(".nav__link");
let mainSections = document.querySelectorAll(".section-nav");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("nav__item_active");
    } else {
      link.classList.remove("nav__item_active");
    }
  });
});


/*
    Modal
*/

$('.darken-bg').on('click', closeModal);
$('.js-open-modal').on('click', openModal);

function openModal() {
    $('.modal').fadeIn();
    $('.darken-bg').fadeIn();
    $('body').addClass('locked');
};
function closeModal() {
    $('.modal').fadeOut();
    $('.darken-bg').fadeOut();
    $('body').removeClass('locked');
}

/*
    Hamburger Menu
*/

$('.nav__open-btn').on('click', function() {
    $(this).toggleClass('nav__open-btn_active');
    $('.nav').toggleClass('nav_active');
})
$('.nav .nav__item').on('click', function() {
    $('.nav').toggleClass('nav_active');
    $('.nav__open-btn').toggleClass('nav__open-btn_active');
})

/*
    Forms sending
*/

$(".modal__form").submit(function() { //Change
    var th = $(this);
    $.ajax({
        type: "POST",
        url: "../php/mail.php", //Change
        data: th.serialize()
    }).done(function() {
        setTimeout(function() {
            closeModal();
            th.trigger("reset");
        }, 1000);
    });
    return false;
});