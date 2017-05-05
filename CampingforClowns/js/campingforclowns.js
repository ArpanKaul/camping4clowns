 $(function(){
   $('a[href*=#about]:not([href=#about])').click(function() {
       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
           $('html,body').animate({
             scrollTop: (target.offset().top - 50) // adjust this according to your content
           }, 1000);
           return false;
         }
       }
   });
 });