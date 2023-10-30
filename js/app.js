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

function cookieFunction(minCust, maxCust, avgCookie){
  return Math.floor( Math.random() * (maxCust - minCust + 1) + minCust);
}

console.log(cookieFunction(seattle));

