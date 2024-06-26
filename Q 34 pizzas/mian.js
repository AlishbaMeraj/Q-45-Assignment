//creating a array
var favorite_pizza = ["chicken tikka", "chicken fatija", "bbq", "malai cheese"];
//using for-loop
for (var _i = 0, favorite_pizza_1 = favorite_pizza; _i < favorite_pizza_1.length; _i++) {
    var one_favorite_pizza = favorite_pizza_1[_i];
    console.log("I like ".concat(one_favorite_pizza, " pizza"));
}
//print a meesage outside of the for-loop
console.log("pizza is love");
