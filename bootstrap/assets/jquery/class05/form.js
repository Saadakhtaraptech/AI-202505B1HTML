$(document).ready(function(){


    // NAME VALIDATION

    $("#name").keyup(function(){
        let name = $(this).val()
        let nameRe = /^[a-zA-Z\s]{3,}$/

        if(!nameRe.test(name)){
            $(this).next("span").show().text("Only Allow Alphabates").css("color","red")
            $(this).css("border","2px solid red")
        }else{
            $(this).next("span").hide()
            $(this).css("border", "2px solid green")
        }
    })

    // Email

    
    $("#email").keyup(function(){
        let name = $(this).val()
        let emailRe = /^[a-z0-9\_\.]{4,}[@][a-z]{5,}[.][a-z]{3,}$/

        if(!emailRe.test(name)){
            $(this).next("span").show().text("use format only").css("color","red")
            $(this).css("border","2px solid red")
        }else{
            $(this).next("span").hide()
            $(this).css("border", "2px solid green")
        }
    })
})                 