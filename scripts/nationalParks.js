// function loadParks() {
//     for (const park of nationalParksArray) {

//     }
// }

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
  if (park.Visit == -1) {
    cell7.innerText = "No URL"
  }
  cell7.innerText = park.Visit;
}

function loadParkTable() {
  const parkTableBody = document.querySelector("#parks-table-body");
  for (const park of nationalParksArray) {
    buildParkRow(parkTableBody, park);
  }
}

loadParkTable();
