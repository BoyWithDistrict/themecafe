!function($){
              $(document).on('click', 'a[href^=#]', function () {
              $('html, body').animate({ scrollTop:  $('a[name="'+this.hash.slice(1)+'"]').offset().top }, 1200 ); 
              return false;
              });
              }(jQuery);