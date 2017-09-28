function next(elem) {
    do {
        elem = elem.nextSibling;
    } while (elem && elem.nodeType !== 1);
    return elem;
}


var gapanalyse=0;

var elem = document.getElementById('interview');
var nextElem = next(elem);


var elem1 = document.getElementById('interview1');
var nextElem1 = next(elem1);

var elem2 = document.getElementById('interview2');
var nextElem2 = next(elem2);

var elem3 = document.getElementById('interview3');
var nextElem3 = next(elem3);

var elem4 = document.getElementById('interview4');
var nextElem4 = next(elem4);

var gappa =document.getElementById("gapanalyse");


var treshold =200;

$(nextElem).hide();
$(nextElem1).hide();
$(nextElem2).hide();
$(nextElem3).hide();
$(nextElem4).hide();


if (nextElem){
    $("#interview").click(function () {

        $(nextElem).fadeToggle("slow");
        gapanalyse += 200;



       // gappa.style.marginTop = gapanalyse.toString() + "px";
        if(gapanalyse > treshold) {
        gappa.style.marginTop = "400px";}
    })
};

if (nextElem1){
    $("#interview1").click(function () {

        $(nextElem1).fadeToggle("slow");
        gapanalyse += 200;
        if(gapanalyse > treshold) {
            gappa.style.marginTop = "400px";
            gapanalyse = 0;
        }
            else {gappa.style.marginTop = "40px"}
    })
};

if (nextElem2){
    $("#interview2").click(function () {

        $(nextElem2).fadeToggle("slow");
        gapanalyse += 200;
        if(gapanalyse > treshold) {
            gappa.style.marginTop = "400px";}
    })
};

if (nextElem3){
    $("#interview3").click(function () {

        $(nextElem3).fadeToggle("slow");
        gapanalyse += 200;
        if(gapanalyse > treshold) {
            gappa.style.marginTop = "400px";}
    })
};

if (nextElem4){
    $("#interview4").click(function () {

        $(nextElem4).fadeToggle("slow");
        gapanalyse += 200;
        if(gapanalyse > treshold) {
            gappa.style.marginTop = "400px";}
    })
};


