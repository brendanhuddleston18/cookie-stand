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
  while(i < 14) {
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


// Finding the totals
function getCitySum(arr){
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
let seattleTotal = getCitySum(seattleCookies);
console.log(seattleTotal);
let tokyoTotal = getCitySum(tokyoCookies);
console.log(tokyoTotal);
let dubaiTotal = getCitySum(dubaiCookies);
console.log(dubaiTotal);
let parisTotal = getCitySum(parisCookies);
console.log(parisTotal);
let limaTotal = getCitySum(limaCookies);
console.log(limaTotal);

// Adding cookies/totals to cities
// SEATTLE
let seattleSection = document.getElementsByClassName("seattleList")[0];
for(let i = 0; i < seattleCookies.length; i++){
  let seattleList = document.createElement("li");
  seattleList.textContent = `am: ${seattleCookies[i]} cookies`;
  seattleSection.appendChild(seattleList);
}
let seattleSum = document.createElement("li");
seattleSum.textContent = `Total: ${seattleTotal}`;
seattleSection.appendChild(seattleSum);
// TOKYO
let tokyoSection = document.getElementsByClassName("tokyoList")[0];
for(let i = 0; i < tokyoCookies.length; i++){
  let tokyoList = document.createElement("li");
  tokyoList.textContent = `am: ${tokyoCookies[i]} cookies`;
  tokyoSection.appendChild(tokyoList);
}
let tokyoSum = document.createElement("li");
tokyoSum.textContent = `Total: ${tokyoTotal}`;
tokyoSection.appendChild(tokyoSum);
// DUBAI
let dubaiSection = document.getElementsByClassName("dubaiList")[0];
for(let i = 0; i < dubaiCookies.length; i++){
  let dubaiList = document.createElement("li");
  dubaiList.textContent = `am: ${dubaiCookies[i]} cookies`;
  dubaiSection.appendChild(dubaiList);
}
let dubaiSum = document.createElement("li");
dubaiSum.textContent = `Total: ${dubaiTotal}`;
dubaiSection.appendChild(dubaiSum);
// PARIS
let parisSection = document.getElementsByClassName("parisList")[0];
for(let i = 0; i < parisCookies.length; i++){
  let parisList = document.createElement("li");
  parisList.textContent = `am: ${parisCookies[i]} cookies`;
  parisSection.appendChild(parisList);
}
let parisSum = document.createElement("li");
parisSum.textContent = `Total: ${parisTotal}`;
parisSection.appendChild(parisSum);
// LIMA
let limaSection = document.getElementsByClassName("limaList")[0];
for(let i = 0; i < limaCookies.length; i++){
  let limaList = document.createElement("li");
  limaList.textContent = `am: ${limaCookies[i]} cookies`;
  limaSection.appendChild(limaList);
}
let limaSum = document.createElement("li");
limaSum.textContent = `Total: ${limaTotal}`;
limaSection.appendChild(limaSum);