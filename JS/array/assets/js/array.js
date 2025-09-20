// Array

// let color = ["red", "green", "blue", "yellow", "black", "white"];

// document.write(color[2],"<br>",color[4],"<br>",color[3],"<br>",color[5],"<br>")
// document.write(color.length)
// document.write(color[0], "<br>")
// document.write(color[1], "<br>")
// document.write(color[2], "<br>")
// document.write(color[3], "<br>")
// document.write(color[4], "<br>")
// document.write(color[5], "<br>")



// multi dimensional array

// let courses = [
//     ["html", "css", "js", "bootstrap", "jquery"] ,
//     ["xml", "json", "adv.js", "mysql", "php"],
//     ["sql server", "c#", "net", "angular"],
// ]
// document.write(courses[0][3], "<br>", courses[1][1], "<br>")
// console.log(courses)


// document.write(courses)
// for(let value of courses){
//     document.write(value[2], "<br>" [0], "<br>")
// }

// for(value of courses){
//     for (data of value){
//         document.write(data, "<br>")
//     }
// }



// method array

// let color = ["red", "green", "blue", "yellow", "black", "white"];

// color.push("purple")  // add last
// color.unshift("pink") // add first
// color.pop()          // remove last
// color.shift()       // remove first
// color.splice(2, 3) // remove specific index
// document.write(color, "<br>")



// Invoke Function 

// let myName = prompt("Enter Your Name")
// function mypp(Name){
//     document.write(Name, "<br>")
// }

// mypp(myName)
// mypp("Hello")


// events 

// let myapp = (num1, num2) => document.write(num1 + num2)


// let btn  = document.getElementById("btn")
// btn.onclick = () => document.write("Hello World")
// btn.onmouseup = () => document.write("Hello World onmouseup")


// window events

// window.onload = () => {
//     alert("welcome")
// }

// window.onresize = () => {
//     console.log("window is resize")
// }


// let anchor = document.getElementById("anchor")
// anchor.onclick = function (){}


// object \

let student = {
id:"804",
name:"saad",
email:"saad@gmial.com",
age:"18"
}


for(value in student){
    document.write(value,":",student[value], "<br>" )
}