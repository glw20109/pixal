# Pixal Art Maker

## Introduction

This lab project is part of the Front-End Web Developer Nano-degree Program.   The requirement is to  "Using DOM selectors and event listeners, build a single page app that allows users to create their own pixel art". 

I included the CSS grid layout to the project.

### HTML

The html is straight forward with a header and 3 section elements.  3 IDs identify the 'design', 'create', 'canvas area' sections.  The table ID 'pixal canvas' is drawing canvas.

### CSS 

The grid is 3 rows with 2 columns.

```
body {
    background-color: #f8f8f8;
    display: grid;
    grid-template-rows: .4fr repeat(2, .6fr);
    grid-template-columns: .5fr .5fr;
    grid-template-areas: "header header" "design canvasArea" "create canvasArea";
    text-align: center;
}
```

The header, design, and canvasArea use 'grid-area' to assign names used in grid-template-areas.

```
header {
    grid-area: header;
    text-align: center;
}
```

### Javascript

The makeGrid function is the function which draws the canvas grid.

```
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
```

