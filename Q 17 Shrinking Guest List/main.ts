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
console.log('Respected Sir,' + '\n'+ Guest_list[i] + ',\n'+ '\n'+ ' We Invited Few Captain For A Dinner Please Come On Tomorrow.' + '\n' + '\n' + 'ThankYou' +'\n');}
console.log(`Mr. ${Absent} will not coming tomorrow dinner. `)

// question 16
Guest_list.unshift('Rizwan','Virat kholi','Shaheen Afridi',);
for(let i=0; i<Guest_list.length; i++){
    console.log('Respected Sir,' + '\n'+ Guest_list[i] + ',\n'+ '\n'+ ' We Invited Few Captain For A Dinner Please Come On Tomorrow.' + '\n' + '\n' + 'ThankYou' +'\n');}


// question 17

console.log('unfortunately, the new dinner table wont arrive on time, so I can only invite two Guests to dinner with me ');
while(Guest_list.length > 2){
    let removedGuest = Guest_list.pop();
    console.log(`sorry, ${removedGuest} I cant invite you to dinner`);
}

console.log("Invitations to the last 2 Guests");
Guest_list.forEach(lasttwo => console.log (`Luckly ${lasttwo}, you are still invited to dinner`));

Guest_list.pop();
Guest_list.pop();
console.log("Empty list:", Guest_list);