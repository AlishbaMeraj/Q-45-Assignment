let userNames = ["Subhan" , "Hunain" , "Anas" , "Admin" , "Adan"]

// remove all values from our array now our array is empty
userNames = []

// if statment for checking length of our array is empty 
if (userNames.length === 0){
    console.log("your Array is Empty we need to find some users!")
}else{
    //if array is not empty use foreach loop on array
    userNames.forEach(oneuser =>{
        if(oneuser === "Admin"){
         console.log(`Hello ${oneuser}, would you like to see a status report?`)
        }else(
            console.log(`hello ${oneuser}, thank you for logging in again.`)
        )
    })
}