// making a function
function make_shirt (size : string = "large", printmessage : string = "I love typeScript"){
    console.log(`creating a ${size} size shirt with the ${printmessage} prints on shirt.`)
}
// calling a function with by-default value
make_shirt();

// calling a function now with medium size and default message 
make_shirt("medium");

// calling a function now with small size and also different print message
make_shirt("small" , "I love javaScript")
