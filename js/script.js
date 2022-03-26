function addOne (row) {
    number = document.getElementById("row" + row + "Progress").innerHTML;
    number = parseInt(number);
    number += 1;
    document.getElementById("row" + row + "Progress").innerHTML = number;
}

function decreaseOne (row) {
    number = document.getElementById("row" + row + "Progress").innerHTML;
    number = parseInt(number);
    number -= 1;
    document.getElementById("row" + row + "Progress").innerHTML = number;
}

function addNewDiv () {
    var newDiv = "<div id='newDiv";
    newDiv += row;
    newDiv += "'></div>";

    document.body.innerHTML = document.body.innerHTML + newDiv;
}

function genTableRow () {
    row += 1;

    //addNewDiv();

    var newDiv = document.createElement("div");
    newDiv.id = 'row' + row;

    var html = "<table class='table'><tbody><tr><td>";
    html += document.getElementById("inputAnimeName").value;
    html += "</td><td id='decrease-btn'><button type='button' value='input' onclick='decreaseOne(";
    html += row;
    html += ")'>-</button></td><td id='row";
    html += row;
    html += "Progress'>";
    html += document.getElementById("inputProgress").value;
    html += "</td><td id='increase-btn'><button type='button' value='input' onclick='addOne(";
    html += row;
    html += ")'>+</button></td><td id='row";
    html += row;
    html += "Total'>";
    html += document.getElementById("inputTotalEpisodes").value;
    html += "</td></tr></tbody></table>";
    
    newDiv.innerHTML = html;

    document.body.appendChild(newDiv);

    //</tr></tbody></table>";

    //var div = "newDiv" + row;

    //document.getElementById(div).innerHTML = html;
}