//qq
$(document).ready(function () {
   var floor = 02;
   var floorPath = $('.home-image path')
   var flatsPath = $('.flats path')
   var counterup = $(".up");
   var counterdown = $(".down");
   var modal = $(".modal");
   var close = $('.modal-close-button')
   var viewFlats = $('.view-flats')

   floorPath.on('mouseover', function() {
      floorPath.removeClass('current-floor');
      floor = $(this).attr('data-floor');
      $('.counter').text(floor);

   });

   floorPath.on("click", toggleModal)

   close.on("click", toggleModal)

   flatsPath.on('mouseover', function() {
   })

   viewFlats.on('click', toggleModal)

   counterup.on('click', function() {
      if (floor < 18) {
         floor++
         usfloor = floor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false});
         $('.counter').text(usfloor);
         floorPath.removeClass('current-floor');
         $(`[data-floor=${usfloor}]`).toggleClass('current-floor');
      }
   });

   counterdown.on('click', function() {
      if (floor > 02) {
         floor--
         usfloor = floor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false});
         $('.counter').text(usfloor);
         floorPath.removeClass('current-floor');
         $(`[data-floor=${usfloor}]`).toggleClass('current-floor');
      }
   });
   function toggleModal() {
      modal.toggleClass("is-open");
   }
});
