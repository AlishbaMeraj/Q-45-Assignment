var userNames = ["Subhan", "Hunain", "Anas", "Admin", "Adan", "annu"];
// "FOREACH " one by one sari values ko check kary ga or variable ma save kary ga
userNames.forEach(function (oneuser) {
    if (oneuser === "Admin") {
        console.log("Hello ".concat(oneuser, ", would you like to see a status report?"));
    }
    else
        (console.log("hello ".concat(oneuser, ", thank you for logging in again.")));
});
