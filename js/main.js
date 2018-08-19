//Wait until page loads

$(document).ready(function() {
    $(".backPhoto").addClass("animateFadeIn");
});

//Navbar Collapse

$(document).ready(function(){
  $('.nav-hide').on('click',function() {
    $('.navbar-collapse').collapse('hide');
  });
});

//Go down arrow

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    }
  });
});

//Navbar Opacity
/*
$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 0) {
      $("#myNavbar").css({"opacity" : "1"})
    }
    else {
      $("#myNavbar").css({"opacity" : "0"})
    }
  })
})
*/
$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});

//Google Map
// Initialize and add the map
function initMap() {
  // The location of Lumarc 41.067318, 1.057415
  var lumarc = {lat: 41.067318, lng: 1.057415};
  // The map, centered at lumarc
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 19, center: lumarc});
  // The marker, positioned at lumarc
  var marker = new google.maps.Marker({position: lumarc, map: map});
}

//InstaFeed

$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '988779762',
        limit: 50,
        resolution: 'standard_resolution',
        accessToken: '988779762.1677ed0.f57b0797fbf4439985131c7de563cbd5',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });
});