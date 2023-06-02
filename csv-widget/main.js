function search() {
    var input = document.getElementById("search-input").value.toLowerCase();
    var table = document.getElementById("csv-table");
    table.innerHTML = "";
  
    // Загружаем CSV-файл с помощью fetch()
    fetch("file.csv")
      .then(response => response.text())
      .then(data => {
        // Разбиваем CSV-файл на строки
        var rows = data.split("\n");
        for (var i = 1; i < rows.length; i++) {
          // Разбиваем строку на ячейки
          var cells = rows[i].split(",");
          for (var j = 0; j < cells.length; j++) {
            if (cells[j].toLowerCase().indexOf(input) !== -1) {
              // Если ячейка содержит поисковый запрос, добавляем строку в таблицу
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