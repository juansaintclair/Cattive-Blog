 $(function () {
 
 //box Fixo
    $(window).scroll(function(){
        FixedBoxCattive();
    });
    
     $(window).resize(function(){
        FixedBoxCattive();
     });  
     
     function FixedBoxCattive() {
        $valor_atual = $(document).scrollTop();
        $width_atual = $(document).width();
        if ($valor_atual >= 810 && $width_atual >= 752){
         $('.container-cattive-box').addClass('fixed');
         ResizeBoxCattive();
        }
        else {
         $('.container-cattive-box').removeClass('fixed');
        }
        
        if ($width_atual < 768) {
            $('.novidades-cattive-box').css('width','100%');
        }
     }
     
     function ResizeBoxCattive() {
         $divWdth = $('.novidades-cattive').width();
         $('.novidades-cattive-box').css('width', $divWdth);
     }  
	
    });