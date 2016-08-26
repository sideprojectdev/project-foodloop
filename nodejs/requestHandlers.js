var Geolocation = require("Geolocation");
var searchBasedOnPos = require("./searchBasedOnPos").searchBasedOnPos;
var website = require("./website");

function posNow(response){
    console.log("Request handler 'posNow' was called.");
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(searchBasedOnPos);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
}
function init(response){
    console.log("Request handler 'init' was called.");
    website.init(response);
}
function def(response){
    console.log("Request handler 'def' was called.");
    var coord = {latitude: 43.65860098525407, longitude: -79.39782458347145};
    var positionllll = {coords: coord};
    var restauranto = searchBasedOnPos(positionllll, response);
    
    return restauranto;
}
exports.init = init;
exports.posNow = posNow;
exports.def = def;