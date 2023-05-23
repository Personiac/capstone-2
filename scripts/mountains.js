"use strict";

const mountainsDDL = document.querySelector("#mountains-DDL");
const mountainTableBody = document.querySelector("#mountain-table-body");

function buildMountainRow(tbody, mountain) {
  let row = tbody.insertRow(-1);

  let cell1 = row.insertCell(0);
  cell1.innerHTML = `<img src="images/${mountain.img}">`;

  let cell2 = row.insertCell(1);
  cell2.innerText = mountain.name;

  let cell3 = row.insertCell(2);
  cell3.innerText = mountain.desc;

  let cell4 = row.insertCell(3);
  cell4.innerText = `${mountain.elevation} ft`;

  let cell5 = row.insertCell(3);
  cell5.innerText = mountain.effort;
}

function mountainsList() {
  let count = 0;

  let selectOption = document.createElement("option");
  selectOption.value = " ";
  selectOption.textContent = "Select Mountain...";
  mountainsDDL.appendChild(selectOption);

  //Make list of options from array
  for (const mountain of mountainsArray) {
    let option = new Option(mountain.name, count);
    mountainsDDL.appendChild(option);
    count++;
  }
}

mountainsList();

function displayMountain(mountainIndex) {
  clearTable();
  let mountain = mountainsArray.find(function (mountain, index) {
    return mountainIndex == index;
  });
  buildMountainRow(mountainTableBody, mountain);
}

function clearTable() {
  mountainTableBody.innerHTML = "";
}
