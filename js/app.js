"use strict";

let cityForm = document.getElementById('cityForm');
let inputs = document.querySelectorAll('input');
let stores = [];
let newCity = {};
let totals = new Array(14);
totals.fill(0);

console.log(inputs);

function City(name, minCust, maxCust, avgCookie){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.randomCust = [];
  this.hourCookies = [];
  this.totalSales = 0;
}

let seattle = new City('Seattle',23, 65, 6.3);
let tokyo = new City('Tokyo', 3, 24, 1.2);
let dubai = new City('Dubai', 11, 38, 3.7);
let paris = new City('Paris', 20, 38, 2.3);
let lima = new City('Lima', 2, 16, 4.6);

stores.push(seattle, tokyo, dubai, paris, lima);

for( let i = 0; i < inputs.length; i++){
  inputs[i].addEventListener('change', function(event) {
    console.log(event.target.name, event.target.value);

    newCity[event.target.name] = event.target.value;
  });
}

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

cityForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let inputCity = new City( newCity.name, Number(newCity.minCust), Number(newCity.maxCust), Number(newCity.avgCookie));
  stores.push(inputCity);
  inputCity.cookieTime();
  inputCity.render();

  for (let i = 0; i < inputCity.hourCookies.length; i++){
    totals[i] += inputCity.hourCookies[i];
    console.log(inputCity.hourCookies[i]);
  }
  console.log(inputCity);
  console.log(newCity);
});


console.log(newCity);
console.log(stores);



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
