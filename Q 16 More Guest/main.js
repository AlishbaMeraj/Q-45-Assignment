"use strict";
let Guest_list = ['Baber Azam', 'Shadab Khan', 'Naseem Shah', 'Imran Khan', 'Hassan Ali',];
let message = ' We Invited Few Captain For A Dinner Please Come On Tomorrow.';
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Respected Sir,' + '\n' + Guest_list[i] + ',\n' + '\n' + message + '\n' + '\n' + 'ThankYou' + '\n');
}
// question 15
let Absent = 'Hassan Ali';
let new_Guest = 'Amir Khan';
Guest_list[4] = new_Guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Respected Sir,' + '\n' + Guest_list[i] + ',\n' + '\n' + ' We Invited Few Captain For A Dinner Please Come On Tomorrow.' + '\n' + '\n' + 'ThankYou' + '\n');
}
console.log(`Mr. ${Absent} will not coming tomorrow dinner. `);
// question 16
Guest_list.unshift('Rizwan', 'Virat kholi', 'Shaheen Afridi');
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Respected Sir,' + '\n' + Guest_list[i] + ',\n' + '\n' + ' We Invited Few Captain For A Dinner Please Come On Tomorrow.' + '\n' + '\n' + 'ThankYou' + '\n');
}
