
const tableData = data;

var tbody = d3.select("tbody");

function buildTable(data) {

  tbody.html("");

  data.forEach((dataRow) => {

    let row = tbody.append("tr");

    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

var filters = {}

function updateFilters() {

  
  let changedElement = d3.select(this);
  console.log(changedElement);
  
  let elementValue = changedElement.property("value");
  console.log(elementValue);
  
  let filterID = changedElement.attr("id")
  console.log(filterID);
  
  if (elementValue) {
    filters[filterID] = elementValue;
  }
  else {
    delete filters[filterID];
  }


  
  filterTable();

}


function filterTable() {

  
  let filteredData = tableData;

  
  
  Object.entries(filters).forEach(([key, value]) => {

    filteredData = filteredData.filter(row => row[key] === value)
  })

  
  buildTable(filteredData);
}


d3.selectAll("input").on("change", updateFilters);


buildTable(tableData);