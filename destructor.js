const Person= {name:'Showmen',ID:'171-115-081',dept:'CSE',batch:'41-c',cgpa:3.53}

const { name,cgpa } = Person; ///this called object destrucring
// console.log( name,cgpa);


const complexObject={
    name:'XYZ',
    info:
    {
        city: 'Dhaka',
        address: '21/a amar-Bari Gulshan'
    }
}

const { address } = complexObject.info;
// console.log(address);

const friends = ['Ashik','Jabber','Salam','Russel'];
const [first,...restFriend] = friends;
// console.log(restFriend);
console.log(first);