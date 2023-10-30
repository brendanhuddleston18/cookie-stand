"use strict";

let seattle = {
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
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

// let time = 6;
let hourCookie;
// ChatGPT helped me with this function, it said I should generate a random number of customers first before I find the total
function cookieFunction(minCust, maxCust, avgCookie){
  let hourCookies = [];
  let i = 0;
  while(i <= 14) {
    let randCust = Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
    hourCookie = Math.floor(randCust * avgCookie);
    hourCookies.push(hourCookie);
    // console.log(hourCookie);
    i++;
  }
  return hourCookies;
}
// seattle
let seattleCookies = cookieFunction(seattle.minCust, seattle.maxCust, seattle.avgCookie);
console.log(seattleCookies);
// Tokyo
let tokyoCookies = cookieFunction(tokyo.minCust, tokyo.maxCust, tokyo.avgCookie);
console.log(tokyoCookies);
// Dubai
let dubaiCookies = cookieFunction(dubai.minCust, dubai.maxCust, dubai.avgCookie);
console.log(dubaiCookies);
// Paris
let parisCookies = cookieFunction(paris.minCust, paris.maxCust, paris.avgCookie);
console.log(parisCookies);
// Lima
let limaCookies = cookieFunction(lima.minCust, lima.maxCust, lima.avgCookie);
console.log(limaCookies);
// function cookiePM(minCust, maxCust, avgCookie){
//   let i = 6;
//   while(i <= 12) {
//     let randCust = Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
//     hourCookie = Math.floor(randCust * avgCookie);
//     // console.log(hourCookie);
//     i++;
//   }
//   return hourCookie;
// }



// seattleFunction();
