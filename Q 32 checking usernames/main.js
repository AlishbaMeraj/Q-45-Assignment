// Array of current users
var current_users = ["Anas", "subhan", "adan", "fatima", "fahad"];
// Array ofb new users
var new_users = ["Anas", "hunain", "Hamza", "ayat", "subhan"];
//loop through new_user to check for username avaibility
// (some) jab 2 arrays ko compare karty hain to some use karty hain
new_users.forEach(function (new_one_user) {
    //making a condition for username already exist 
    //print different mmessage using If_Else statements
    if (current_users.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_user.toLowerCase(); })) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
