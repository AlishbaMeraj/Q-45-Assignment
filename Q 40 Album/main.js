// define the make_album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling three function and creating 3 variable with different values
var album1 = make_album("yahya", "album title 1");
var album2 = make_album("subhan", "album title 2");
var album3 = make_album("adan", " album title 3", 5);
// print values of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);