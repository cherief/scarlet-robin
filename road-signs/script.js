// Formats numbers with commas
function comma(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

// Opens filter sidebar
function openNav() {
    document.getElementById("mySidenav").style.display = "block";
}

// Closes filter sidebar
function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
}

// Popups for Leaflet markers
function propertyPopup(feature, layer) {
  layer.bindPopup("<b>" + feature.properties.name + "</b><br> Suburb: " + feature.properties.suburb + "</b><br><b>Sign Type 1</b> " + feature.properties.sign_type1 + "</b><br><b>Sign Type 2</b> " + feature.properties.sign_type2 + "</b><br><b>Sign Type 3</b> " + feature.properties.sign_type3);
}
 
function schoolPopup(feature, layer) {
  layer.bindPopup("<b>" + feature.properties.name + "</b>");
}
//--------------------------



//------------------------------

