
function CityInfo(name, hours, contact, location){
  this.name = name;
  this.hours = hours;
  this.contact = contact;
  this.location = location;
  this.cityStuff = [];
}

let seattle = new CityInfo('Seattle', '6am-7pm', '123-456-7890', '2901 3rd Ave #300, Seattle, WA 98121');
let tokyo = new CityInfo('Tokyo', '6am-7pm', '222-222-2222', '1 Chome-1-2 Oshiage, Sumida, Tokyo 131-8634');
let dubai = new CityInfo('Dubai', '6am-7pm', '333-333-3333', '1 Sheikh Mohammed bin Rashid Blvd-Dubai');
let paris = new CityInfo('Paris', '6am-7pm', '444-444-4444', 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris');
let lima = new CityInfo('Lima', '6am-7pm', '555-555-5555', 'Ca. Gral. Borgono cuadra 8, Miraflores 15074');
// let cityData = [seattle, tokyo, dubai, paris, lima];
let cityName = [];
let cityHours = [];
let cityContact = [];
let cityLocation = [];

CityInfo.prototype.render = function() {
  let name = this.name;
  let hours = this.hours;
  let contact = this.contact;
  let location = this.location;
  cityName.push(name);
  cityHours.push(hours);
  cityContact.push(contact);
  cityLocation.push(location);
};

function cityStuff() {
  for(let i = 0; i < cityName.length; i++){
    let storeHead = document.getElementById('main');
    let cityHead = document.createElement('h2');
    let cityList = document.createElement('ul');
    let storeHour = document.createElement('li');
    let storeCont = document.createElement('li');
    let storeLoc = document.createElement('li');
    cityHead.textContent = cityName[i];
    storeHour.textContent = `Hours Open ${cityHours[i]}`;
    storeCont.textContent = `Contact Info: ${cityContact[i]}`;
    storeLoc.textContent = `Location: ${cityLocation[i]}`;
    storeHead.appendChild(cityHead, cityList);
    storeHead.appendChild(cityList);
    cityList.appendChild(storeHour);
    cityList.appendChild(storeCont);
    cityList.appendChild(storeLoc);
    console.log(cityName[i]);

  }
}

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
console.log(cityName);
cityStuff();
