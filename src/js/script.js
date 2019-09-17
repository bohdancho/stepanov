//= component/jquery.js

/*
    Smooth scroll
*/

let headerHeight = $('.header').outerHeight();

// Add smooth scrolling to all links
$("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top - headerHeight
        }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            // window.location.hash = hash;
        });
    } // End if

});

/*
    Nav with active class on scroll
*/

let mainNavLinks = document.querySelectorAll(".nav__link");
let mainSections = document.querySelectorAll(".section-nav");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY + headerHeight;

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

let scrollWidth = window.innerWidth - document.documentElement.clientWidth;

$('.darken-bg').on('click', closeModal);
$('.js-open-modal').on('click', openModal);

function openModal() {
    $('.modal').fadeIn();
    $('.darken-bg').fadeIn();
    $('body').addClass('locked');
    $('body').css('padding-right', scrollWidth)
};
function closeModal() {
    $('.modal').fadeOut();
    $('.darken-bg').fadeOut();
    $('body').removeClass('locked');
    $('body').css('padding-right', '0');
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