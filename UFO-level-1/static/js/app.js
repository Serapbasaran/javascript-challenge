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

// Get the reference to the button with the id property `filter-btn`
var button = d3.select("#filter-btn");



 button.on("click", function() {

// Get the reference to each input element using their id's in the html file
     var inputField_date= d3.selectAll("#datetime").property("value");
    
     var dateFilter = tableData.filter(sightings => sightings.datetime === inputField_date);
     tbody.html("");
     dateFilter.forEach((datarow) => { 
         var row = tbody.append("tr");
         Object.entries(datarow).forEach(([key, value]) => {
         var cell = row.append("td");
         cell.text(value);
             });
         }); 
 });  // ends the button.on      

