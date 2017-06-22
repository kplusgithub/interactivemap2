/**
 * Created by t.geiger on 22.06.2017.
 */
var datafirst = 0;
var datasecond = 0;

$("#slider1").slider({
    range: "min",
    value: 0,
    step: 0.1,
    min: 0,
    max: 100,
    slide: function( ev, ui ) {
        datafirst = ui.value;
        $("#bar").text( datafirst );
    }
});
$("#slider2").slider({
    range: "min",
    value: 0,
    step: 0.1,
    min: 0,
    max: 100,
    slide: function( ev, ui ) {
        datasecond = ui.value;
        $("#yeartotal").text( ui.value );




        $("#strategie01").css({height: ui.value*0.5});
       $("#strategie01").css({marginTop: ui.value*-1+220+50});

        $("#strategie02").css({height: ui.value});
        $("#strategie02").css({marginTop: ui.value*-1+220});

        $("#strategie03").css({height: ui.value*0.7});
        $("#strategie03").css({marginTop: ui.value*-1+220+30});

        $("#strategie04").css({height: ui.value*0.4});
        $("#strategie04").css({marginTop: ui.value*-1+220+60});

        $("#strategie05").css({height: ui.value*0.2});
        $("#strategie05").css({marginTop: ui.value*-1+220+80});




        $("#slidercontainer").css({marginBottom: ui.value-100});


    }






});


/*

$(document).ready(function(){
    $("button").click(function(){
        $("#strategie01").animate({

            height: '+=datafirst',
            top: '-=150px',
            width: '150px'
        });
    });
});*/
