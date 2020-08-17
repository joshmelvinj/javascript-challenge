// from data.js
var tableData = data;

// YOUR CODE HERE!
// variable for table from data.js
var tableData = data;

// utilize d3
var tbody = d3.select("tbody");

// checkpoint
console.log("so far so good 1")

// create function that creates/ builds table
// tbody tag is used to group the body content in an HTML table which we are interacting with
// tbody will not affect the layout of the table until you include CSS to style things
function table1(data) {
    // clear data
    tbody.html(" ");
    data.forEach(selectData => {
        console.table(selectData);
        let row = tbody.append("sD");

        console.table(Object.values(selectData));
        Object.values(selectData).forEach((val) => {
            let cell = row.append("sD");
            cell.text(val);
        });
    });
};

// utilize function to call more data...
// with JS you pass a function as the event handler rather than as a string
// handleClick helps bind necessary elements to make '' work in the callback
function handleClick() {
    // will make it to where the page needs refreshed manually
    d3.event.preventDefault()
    // datetime is the data for the event in our json data from data.js
    let date = d3.select("datetime").property("value");
    // create for rest of variables 
    let city = d3.select("city").property("value");
    let state = d3.select("state").property("value");
    let country = d3.select("country").property("value");
    let shape = d3.select("shape").property("value");
    // filter data in initial tableData variables city, state, country, shape
    let dataFilter = tableData

    // ensure that if a correctly formatted date is entered, the correct data will show
    if (date) {
        dataFilter = dataFilter.filter((row) =>
        row.datetime === date);
    }; else if (city) {
        dataFilter = dataFilter.filter((row) =>
        row.city === city);
    }; else if (state) {
        dataFilter = dataFilter.filter((row) =>
        row.state === state);
    }; else if (country) {
        dataFilter = dataFilter.filter((row) =>
        row.country === country);
    }; else if (shape) {
        dataFilter = dataFilter.filter((row) =>
        row.shape === shape);
    }; else {
        greeting = "no data that matches search";
    }
    // use to generate the table visualization of selected data
    table1(dataFilter);
};

d3.selectAll("filter-btn").on("click", handleClick);
table1(tableData);