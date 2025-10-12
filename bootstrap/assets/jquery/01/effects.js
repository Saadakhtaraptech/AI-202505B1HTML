$(document).ready(function() {
    $("#hide").click(function() {
        $("p").hide(2000);
    });
    $("#show").click(function() {
        $("p").show(2000, function(){
            alert("The paragraph is now visible.");
        });
    });
    $("#toggle").click(function() {
        $("p").toggle();
    });
});