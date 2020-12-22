// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");


// Console.log  data from data.js
console.log(tableData);


// // Step 5: Use d3 to update each cell's text with tableData values 
tableData.forEach(function(sightingdata) {
console.log(sightingdata);
var row = tbody.append("tr");
Object.entries(sightingdata).forEach(function([key, value]) {
 console.log(key, value);
//// Append a cell to the row for each value

 var cell = row.append("td");
 cell.text(value);
});
});

