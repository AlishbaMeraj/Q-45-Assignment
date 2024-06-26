function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));

}

// function to make magicians great through .map() it will modify array
function make_great(magicians: string[]){
   return magicians.map(name => `The Great ${name}`);
}

// define an array of magicians names
let magicians_names = ["harry poter","anas","fahad"]

// call make_great function to modify magicians names
let copy_magician_names = magicians_names.slice();

// call show_magicians that show modified list of magicians
let copy_great_magicians = make_great(copy_magician_names);


// show both arrays original and copied

// original
console.log("orginal array\n")
show_magicians(magicians_names);

// copied
console.log("\ncopied array\n")
show_magicians(copy_great_magicians);