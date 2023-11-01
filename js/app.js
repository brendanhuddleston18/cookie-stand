"use strict";

let stores = [];
let totals = new Array(14);
totals.fill(0);
function City(name, minCust, maxCust, avgCookie){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.randomCust = [];
  // total cookies for hour
  this.hourCookies = [];
  this.completeCookies = [];
  // total cookies for city
  this.totalCookies = [];
  this.totalSales = 0;
}

let seattle = new City('Seattle',23, 65, 6.3);
let tokyo = new City('Tokyo', 3, 24, 1.2);
let dubai = new City('Dubai', 11, 38, 3.7);
let paris = new City('Paris', 20, 38, 2.3);
let lima = new City('Lima', 2, 16, 4.6);
// Kyle and Zach helped me with this
City.prototype.cookieTime = function(){
  for(let i = 0; i<14;i++){
    let randCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    this.randomCust.push(randCust);
    let estimate = (Math.floor(randCust * this.avgCookie));
    this.hourCookies.push(estimate);
    this.totalSales += estimate;
    totals[i] += estimate;
  }
  // let total = 0;
  // for (let i = 0; i < this.hourCookies.length; i++) {
  //   total += this.hourCookies[i];
  // }
  // this.totalCookies.push(total);
};

City.prototype.render = function(){
  let body = document.getElementById("tableBody");
  let cityRow = document.createElement('tr');
  body.appendChild(cityRow);


  let cityName = document.createElement('td');
  cityName.textContent = this.name;
  cityRow.appendChild(cityName);



  for(let i = 0; i < this.hourCookies.length; i ++){
    let cell = document.createElement('td');
    cell.textContent = (this.hourCookies[i]);
    cityRow.appendChild(cell)
  }
  let cityTotal = document.createElement('td');
  cityTotal.textContent = this.totalSales;
  cityRow.appendChild(cityTotal);

};

let renderTotals = function(){
  // let totalHourlyCookies = [];
  // for(let i = 0; i < this.hourCookies.length; i++){
  //   let hourTotal = (seattle.hourCookies[i] + tokyo.hourCookies[i] + dubai.hourCookies[i] + paris.hourCookies[i] + lima.hourCookies[i]);
  //   totalHourlyCookies.push(hourTotal);
  // }

  let tableFooter = document.getElementById('tableFoot');
  let bottomTotal = document.createElement('tr');
  bottomTotal.textContent = 'Totals';
  tableFooter.appendChild(bottomTotal);
  // let hourlyTotal = document.createElement('td');
  // bottomTotal.appendChild(hourlyTotal);

  for(let i = 0; i < totals.length; i++){
    let footCell;
    footCell = document.createElement('td');
    footCell.textContent = totals[i];
    bottomTotal.appendChild(footCell);
  }
  // let totalDailyCookies = [];
  let dailyTotal = (seattle.totalSales + tokyo.totalSales + dubai.totalSales + paris.totalSales + lima.totalSales);
  // totalDailyCookies.push(dailyTotal);

  let totalAll = document.createElement("td");
  totalAll.textContent = dailyTotal;
  bottomTotal.appendChild(totalAll);
};
seattle.cookieTime();
tokyo.cookieTime();
dubai.cookieTime();
paris.cookieTime();
lima.cookieTime();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
renderTotals();

// console.log(seattle);
console.log(totals);
// let hourCookie;
// // ChatGPT helped me with this function, it said I should generate a random number of customers first before I find the total
// function cookieFunction(minCust, maxCust, avgCookie){
//   let hourCookies = [];
//   let i = 0;
//   while(i < 14) {
//     let randCust = Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
//     hourCookie = Math.floor(randCust * avgCookie);
//     hourCookies.push(hourCookie);
//     // console.log(hourCookie);
//     i++;
//   }
//   return hourCookies;
// }

// City.prototype.total = function() {
//   let cityTotal = []
//   cityTotal.push(cookieFunction(this.minCust, this.maxCust, this.avgCookie));
// };
// seattle.total();
// tokyo.total();
// dubai.total();
// paris.total();
// lima.total();

// // // seattle
// let seattleCookies = cookieFunction(seattle.minCust, seattle.maxCust, seattle.avgCookie);
// // console.log(seattleCookies);
// // // Tokyo
// let tokyoCookies = cookieFunction(tokyo.minCust, tokyo.maxCust, tokyo.avgCookie);
// // console.log(tokyoCookies);
// // // Dubai
// let dubaiCookies = cookieFunction(dubai.minCust, dubai.maxCust, dubai.avgCookie);
// // console.log(dubaiCookies);
// // // Paris
// let parisCookies = cookieFunction(paris.minCust, paris.maxCust, paris.avgCookie);
// // console.log(parisCookies);
// // // Lima
// let limaCookies = cookieFunction(lima.minCust, lima.maxCust, lima.avgCookie);
// // console.log(limaCookies);


