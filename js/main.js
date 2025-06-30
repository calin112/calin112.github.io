//Initialize AOS
AOS.init();

//Navbar Collapse

$(document).ready(function(){
  $('.nav-hide').on('click',function() {
    $('.navbar-collapse').collapse('hide');
  });
});

//Header logo, header and navbar animation

$("#logo img").addClass("load");

$("#header").addClass("load");

$("#mynavbar").addClass("load");

//InstaFeed

$(document).ready(function() {
    var userFeed = new Instafeed({
        get: 'user',
        userId: '8614611355',
        limit: 9,
        resolution: 'standard_resolution',
        accessToken: '8614611355.1677ed0.ceda1550782e45e0b801ebf66d00b02f',
        sortBy: 'most-recent',
        template: '<div class="col-lg-4 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
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

//Swiper

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

//Google Maps

// Initialize and add the map
function initMap() {
  // The location of Lumarc 41.067318, 1.057415
  var lumarc = {lat: 41.0676578, lng: 1.0547679};
  // The map, centered at lumarc
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 18, center: lumarc});
  // The marker, positioned at lumarc
  var marker = new google.maps.Marker({position: lumarc, map: map});
}
