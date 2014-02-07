//checkbox

$("input:checkbox").not(".checkbox input").wrap(function() {
    var claz ="";
    if ($(this).attr("class")) {
        claz = $(this).attr("class")
    };
    return "<div class='checkbox "+ claz +"'>";
})

$(document).on("click","input:checkbox",function() {        
    $(this).parent(".checkbox").toggleClass("checked")
})

// radio
$("input:radio").not(".radio input").wrap(function() {
    var claz ="";
    if ($(this).attr("class")) {
        claz = $(this).attr("class")
    };
    return "<div class='radio "+claz +"'>";
})
$("input:radio").click(function() {
    name = $(this).attr("name");
    $("input:radio[name="+ name +"]").parent(".radio").removeClass("checked");
    $(this).parent(".radio").addClass("checked")
})