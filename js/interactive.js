/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () { "use strict";

       //  $(".hyde").hide();







   /* for (let i = 0; i < 122; i++) {
        $('#map-' + i).click( function(){
            $(".hyde").hide(500);
            $(".a"+i).toggle(500);
        });
    }*/



    for (let i = 0; i < 125; i++) {
        $('#map-' + i).click( function(){
            $('#area').load('content/area'+i+'.html');
            $(".a1").modal();
        });
    }





/*    var $body = $(document.body);
    var navHeight = $('.navbar').outerHeight(true) + 10;


    $('#sidebar').affix({
        offset: {
            /!* affix after top masthead *!/
            top: function () {
                var navOuterHeight = $('#masthead').height();
                return this.top = navOuterHeight;
            },
            /!* un-affix when footer is reached *!/
            bottom: function () {
                return (this.bottom = $('footer').outerHeight(true))
            }
        }
    });

    $body.scrollspy({
        target: '#leftCol',
        offset: navHeight
    });*/




     
        
     });



/* MODAL POPUP */


/*
for (let i = 0; i < 122; i++) {


    $(".a"+i).dialog(

        {autoOpen: false,
        });
    $('#map-' + i).click( function(){

        $(".a"+i).dialog("open" );

    });
}
*/







/* INTERAKTIEVE KARTE
    * aus JSON wird anhand von Attributen (z.B:dienstleistung /ture false) classenatrribute gesteuert 
    */
    





        $.getJSON('json_mieter.json', function(data) {
       
            
            $(".checkbox").on("change", function() {
  

      
                for (i = 0; i < data.mieter.length+1; i++) {
                    num=i+1;
                    var n = num.toString();
         
      
                    if ( ((data.mieter[i].dienstleistung=="true")&&($('#dienstleistung').is(':checked'))) ||  ((data.mieter[i].vermietet=="true")&&($('#vermietet').is(':checked'))) || ((data.mieter[i].einzelhandel=="true")&&($('#einzelhandel').is(':checked'))) || ((data.mieter[i].gastronomie=="true")&&($('#gastronomie').is(':checked'))) || ((data.mieter[i].lebensmittel=="true")&&($('#lebensmittel').is(':checked')))  )    {
                                               
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
                
   




    