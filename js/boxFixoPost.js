 $(function () {
 
 
     var length = $('#sidebar-right').height() - $('#sidebar').height() + $('#sidebar-right').offset().top;
      
    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        var height = $('#sidebar').height() + 'px';
        
         console.log(scroll);
        console.log(length);
        
        if (scroll <= 126) {
            $('#sidebar').css({
                'position': 'absolute',
                'top': '0'
            });

        } 
        else if (scroll > length-70) {
            
            $('#sidebar').css({
                'position': 'absolute',
                'top': 'auto',
                'bottom': '10px',
                'height' : height
            });
            
          //quando o scroll ta rolando e passa do menu  
        } else {
            $('#sidebar').css({
                'position': 'fixed',
                'top': '55px',
                'height': height
            });

        }
    });
  
	
});