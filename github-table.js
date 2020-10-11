var myList;
var link = [];
$.getJSON('https://api.github.com/users/USERNAME/repos?callback', function(data) {
  myList = data;
});

function myJsonMethod(response) {
  console.log(response);
  myList = response;
}

function makeTable() {
  var test = returnList(myList);
  var columnData = [];
  var rowClose = $('<tr/>');
  for (var i = 0; i < test.length; i++) {
    var rowData = myList[i];
    for (var row in rowData) {
      if ($.inArray(row, columnData) == -1 && (row == "name" || row == "description" || row == "language" || row == "html_url")) {
        if (row == "html_url") {
          link.push(myList[i]["html_url"]);
        } else {
          columnData.push(row);
        }
      }
    }
  }

  for (var i = 0, j = 0; i < myList.length; i++) {
    var rowClose = $('<tr/>');
    for (var colIndex = 0; colIndex < columnData.length; colIndex++) {
      var cell;
      if (columnData[colIndex] == "name") {
        cell = '<a href=' + link[j] + ' target="_blank">' + myList[i][columnData[colIndex]] + '</a>';
        j++;
      } else {
        cell = myList[i][columnData[colIndex]];
      }
      if (cell == null) {
        cell = "";
      }
      rowClose.append($('<td/>').html(cell));
    }
    $("#github-table").append(rowClose);
  }
}

function returnList(myList) {
  return myList;
}
