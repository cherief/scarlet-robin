function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}


readTextFile("data.json", function(text){
    var data = JSON.parse(text);

    var myTable= "<table><tr><td style='width: 100px; color: red;'>Name</td>";
    myTable+= "<td style='width: 100px; color: red; text-align: right;'>Age</td>";
    myTable+="<td style='width: 100px; color: red; text-align: right;'>Gender</td></tr>";

    myTable+="<tr><td style='width: 100px;                   '>---------------</td>";
    myTable+="<td     style='width: 100px; text-align: right;'>---------------</td>";
    myTable+="<td     style='width: 100px; text-align: right;'>---------------</td></tr>";

    for (var i=0; i<Object.keys(data).length; i++) {
        myTable+="<tr><td style='width: 100px;'>" + data[i].name + "</td>";
        myTable+="<td style='width: 100px; text-align: right;'>" + data[i].age + "</td>";
        myTable+="<td style='width: 100px; text-align: right;'>" + data[i].gender + "</td></tr>";
    }  
    myTable+="</table>";

    document.getElementById('tablePrint').innerHTML = myTable;

});


