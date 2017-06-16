/**
 * Created by t.geiger on 14.06.2017.
 */

$(document).ready(function () {
    "use strict";


    /* SIDENAV*/


    $(window).scroll(function () {
        var threshold = 1;


        if ($(window).scrollTop() >= threshold)
            $('#sidebar').addClass('fixed');
        else
            $('#sidebar').removeClass('fixed');
        var checkcontent = $("#content").height() * -1 + 200;
        var check = $("#content").height() - $("#sidebar").height() - 21;
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