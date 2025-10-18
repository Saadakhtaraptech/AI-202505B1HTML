$(document).ready(function(){
    
    $("#animate").click(function(){

        if(!animate){
            $(".box").animate({
                "left": '300px',
                "borderRadius": '100px',
                "height": '200px',
                "width": '200px',
            });
            animate = true
        }else{
            $(".box").animate({
                "left": '0px',
                "borderRadius": '0px'
            }, 2000);
        }
    })
})