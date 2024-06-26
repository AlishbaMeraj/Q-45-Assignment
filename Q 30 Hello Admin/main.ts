let userNames = ["Subhan" , "Hunain" , "Anas" , "Admin" , "Adan"];
// "FOREACH " one by one sari values ko check kary ga or variable ma save kary ga
userNames.forEach(oneuser =>{
    if(oneuser === "Admin"){
     console.log(`Hello ${oneuser}, would you like to see a status report?`)
    }else(
        console.log(`hello ${oneuser}, thank you for logging in again.`)
    )
});