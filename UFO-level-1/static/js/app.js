// from data.js
var tableData = data

// Get a reference to the table body
var tbody = d3.select("tbody");


// Console.log  data from data.js
console.log(tableData);


//  Use d3 to update each cell's text with tableData values 
tableData.forEach((weatherReport) => {
    var row = tbody.append("tr");
    Object.entries(weatherReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  filtereddata = tableData.filter(object=>object.datetime === "1/1/2010");

  console.log(filtereddata);