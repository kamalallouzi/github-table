/** @preserve https://github.com/kamalallouzi/github-table
Copyright (c) 2020 - Kamal Allouzi
Released under the MIT licence: http://opensource.org/licenses/mit-license
 */
var List;
// stores url to make into anchor
var link = [];
// grabs JSONP from github api
$.getJSON('https://api.github.com/users/USERNAME/repos?callback', function(data) {
  List = data;
});

function makeTable() {
  var test = returnList(List);
  var columnData = [];
  var rowClose = $('<tr/>');
  for (var i = 0; i < test.length; i++) {
    var rowData = List[i];
    for (var row in rowData) {
    // goes through and filters only necessary elements
      if ($.inArray(row, columnData) == -1 && (row == "name" || row == "description" || row == "language" || row == "html_url")) {
      // stores links in List array
        if (row == "html_url") {
          link.push(List[i]["html_url"]);
        } 
        else {
          columnData.push(row);
        }
      }
    }
  }

  for (var i = 0, j = 0; i < List.length; i++) {
    var rowClose = $('<tr/>');
    for (var colIndex = 0; colIndex < columnData.length; colIndex++) {
      var cell;
      if (columnData[colIndex] == "name") {
      // makes anchor with the title with List
        cell = '<a href=' + link[j] + ' target="_blank">' + List[i][columnData[colIndex]] + '</a>';
        j++;
      } 
      else {
        cell = List[i][columnData[colIndex]];
      }
      if (cell == null) {
        cell = "";
      }
      rowClose.append($('<td/>').html(cell));
    }
    $("#github-table").append(rowClose);
  }
}

function returnList(List) {
  return List;
}
