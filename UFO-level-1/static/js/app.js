// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");


tableData.forEach((sightingdata) => {
    var row = tbody.append("tr");
    Object.entries(sightingdata).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
