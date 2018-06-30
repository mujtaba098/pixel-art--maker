$(function() {
  //Set the grid and current color to #000
  var canvas = $("#pixelCanvas");
  var currentColor = "#000";

  // Prevent default submit behavior and call makeGrid function
  $("#sizePicker").submit(function(e) {
    e.preventDefault();
    makeGrid();
  });

  //Change the currentColor to the selected one
  $("#colorPicker").change(function() {
    currentColor = $(this).val();
  });

  //If the user clicks or moves the mouse in the grid
  //while holding the left mouse button down draw the pixels
  canvas.on("mousemove", "td", function(e) {
    if (e.buttons == 1) {
      $(this).css("background-color", currentColor); //Draw the td that the user hovers
    }
  });

  canvas.on("click", "td", function(e) {
    $(this).css("background-color", currentColor); //Draw the td that the user clicks
  });

  //Build the grid
  function makeGrid() {
    //Set the grid dimensions;
    var gridHeight = $("#inputHeight").val();
    var gridWidth = $("#inputWidth").val();
    canvas.empty(); //Empty the grid and start over
    //Loop -> Create rows
    for (x = 0; x <= gridHeight - 1; x++) {
      canvas.append("<tr>"); //Start Row
      //Loop -> Create columns for each row
      for (y = 0; y <= gridWidth - 1; y++) {
        $("tr:eq(" + x + ")").append("<td></td>");
      }
      canvas.append("</tr>"); //End Row
    }
  }
});
