
// sign in 
let login = document.getElementById("login")

login.addEventListener("submit", function(e){
 e.preventDefault()

let email = document.getElementById("email").Value
let pass = document.getElementById("pass").value

let user = JSON.parse(localStorage.getItem("users")) || [];

let foundUser = user.find(u => u.email === email && u.pass === pass)

if(foundUser){
    localStorage.setItem("loggedInUser", JSON.stringify(foundUser))

    alert("Login Completed")
    location.assign("Welcome.html")
}
else{
    alert("email id or password incorrect")
    window.location.href = "login.html"
}
})