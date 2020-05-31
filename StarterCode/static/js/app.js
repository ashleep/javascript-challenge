// from data.js
var tableData = data;

// find table body
var tbody = d3.select("tbody");

// initialize data in table
function init() {
    //clear table
    tbody.html("");

    //append data
    tableData.forEach((entry)=> {
        var row = tbody.append("tr");
        var cell = row.append("td");
        cell.text(entry.datetime);
        cell = row.append("td");
        cell.text(entry.city);
        cell = row.append("td");
        cell.text(entry.state);
        cell = row.append("td");
        cell.text(entry.country);
        cell = row.append("td");
        cell.text(entry.shape);
        cell = row.append("td");
        cell.text(entry.durationMinutes);
        cell = row.append("td");
        cell.text(entry.comments);

    }
    )
}

// call init function to initialize
init();


// Select the button and form
var filterbutton = d3.select("#filter-btn");
var resetbutton = d3.select("#reset-btn");
var form = d3.select("form");


// Create event handlers 
filterbutton.on("click", runEnter);
form.on("submit", runEnter);
resetbutton.on("click", init);

// create function that takes user unput and returns table with onlty the requested data
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element and filter data
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(Object => Object.datetime === inputValue);
  
   //clear table
    tbody.html("");

    //replace with filtered data
    filteredData.forEach((entry)=> {
        var row = tbody.append("tr");
        var cell = row.append("td");
        cell.text(entry.datetime);
        cell = row.append("td");
        cell.text(entry.city);
        cell = row.append("td");
        cell.text(entry.state);
        cell = row.append("td");
        cell.text(entry.country);
        cell = row.append("td");
        cell.text(entry.shape);
        cell = row.append("td");
        cell.text(entry.durationMinutes);
        cell = row.append("td");
        cell.text(entry.comments);

    }
    )


};

