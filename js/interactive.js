/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () { "use strict";










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





            //anzahl rows
            modulo=5;


            var anzahlbase= 14;
            var anzahleg=27;
            var anzahlog=33;

            egdiff=(anzahlbase+1)%modulo;

            ogdiff=(anzahleg+1)%modulo;


            // BASE TABLE

            var contentbase = "<tr>";

            for (j = 0; j < anzahlbase; j++) {

                contentbase += '<td>' + data.mieter[j].id + " " + data.mieter[j].name + '</td>';

                if (((j + 1) % modulo == 0) && (j != 0)) {
                    contentbase += '</tr>' + '<tr>';

                }

            }
            contentbase += '</tr>';

            $('#baseTable tbody').append(contentbase);



        //EG TABLE

            var contenteg = "<tr>";

            for (j = anzahlbase; j < anzahleg; j++) {

                contenteg += '<td>' + data.mieter[j].id + " " + data.mieter[j].name + '</td>';

                if (((j - egdiff+2) % modulo == 0) && (j != 0)) {
                    contenteg += '</tr>' + '<tr>';

                }

            }
            contenteg += '</tr>';

            $('#egTable tbody').append(contenteg);


            //OG TABLE


            var contentog = "<tr>";

            for (j = anzahleg; j < anzahlog; j++) {

                contentog += '<td>' + data.mieter[j].id + " " + data.mieter[j].name + '</td>';

                if (((j - ogdiff+2) % modulo == 0) && (j != 0)) {
                    contentog += '</tr>' + '<tr>';

                }

            }
            contentog += '</tr>';

            $('#ogTable tbody').append(contentog);








            $(".checkbox").on("change", function() {
  

      
                for (i = 0; i < data.mieter.length+1; i++) {
                    num=i+1;
                    var n = num.toString();




      
                    if ( ((data.mieter[i].dienstleistung==="true")&&($('#dienstleistung').is(':checked'))) ||  ((data.mieter[i].einzelhandel==="true")&&($('#einzelhandel').is(':checked'))) || ((data.mieter[i].gastronomie==="true")&&($('#gastronomie').is(':checked'))) || ((data.mieter[i].lebensmittel==="true")&&($('#lebensmittel').is(':checked')))  )    {
                                               
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
                
   




    