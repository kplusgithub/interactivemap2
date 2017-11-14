/**
 * Created by t.geiger on 14.06.2017.
 */

$(document).ready(function () {
    "use strict";


    /* SIDENAV*/


    $(window).scroll(function () {
        var threshold = 9800;   //THIS MUST BE CHANGED


        if ($(window).scrollTop() >= threshold)
            $('#sidebar').addClass('fixed');
        else
            $('#sidebar').removeClass('fixed');
        var checkcontent = $("#content").height() * -1;
        var check = $("#content").height() - $("#sidebar").height();
        if ($(window).scrollTop() >= check) {
            $('#sidebar').addClass('bottom');
            $(".bottom").css({"bottom": checkcontent});

        }
        else {
            $(".bottom").css({"bottom": 50});
            $('#sidebar').removeClass('bottom');
        }
    });

});