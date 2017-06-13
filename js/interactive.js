/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () { "use strict";

       //  $(".hyde").hide();









    for (let i = 0; i < 139; i++) {
        $('#map-' + i).click( function(){
            $('#area').load('content/area'+i+'.html');
            $(".a1").modal();
        });
    }






     
        
     });



/* SIDENAV*/


$(window).scroll(function () {
    var threshold = 50;



    if ($(window).scrollTop() >= threshold)
        $('#sidebar').addClass('fixed');
    else
        $('#sidebar').removeClass('fixed');
    var checkcontent = $("#content").height()*-1+200;
    var check = $("#content").height() - $("#sidebar").height()-21;
    if ($(window).scrollTop() >= check) {
        $('#sidebar').addClass('bottom');
        $(".bottom").css({"bottom": checkcontent});}
    else{
        $(".bottom").css({"bottom": 250});
        $('#sidebar').removeClass('bottom');}
});





/* INTERAKTIEVE KARTE
    * aus JSON wird anhand von Attributen (z.B:dienstleistung /ture false) classenatrribute gesteuert 
    */
    





        $.getJSON('json_mieter.json', function(data) {


            for (i = 0; i < data.mieter.length + 1; i++) {

                if(i%5==0) {

                    $('#myTable tbody').append([
                        '<tr>',
                        '<td>',
                        data.mieter[i].id,
                        " ",
                        data.mieter[i].name,
                        '</td>',

                        '<td>',
                        data.mieter[i+1].id,
                        " ",
                        data.mieter[i+1].name,
                        '</td>',

                        '<td>',
                        data.mieter[i+2].id,
                        " ",
                        data.mieter[i+2].name,
                        '</td>',

                        '<td>',
                        data.mieter[i+3].id,
                        " ",
                        data.mieter[i+3].name,
                        '</td>',

                        '<td>',
                        data.mieter[i+4].id,
                        " ",
                        data.mieter[i+4].name,
                        '</td>',

                        '</tr>'
                    ].join(''));

                }


            }


            $('#myTable tbody').append([
                '<tr>',
                '<td>',
               "HellO",
                '</td>',
                '</tr>'
            ].join(''));






            
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
                
   




    