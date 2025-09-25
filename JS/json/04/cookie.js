// localStorage

localStorage.setItem("name", "saad")
localStorage.setItem("email", "saad@gmail.com")

let data = localStorage.getItem("name")
document.write(data)

// sessionStorage

sessionStorage.setItem("name", "hasnain")
alert (sessionStorage.getItem("name"))


// cookies 

document.cookie = "cookie1 = hello" //non persistent//
document.cookie = "cookie2 = hello world, max-age"+60*60*24
document.cookie = "cookie3 = hello world, max-age"+60