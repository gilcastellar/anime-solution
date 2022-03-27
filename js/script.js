function calcRemaining (row) {
    progress = document.getElementById("row" + row + "Progress").innerHTML;
    total = document.getElementById("row" + row + "Total").innerHTML;
    remaining = total - progress;
    document.getElementById("row" + row + "Remaining").innerHTML = remaining;
    updateRemainingTotal(remaining);
}

function updateRemainingTotal(valueToAdd) {
    if (document.getElementById("total-remaining-value").innerHTML == '') {
        remainingEpis = valueToAdd;
        document.getElementById("total-remaining-value").innerHTML = remainingEpis;
        document.getElementById("total-remaining-text").innerHTML = "Episodes remanining<br>until completion."
    }
    else {
        var previous = document.getElementById("total-remaining-value").innerHTML;
        document.getElementById("total-remaining-value").innerHTML = parseInt(previous) + parseInt(valueToAdd);
    }
}

function addOne (row) {
    progress = document.getElementById("row" + row + "Progress").innerHTML;
    progress = parseInt(progress);
    total = document.getElementById("row" + row + "Total").innerHTML;
    if (progress < total) {
        document.getElementById("row" + row + "Remaining").innerHTML = parseInt(document.getElementById("row" + row + "Remaining").innerHTML) - parseInt(1);
        updateRemainingTotal(-1);
        progress += 1;
        document.getElementById("row" + row + "Progress").innerHTML = progress;
    }
}

function decreaseOne (row) {
    progress = document.getElementById("row" + row + "Progress").innerHTML;
    progress = parseInt(progress);
    if (progress > 0) {
        document.getElementById("row" + row + "Remaining").innerHTML = parseInt(document.getElementById("row" + row + "Remaining").innerHTML) + parseInt(1);
        updateRemainingTotal(1);
        progress -= 1;
        document.getElementById("row" + row + "Progress").innerHTML = progress;
    }
}

function newAnime () {
    var name = document.getElementById("inputAnimeName").value;
    var progress = document.getElementById("inputProgress").value;
    var total = document.getElementById("inputTotalEpisodes").value;

    while (name != '' && progress != '' && total != '' && progress < total) {
        row += 1;

        //addNewDiv();

        var newDiv = document.createElement("div");
        newDiv.id = 'row' + row;

        var html = '';

        html += "<table class='table table-bordered anime-table-row'><tbody><tr><td id='anime-row-name' style='width: 300px'>";
        html += name;
        html += "</td><td style='width: 50px' id='decrease-btn'><button style='width: 30px' type='button' value='input' onclick='decreaseOne(";
        html += row;
        html += ")'>-</button></td><td style='width: 100px' id='row";
        html += row;
        html += "Progress'>";
        html += progress;
        html += "</td><td style='width: 50px' id='increase-btn'><button style='width: 30px' type='button' value='input' onclick='addOne(";
        html += row;
        html += ")'>+</button></td><td style='width: 80px' id='row";
        html += row;
        html += "Total'>";
        html += total;
        html += "</td><td style='width: 110px' class='remaining-value' id='row";
        html += row;
        html += "Remaining'></td></tr></tbody></table>";
        
        newDiv.innerHTML = html;

        document.body.appendChild(newDiv);

        calcRemaining(row);
        break;
    }

    if (name == '' || progress == '' || total == '') {
        window.alert("Don't leave any empty fields!");
    }

    else if (progress >= total) {
        window.alert("The progress can't be larger or equal to the total!");
    }
    

    //</tr></tbody></table>";

    //var div = "newDiv" + row;

    //document.getElementById(div).innerHTML = html;
}