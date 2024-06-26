var Guest_list = ['Baber Azam', 'Shadab Khan', 'Naseem Shah', 'Imran Khan', 'Hassan Ali',];
var message = ' We Invited Few Captain For A Dinner Please Come On Tomorrow.';
for (var i = 0; i < Guest_list.length; i++) {
    console.log('Respected Sir,' + '\n' + Guest_list[i] + ',\n' + '\n' + message + '\n' + '\n' + 'ThankYou' + '\n');
}
// question 15
var Absent = 'Hassan Ali';
var new_Guest = 'Amir Khan';
Guest_list[4] = new_Guest;
for (var i = 0; i < Guest_list.length; i++) {
    console.log('Respected Sir,' + '\n' + Guest_list[i] + ',\n' + '\n' + ' We Invited Few Captain For A Dinner Please Come On Tomorrow.' + '\n' + '\n' + 'ThankYou' + '\n');
}
console.log("Mr. ".concat(Absent, " will not coming tomorrow dinner. "));
// question 16
Guest_list.unshift('Rizwan', 'Virat kholi', 'Shaheen Afridi');
for (var i = 0; i < Guest_list.length; i++) {
    console.log('Respected Sir,' + '\n' + Guest_list[i] + ',\n' + '\n' + ' We Invited Few Captain For A Dinner Please Come On Tomorrow.' + '\n' + '\n' + 'ThankYou' + '\n');
}
// question 17
console.log('unfortunately, the new dinner table wont arrive on time, so I can only invite two Guests to dinner with me ');
while (Guest_list.length > 2) {
    var removedGuest = Guest_list.pop();
    console.log("sorry, ".concat(removedGuest, " I cant invite you to dinner"));
}
console.log("Invitations to the last 2 Guests");
Guest_list.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ", you are still invited to dinner")); });
Guest_list.pop();
Guest_list.pop();
console.log("Empty list:", Guest_list);
