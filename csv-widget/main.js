function search() {
  var input = document.getElementById("search-input").value.toLowerCase();
  var table = document.getElementById("csv-table");
  table.innerHTML = "";

  const fileInput = document.getElementById("csv-file");
  const file = fileInput.files[0];

  const reader = new FileReader();

  reader.onload = () => {
    const data = reader.result;
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
  };

  reader.readAsText(file);
}


const fileInput = document.getElementById("csv-file");

fileInput.addEventListener("change", () => {
  search();
});
