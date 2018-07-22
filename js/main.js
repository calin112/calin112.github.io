$(document).ready(function(){
  $('.nav-hide').on('click',function() {
    $('.navbar-collapse').collapse('hide');
  });
});

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
