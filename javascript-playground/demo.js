// An array is a special variable, which can hold more than one value at a time.
// Understanding the difference between let & var: It can be said that a variable declared with var is defined throughout the program (function scoped) as compared to let (which is block scoped). A function can contain many blocks.
// watch later: https://www.youtube.com/watch?v=XgSjoHgy3Rk

let namesArray = ['Kevin','McCoy','Emily','Frederic','Alisha','Ashli','Simon','Ty','Fiona','Prismo','Sammy','Caroline','Francesca','Karl','Esther','Irene','Martin','Yanxin','Katrina','Kiana'];

function getRandom(max){
  return Math.floor(Math.random() * Math.floor(max));

}
let arrayAsString = namesArray.join(', ');
let n = getRandom(namesArray.length);
let randomName = namesArray[n];
console.log(randomName);
//console.log(n);
$('#name').html(randomName);
$('#names').html(arrayAsString);
