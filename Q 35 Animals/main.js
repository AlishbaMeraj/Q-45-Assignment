// creating a array
var animal_list = ["Cat", "Dog", "Rabbit"];
// using for loop
for (var _i = 0, animal_list_1 = animal_list; _i < animal_list_1.length; _i++) {
    var oneanimal_list = animal_list_1[_i];
    console.log("A ".concat(oneanimal_list, " would make a great pet."));
}
// print a message outside of for-loop
console.log("Any of these animals would make a great pet!");
