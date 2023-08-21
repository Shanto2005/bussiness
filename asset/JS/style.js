// number count for ts, using jQuerysta animate

$('.counting').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 3000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  

});

$(document).ready(function () {
  $('.main-iso').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
  });

  $('.iso-nav ul li').click(function () {
    //ACTIVE CLASS
    $('.iso-nav ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.main-iso').isotope({
      filter: selector
    });
    return false;
  })
})


document.addEventListener(
  "DOMContentLoaded", () => {
      const menu = new MmenuLight(
          document.querySelector( "#mntk_mmenu" ),
          "(max-width: 1400px)"
      );

      const navigator = menu.navigation();
      const drawer = menu.offcanvas();

      document.querySelector( "a[href='#mntk_mmenu']" )
          .addEventListener( "click", ( evnt ) => {
              evnt.preventDefault();
              drawer.open();
          });
  }
);