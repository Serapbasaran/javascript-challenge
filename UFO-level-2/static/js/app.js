  // from data.js
  var tableData = data

  // Get a reference to the table body
  var tbody = d3.select("tbody");
  
  
  // Console.log  data from data.js
  //console.log(tableData);
  
  
  //  Use d3 to update each cell's text with tableData values 
  tableData.forEach((sighting) => {
      var row = tbody.append("tr");
      Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });

// Select button classs from html with the id property `filter-btn`
var button = d3.select("#filter-btn");

// Link the button to the event listener and connect to the filtering function for each input tag
button.on("click", function() {

tbody.html("");

// Set multiple filters for the user based on the table columns 
date = d3.selectAll("#datetime").property("value");
city = d3.selectAll("#city").property("value").toLowerCase();
state = d3.selectAll("#state").property("value").toLowerCase();
country = d3.selectAll("#country").property("value").toLowerCase();
shape = d3.selectAll("#shape").property("value").toLowerCase();
filters = {'datetime':date, 'city':city, 'state':state, 'country':country, 'shape':shape};

// Match the user input with correspoending rows in the data table 
Object.entries(filters).forEach(([key, value]) => {
    filteredData = tableData.filter(row => row[key] === value );
    // console.log(filteredData);

//Append matching values into the table area to display 
    filteredData.forEach((filteredData) => {
        // console.log(filteredData);
        var row = tbody.append("tr");
        Object.entries(filteredData).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        })  
     })
  }); 
});
