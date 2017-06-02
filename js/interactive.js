/*  Script for show hide divs */




     $(document).ready(function() {
         
         $(".hyde").hide();
         
         
/*  Loop durch alle datensätze in der json datei*/         


         
         
       for(let i = 0; i < 53; i++) {
           $('#map-' + i).click( function(){
               $(".hyde").hide(500);
            $(".a"+i).toggle(500);;
            });
       }
         
         
    
         
     
        
     });



/* INTERAKTIEVE KARTE
    * aus JSON wird anhand von Attributen (z.B:dienstleistung /ture false) classenatrribute gesteuert 
    */
    





        $.getJSON('json_mieter.json', function(data) {
       
            
            $(".checkbox").on("change", function() {
  

      
                for (i = 0; i < data.mieter.length+1; i++) {
                    num=i+1;
                    var n = num.toString();
         
      
                    if ( ((data.mieter[i].dienstleistung=="true")&&($('#dienstleistung').is(':checked'))) || ((data.mieter[i].einzelhandel=="true")&&($('#einzelhandel').is(':checked'))) || ((data.mieter[i].gastronomie=="true")&&($('#gastronomie').is(':checked'))) || ((data.mieter[i].lebensmittel=="true")&&($('#lebensmittel').is(':checked')))  )    {
                                               
                       // $('.map-'+ n).css('opacity',1.0);
                       $('#map-'+ n).fadeTo(1000, 1.0);
                    }
                    else {         
                       // $('.map-'+ n).css('opacity',0.2);
                         $('#map-'+ n).fadeTo(1000, 0.3);
                    }   
          
                }
    
            });
                
        });
                
   




    