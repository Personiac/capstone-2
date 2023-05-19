"use strict";

let statesDDL = document.querySelector("#states-DDL");
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

function checkButtonValue() {
  const selectedOption = document.querySelector('#button-choices input[name="button-choices"]:checked');
  return selectedOption ? selectedOption.id : null;
}

function filterParksByState(state) {
  if (checkButtonValue() == "Location") {
    return nationalParksArray.filter(function (park) {
      return park.State == state;
    });
  }
}

function filterParksByType(type) {
  if (checkButtonValue() == "Type") {
    return nationalParksArray.filter(function (park) {
      return park.Location["type"] == type;
    });
  }
}

function loadParkTable() {
  clearTable();
  let stateIndex = parseInt(statesDDL.value);
  let selectedState = statesArray[stateIndex];
  let filteredParksByStateList = filterParksByState(selectedState);

  for (const park of filteredParksByStateList) {
    buildParkRow(parkTableBody, park);
  }
}

function clearTable() {
  parkTableBody.innerHTML = "";
}

stateLocationList();
