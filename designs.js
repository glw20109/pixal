$(document).ready(function() {
     /*+
     * User selects grid size for drawing
     * @description user enters height and width. e.preventDefault prevents form from being submitted
     * @param high - is number const, high is value of #inputHeight, passed to makeGrid function as control variable in for loop for table rows
     * @param wide - is number const, wide is value of #inputWeight, passed to makeGrid function as control variable in for loop for table cells
     */
     $('#sizePicker').submit(function(e){
     e.preventDefault();
     const high = $('#inputHeight').val();
     const wide = $('#inputWidth').val();
     makeGrid(high, wide);
    });
});
/**
* Function that creates the drawing grid
* @desription makeRrid accepts two arguments, vert (high) and horz(wide).
* @param vert is the condition in the for loop that creates the rows in the drawing table.  This is passed from #inputHeight.
* @param horz is the condition in the for loop that creates the celss in the drawing table.  This is passed from #inputWeight.
*/
function makeGrid(vert,horz) {
    $('table').empty();
        for (let n = 1; n <= vert; n++) {
            let row = $('<tr></tr>');
            $('table').append(row);
            for (let m = 1; m <= horz; m++)   {
                let column = $('<td></td>');
                row.append(column);
            }
        }
}
/**
* Drawing funtion
* @desription colors the cells with the selected color, default is black.  Drag and draw function, if the mouse button is down and moved over a cell, the cell is filled with the selected color.
*/
$('#pixelCanvas').on('mousedown mouseover', 'td', function(e){
   if (e.buttons === 1){
       $(this).css('background-color', $('#colorPicker').val());
   }
});
/**
* @desription simple function to clear the colors from the drawing grid
* @param #clearMe is id of Erase Drawing button.  function is executed when button is clicked
*/
$('#clearMe').on('click', function() {
    $("td").css("background","");
});
