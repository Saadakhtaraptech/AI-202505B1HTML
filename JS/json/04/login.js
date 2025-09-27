
// sign in 
let login = document.getElementById("login")

login.addEventListener("submit", function(e){
 e.preventDefault()

let email = document.getElementById("email").value
let pass = document.getElementById("pass").value

let user = JSON.parse(localStorage.getItem("users")) || [];


let foundUser = user.find(u => u.email === email && u.pass === pass)

console.log(foundUser)

if(foundUser){
    localStorage.setItem("loggedInUser",JSON.stringify(foundUser))

    alert("Login Completed")
    location.assign("welcome.html")
}
else{
    alert("email id or password incorrect")
    window.location.href = "login.html"
}
})