$(document).ready(function(){

    function loadpage(page){
        $.ajax({
            url : page + ".html",
            success : function(data){
                $("#content").html(data)
            }
        })
    }

    $("#index").click(function(e){
        e.preventDefault();
        loadpage("home")
    })
         
    $("#about").click(function(e){
        e.preventDefault();
        loadpage("about")
    })

    $("#contact").click(function(e){
        e.preventDefault();
        loadpage("contact")
    })

    $("#service").click(function(e){
        e.preventDefault();
        loadpage("service")
    })

    $("#gallery").click(function(e){
        e.preventDefault();
        loadpage("gallery")
    })
    loadpage("index")
})
