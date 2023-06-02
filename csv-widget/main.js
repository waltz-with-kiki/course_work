function search() {
  var input = document.getElementById("search-input").value.toLowerCase();
  var table = document.getElementById("csv-table");
  table.innerHTML = "";

  
  fetch("file.csv")
    .then(response => response.text())
    .then(data => {
      var rows = data.split("\n");
      var uniqueRows = new Set();
      for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].split(",");
        var rowText = cells.join(",");
        
        if (uniqueRows.has(rowText)) {
          continue; 
        }
        uniqueRows.add(rowText);
        for (var j = 0; j < cells.length; j++) {
          if (cells[j].toLowerCase().indexOf(input) !== -1) {
            var row = table.insertRow(-1);
            for (var k = 0; k < cells.length; k++) {
              var cell = row.insertCell(-1);
              cell.innerHTML = cells[k];
            }
            break;
          }
        }
      }
    })
    .catch(error => console.log("Ошибка загрузки CSV-файла: " + error));
}