"use strict";

let statesDDL = document.querySelector("#states-DDL");
let parkTypesDDL = document.querySelector("#park-types-DDL");
const parkTableBody = document.querySelector("#parks-table-body");

function buildParkRow(tbody, park) {
  let row = tbody.insertRow(-1);

  let cell1 = row.insertCell(0);
  cell1.innerText = park.LocationName;

  let cell2 = row.insertCell(1);
  cell2.innerText = park.Address;

  let cell3 = row.insertCell(2);
  cell3.innerText = park.City;

  let cell4 = row.insertCell(3);
  cell4.innerText = park.State;

  let cell5 = row.insertCell(4);
  cell5.innerText = park.ZipCode;

  let cell6 = row.insertCell(5);
  cell6.innerText = park.Phone;

  let cell7 = row.insertCell(6);

  if (!park.Visit) {
    cell7.innerText = "No URL Available";
  } else {
    cell7.innerText = park.Visit;
  }
}

function stateLocationList() {
  let count = 0;

  let selectOption = document.createElement("option");
  selectOption.value = " ";
  selectOption.textContent = "Select State...";
  statesDDL.appendChild(selectOption);

  //Make list of options from array
  for (const state of statesArray) {
    let option = new Option(state, count);
    statesDDL.appendChild(option);
    count++;
  }
}

function parkTypeList() {
  let count = 0;

  let selectOption = document.createElement("option");
  selectOption.value = " ";
  selectOption.textContent = "Select Type...";
  parkTypesDDL.appendChild(selectOption);

  //Make list of options from array
  for (const type of parkTypesArray) {
    let option = new Option(type, count);
    parkTypesDDL.appendChild(option);
    count++;
  }
}

function checkButtonValue() {
  // const selectedOption = parseInt(document.querySelector('input[name="button-choices"]:checked').value);
  const selectedOption = document.querySelector('input[name="button-choices"]:checked').value;
  // statesDDL.style.display = "none";
  if (selectedOption == 1) {
    statesDDL.style.display = "block";
    parkTypesDDL.style.display = "none";
    clearTable();
    stateLocationList();
    // loadParkByStateTable();
    clearDDL(parkTypesDDL);
  }
  if (selectedOption == 2) {
    parkTypesDDL.style.display = "block";
    statesDDL.style.display = "none";
    clearTable();
    parkTypeList();
    // loadParkByTypeTable();
    clearDDL(statesDDL);
  }
}

function filterParksByState(state) {
  return nationalParksArray.filter(function (park) {
    return park.State == state;
  });
}

function filterParksByType(type) {
  return nationalParksArray.filter(function (park) {
    return park.LocationName.includes(type);
  });
}

function loadParkByStateTable() {
  clearTable();
  // hideActivityDetails(true);
  // if (parkTypeList.value == "") {
  //   parkTableBody.innerHTML = "";
  //   return;
  // }
  let stateIndex = parseInt(statesDDL.value);
  let selectedState = statesArray[stateIndex];
  let filteredParksByStateList = filterParksByState(selectedState);

  for (const park of filteredParksByStateList) {
    buildParkRow(parkTableBody, park);
  }

  // hideActivityDetails(false);
}

function loadParkByTypeTable() {
  clearTable();
  // hideActivityDetails(true);
  // if (stateLocationList.value == "") {
  //   parkTableBody.innerHTML = "";
  //   return;
  // }
  let typeIndex = parseInt(parkTypesDDL.value);
  let selectedType = parkTypesArray[typeIndex];
  let filteredParksByTypeList = filterParksByType(selectedType);

  for (const park of filteredParksByTypeList) {
    buildParkRow(parkTableBody, park);
  }

  // hideActivityDetails(false);
}

function clearTable() {
  parkTableBody.innerHTML = "";
}

function clearDDL(dropList) {
  dropList.innerHTML = "";
}

// function hideActivityDetails(hide) {
//   if (hide) {
//     parkTableBody.style.display = "none";
//     return;
//   }
//   parkTableBody.style.display = "block";
// }
