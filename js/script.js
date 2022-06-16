/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };


  (function($) {
    var type = new Typed('span.txt-rotate', {
        strings: ["   This web site is managed by the Council <br> of Higher Education "],
        typeSpeed: 50,
        backSpeed: 100,
        fadeOut: false,
        smartBackspace: true,
        loop: true,

    })
})($);


$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  dotes:true,
  nav:false,
  responsiveClass:true,
  autoplay:true,
  autoplayTimeout:4000,
  autoplayHoverPause:false,
  responsive:{
      0:{
          items:1,
          nav:false,
      },
      600:{
          items:2,
          nav:false,
      },
      1000:{
          items:3,
          nav:false,
          loop:false
      }
  }
});

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 400) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

  
