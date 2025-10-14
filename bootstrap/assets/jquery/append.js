$(document).ready(function(){
    // $("#add").click(function(){
    //     $("p").addClass("bg-info")
    // })

    // $("#remove").click(function(){
    //     $("p").removeClass("bg-info")
    // })

    //  $("#toggle").click(function(){
    //     $("p").toggleClass("highlight")
    // })

    $("#after").click(function(){
        ("#list").after("<li>PHP</li>")
    })

    $("#before").click(function(){
        ("#list").before("<li>PHP</li>")
    })

    // let item = ["xml/json","adv js","mysql","php","laravel"]
    // let index = 0;

    // $("#append").click(function(){
    //     if(index < item.length){
    //         $("#append").append("<li>" + item[index] + "</li>")
    //         index++
    //     }else{
    //         alert("Items added")
    //     }
    // })

    // $("#prepend").click(function(){
    //     if(index < item.length){
    //         $("#prepend").append("<li>" + item[index] + "</li>")
    //         index++
    //     }else{
    //         alert("Items added")
    //     }
    // })
})