/*  Script for show hide divs */




     $(document).ready(function(){
         
         $(".hyde").hide();
         
         
         
         $("#area1").click(function(){
            $(".hyde").hide(500);
            $(".a1").toggle(500);
             
            
         });
         
        $("#area2").click(function(){
            $(".hyde").hide(500);
            $(".a2").toggle(500);
         });
         
          $("#area3").click(function(){
            $(".hyde").hide(500);
            $(".a3").toggle(500);
         });
         
         $("#area4").click(function(){
            $(".hyde").hide(500);
            $(".a4").toggle(500);
         });
         
         $("#area5").click(function(){
            $(".hyde").hide(500);
            $(".a5").toggle(500);
         });
         
         $("#area6").click(function(){
            $(".hyde").hide(500);
            $(".a6").toggle(500);
         });
         
         $("#area7").click(function(){
            $(".hyde").hide(500);
            $(".a7").toggle(500);
         });
         
         $("#area8").click(function(){
            $(".hyde").hide(500);
            $(".a8").toggle(500);
         });
         
         $("#area9").click(function(){
            $(".hyde").hide(500);
            $(".a9").toggle(500);
         });
         
         $("#area10").click(function(){
            $(".hyde").hide(500);
            $(".a10").toggle(500);
         }); 
         
         $("#area11").click(function(){
            $("#area11").css("opacity", 0.8);
            $("#area12").css("opacity", 0.4);
            $("#area13").css("opacity", 0.4);
             
            $(".hyde").hide(500);
            $(".a11").toggle(500);
         });
         
         $("#area12").click(function(){
            $("#area11").css("opacity", 0.4);
            $("#area12").css("opacity", 0.8);
            $("#area13").css("opacity", 0.4);
             
            $(".hyde").hide(500);
            $(".a12").toggle(500);
         });
         $("#area13").click(function(){             
            $("#area11").css("opacity", 0.4);
            $("#area12").css("opacity", 0.4);
            $("#area13").css("opacity", 0.8);
             
            $(".hyde").hide(500);
            $(".a13").toggle(500);
         });
     });



/* INTERAKTIEVE KARTE
    * aus JSON wird anhand von Attributen (z.B:dienstleistung /ture false) classenatrribute gesteuert 
    */
    





        $.getJSON('json_mieter.json', function(data) {
       
            
            $(".checkbox").on("change", function() {
  

      
                for (i = 0; i < data.mieter.length+1; i++) {
                    num=i;
                    var n = num.toString();
         
      
                    if ( ((data.mieter[i].dienstleistung=="true")&&($('#dienstleistung').is(':checked'))) || ((data.mieter[i].einzelhandel=="true")&&($('#einzelhandel').is(':checked'))) || ((data.mieter[i].gastronomie=="true")&&($('#gastronomie').is(':checked'))) || ((data.mieter[i].lebensmittel=="true")&&($('#lebensmittel').is(':checked')))  )    {
                                               
                       // $('.map-'+ n).css('opacity',1.0);
                       $('.map-'+ n).fadeTo(1000, 1.0);
                    }
                    else {         
                       // $('.map-'+ n).css('opacity',0.2);
                         $('.map-'+ n).fadeTo(1000, 0.1);
                    }   
          
                }
    
            });
                
        });
                
   




    