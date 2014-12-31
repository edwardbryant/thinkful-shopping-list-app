
$(document).ready(function(){
    updateTotal("need");
    updateTotal("got");
});

function Total(type) {
    return $("#" + type).find(".item").length;
}

function updateTotal(type) {
    var total = Total(type);
    $("#" + type).find(".total").text(total);
} 
