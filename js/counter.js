
temp=0;

    function testScroll(evesa) {
        if (window.pageYOffset > 400 && window.pageYOffset < 420 ) {
                    temp+=1;
            console.log("Haltepunkt");
        console.log(temp);


        $('.count-1').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });




        });

        }


    }


    window.onscroll = testScroll










