var alien_color = "green";
// using if and else-if statement
if (alien_color === "green") {
    console.log("(version 1 )the player earned 5 points.");
}
else if (alien_color === "yellow") {
    console.log("the player earned 10 points.");
}
else if (alien_color === "red") {
    console.log("the player earned 15 points.");
}
;
// version 2
var alien_color2 = "yellow";
if (alien_color2 === "green") {
    console.log("the player earned 5 points.");
}
else if (alien_color2 === "yellow") {
    console.log("(version 2)the player earned 10 points.");
}
else if (alien_color2 === "red") {
    console.log("the player earned 15 points.");
}
;
// version 3
var alien_color3 = "red";
if (alien_color3 === "green") {
    console.log("the player earned 5 points.");
}
else if (alien_color3 === "yellow") {
    console.log("(version 2)the player earned 10 points.");
}
else if (alien_color3 === "red") {
    console.log("(version 3)the player earned 15 points.");
}
else {
    console.log("please select right color");
}
