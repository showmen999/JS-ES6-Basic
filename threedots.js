const ages = [14,15,18,17,20,21];
const ages2 = [41,52,8,7,22,28];
const ages3 = [44,55,81,71,27,24];
// const allAges = ages.concat(171).concat(ages2).concat(ages3);
// console.log(allAges);

//Now using spread oparetor to add this array;;;;;;;

const allAges2 = [...ages,...ages2,56,...ages3];
console.log(allAges2);

//find max value using spread oparetor in array;;;;;
const taka = [65,25,69,70,89,1000];
const power = Math.max(...taka);
console.log(power);