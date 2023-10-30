"use strict";

let seattle = {
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3
};

let tokyo = {
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
};

let dubai = {
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
};

let paris = {
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
};

let lima = {
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
};

let time = 6;
let totalCookie;
// ChatGPT helped me with this function, it said I should generate a random number of customers first before I find the total
function cookieFunction(minCust, maxCust, avgCookie){
  let randCust = Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
  totalCookie = Math.floor(randCust * avgCookie);
  return totalCookie;
}
// console.log(totalCookie);
cookieFunction(25, 63, 6.3);



// function timeFunction(){
//   for (time = 6; time <= 12; time++){
//     console.log(`${time}am: ${totalCookie} cookies`);
//   }
// }
timeFunction();

console.log(totalCookie);

