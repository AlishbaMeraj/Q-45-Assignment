let Guest_list : string[] = ['Baber Azam','Shadab Khan','Naseem Shah','Imran Khan','Hassan Ali',];
let message : string = ' We Invited Few Captain For A Dinner Please Come On Tomorrow.'
for(let i=0; i<Guest_list.length; i++){
console.log('Respected Sir,' + '\n'+ Guest_list[i] + ',\n'+ '\n'+ message + '\n' + '\n' + 'ThankYou' +'\n');
}
// question 15
let Absent : string = 'Hassan Ali';
let new_Guest : string = 'Amir Khan';
Guest_list[4] = new_Guest;
for(let i=0; i<Guest_list.length; i++){
console.log('Respected Sir,' + '\n'+ Guest_list[i] + ',\n'+ '\n'+ message + '\n' + '\n' + 'ThankYou' +'\n');}
console.log(`Mr. ${Absent} will not coming tomorrow dinner. `)