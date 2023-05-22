"use strict";

let mountainsDDL = document.querySelector("#mountains-DDL");

function buildParkRow(tbody, mountain) {
  let row = tbody.insertRow(-1);

  let cell1 = row.insertCell(0);
  cell1.innerText = mountain.name;

  let cell2 = row.insertCell(1);
  cell2.innerText = mountain.desc;

  let cell3 = row.insertCell(2);
  cell3.innerText = mountain.elevation;

  let cell4 = row.insertCell(3);
  cell4.innerText = mountain.img;
}
