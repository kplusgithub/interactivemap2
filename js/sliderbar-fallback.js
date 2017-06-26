

jQuery("#Slider11").slider({
    from: 0,
    to: 100,
    step: 0.1,
    smooth: true,
    round: 0,
    skin: "round",



    onstatechange: function (ui) {


        $(".strategie01").css({height: 50 - ui*0.1});
        $(".strategie02").css({height: 90 + ui*0.10});
        $(".strategie03").css({height: 70 - ui*0.18});
        $(".strategie04").css({height: 40 - ui*0.1});
        $(".strategie05").css({height: 20 - ui*0.02});
    }



});








jQuery("#Slider12").slider({
    from: 0,
    to: 100,
    step: 0.1,
    smooth: true,
    round: 0,
    skin: "round",



    onstatechange: function (ui) {


        $(".diagram-1").css( {opacity: 1-ui*0.01 });
        $(".diagram-2").css( {opacity: ui*0.01 });
    }



});