// // Finding the totals
// function getCitySum(arr){
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }
// let seattleTotal = getCitySum(seattleCookies);
// console.log(seattleTotal);
// let tokyoTotal = getCitySum(tokyoCookies);
// console.log(tokyoTotal);
// let dubaiTotal = getCitySum(dubaiCookies);
// console.log(dubaiTotal);
// let parisTotal = getCitySum(parisCookies);
// console.log(parisTotal);
// let limaTotal = getCitySum(limaCookies);
// console.log(limaTotal);

// // Time
// let time = 6;
// let superTimeArray = [];
// while( time < 24){
//   let superTime;
//   if(time < 12){
//     superTime = (time + "am");
//   } else if(time === 12){
//     superTime = (time + "pm");
//   }
//   else {
//     superTime = (time - 12 + "pm");
//   }
//   superTimeArray.push(superTime);
//   time++;
// }

// // City.prototype.time = function(){
// //   let time = 6;
// //   let superTimeArray = [];
// //   while( time < 24){
// //     let superTime;
// //     if(time < 12){
// //       superTime = (time + "am");
// //     } else if(time === 12){
// //       superTime = (time + "pm");
// //     }
// //     else {
// //       superTime = (time - 12 + "pm");
// //     }
// //     superTimeArray.push(superTime);
// //     time++;
// //   }
// // }

// // City.prototype.render = function() {
// //   let head = document.getElementById("tableHead");
// //   let timeHead = document.createElement("th");
// //   timeHead.textContent = superTimeArray[];
// //   head.appendChild(timeHead);
// // }
// // Adding cookies/totals to cities
// // SEATTLE
// let seattleSection = document.getElementsByClassName("seattleList")[0];
// for(let i = 0; i < seattleCookies.length; i++){
//   let seattleList = document.createElement("li");
//   seattleList.textContent = `${superTimeArray[i]}: ${seattleCookies[i]} cookies`;
//   seattleSection.appendChild(seattleList);
// }
// let seattleSum = document.createElement("li");
// seattleSum.textContent = `Total: ${seattleTotal}`;
// seattleSection.appendChild(seattleSum);
// // TOKYO
// let tokyoSection = document.getElementsByClassName("tokyoList")[0];
// for(let i = 0; i < tokyoCookies.length; i++){
//   let tokyoList = document.createElement("li");
//   tokyoList.textContent = `${superTimeArray[i]}: ${tokyoCookies[i]} cookies`;
//   tokyoSection.appendChild(tokyoList);
// }
// let tokyoSum = document.createElement("li");
// tokyoSum.textContent = `Total: ${tokyoTotal}`;
// tokyoSection.appendChild(tokyoSum);
// // DUBAI
// let dubaiSection = document.getElementsByClassName("dubaiList")[0];
// for(let i = 0; i < dubaiCookies.length; i++){
//   let dubaiList = document.createElement("li");
//   dubaiList.textContent = `${superTimeArray[i]}: ${dubaiCookies[i]} cookies`;
//   dubaiSection.appendChild(dubaiList);
// }
// let dubaiSum = document.createElement("li");
// dubaiSum.textContent = `Total: ${dubaiTotal}`;
// dubaiSection.appendChild(dubaiSum);
// // PARIS
// let parisSection = document.getElementsByClassName("parisList")[0];
// for(let i = 0; i < parisCookies.length; i++){
//   let parisList = document.createElement("li");
//   parisList.textContent = `${superTimeArray[i]}: ${parisCookies[i]} cookies`;
//   parisSection.appendChild(parisList);
// }
// let parisSum = document.createElement("li");
// parisSum.textContent = `Total: ${parisTotal}`;
// parisSection.appendChild(parisSum);
// // LIMA
// let limaSection = document.getElementsByClassName("limaList")[0];
// for(let i = 0; i < limaCookies.length; i++){
//   let limaList = document.createElement("li");
//   limaList.textContent = `${superTimeArray[i]}: ${limaCookies[i]} cookies`;
//   limaSection.appendChild(limaList);
// }
// let limaSum = document.createElement("li");
// limaSum.textContent = `Total: ${limaTotal}`;
// limaSection.appendChild(limaSum);

// Table setup
// for(let i = 6; i < 24; i++){
//   let tableTimes;
//   if(i < 12){
//     tableTimes = (`${i}am`);
//   } else if (i === 12){
//     tableTimes = (`${i}pm`);
//   } else {
//     tableTimes = (`${i-12}pm`);
//   }
//   let timeHead = document.getElementById("tableHead");
//   let times = document.createElement("th");
//   times.textContent = tableTimes;
//   timeHead.appendChild(times);

// }
// let seattleList = document.createElement("th");
// seattleList.textContent = `${superTimeArray[i]}: ${seattleCookies[i]} cookies`;
// seattleSection.appendChild(seattleList);

//   let head = document.getElementById("tableHead");
//   let timeHead = document.createElement("th");
//   head.appendChild(timeHead);
