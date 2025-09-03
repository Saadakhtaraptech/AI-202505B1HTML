// Array

// let color = ["red", "green", "blue", "yellow", "black", "white"];

// document.write(color[2],"<br>",color[4],"<br>",color[3],"<br>",color[5],"<br>",color[0],"<br>",color[1],"<br>")
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
// // document.write(courses[0][3], "<br>", courses[1][1], "<br>")
// // console.log(courses)


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
// color.splice(2, 0, "orange", "brown") // add specific index
// color.sort()       // sort array
// color.reverse()    // reverse array
// color.indexOf("green") // find index of element
// color.includes("blue") // check if element exists
// document.write(color, "<br>")




// // assignment


//  // 2D array (array ke andar array)
// //   let colors = [
// //     ["red", "green", "blue"],
// //     ["yellow", "black", "white"]
// //   ];

// //   document.write("<table border='1' cellspacing='0' cellpadding='5'>");

// //   // Outer loop (rows)
// //   for (let row of colors) {
// //     // document.write("<tr>");
    
// //     // Inner loop (columns)
// //     for (let col of row) {
// //       document.write("<td>" + col + "</td>");
// //     }

// //     document.write("</tr>");
// //   }



// // 2222222



// let players = [
//     { name: "HTML", Duration: "Three Months" },
//     { name: "JAVA SCRIPT", Duration: "Four Months" },
//     { name: "BOOTSTRAP", Duration: "Three Months" },
//     { name: "JQUERY", Duration: "Four Months" },
//     { name: "ANGULAR", Duration: "Four Months" }
//   ];

//   // Start table
//   document.write("<table border='1' cellspacing='0' cellpadding='5'>");

//   // Table header
//   document.write("<tr><th>S.NO</th><th>Course Name</th><th>Role</th></tr>");

//   // Loop through players
//   let sno = 1;
//   for (let p of players) {
//     // document.write("<tr>");
//     document.write("<td>" + sno + "</td>");
//     document.write("<td>" + p.name + "</td>");
//     document.write("<td>" + p.Duration + "</td>");
//     document.write("</tr>");
//     sno++;
  // }

  // End table
//   document.write("</table>");


// new assignment

// let myapp = (num1,num2) => document.write(num1-num2)


let btn = document.getElementById("btn");

btn.addEventListener("mouseclick", function(){

})

btn.addEventListener("mouseover", ()=>document.getElementById("p").innerHTML = "Mouse Over")