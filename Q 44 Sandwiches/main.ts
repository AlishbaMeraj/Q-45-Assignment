// define a function with a rest parameter that accept items arugment representing our sandwich

function makeSandwich(...items: string[]){
    console.log("making a sandwich with the following items: \n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\nNow Enjoy Sandwich");
}

//call the function 3 times with 3 different number of arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");


makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Butter", "Chicken", "Cheese", "Mayo", "Egg", "Tomato");