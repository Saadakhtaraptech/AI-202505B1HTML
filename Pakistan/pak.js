$(document).ready(function(){
    
    function loadpage(page){
        $.ajax({
            url : page + ".html",
            success : function(data){
                $("#content").html(data)
            }
        })
    }

    $("#pak").click(function(e){
        e.preventDefault();
        loadpage("Pakistan")
    })
    
    $("#gilgit").click(function(e){
        e.preventDefault();
        loadpage("Gilgit")
    })

    $("#punjab").click(function(e){
        e.preventDefault();
        loadpage("Punjab")
    })

    $("#sindh").click(function(e){
        e.preventDefault();
        loadpage("Sindh")
    })

    $("#kpk").click(function(e){
        e.preventDefault();
        loadpage("KPK")
    })

    $("#balochistan").click(function(e){
        e.preventDefault();
        loadpage("Balochistan")
    })

    $("#inline").click(function(e){
        e.preventDefault();
        loadpage("Inline")
    })

    loadpage("Pakistan")
})