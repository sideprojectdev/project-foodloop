var navigator = require("navigator");
var geolocation = require("geolocation");
var flow = require('nimble');
var searchBasedOnPos = require("./searchBasedOnPos").searchBasedOnPos;
var website = require("./website");

function posNow(response){
    console.log("Request handler 'posNow' was called.");

    navigator.geolocation(function (positionllll){
        if(positionllll){
            searchBasedOnPos(positionllll.getCurrentPosition, response);
        } else{
            website.result("Geolocation failed", response);
        }
    })
/*

        var positionllll = navigator.geolocation, 
        if(positionllll){
            searchBasedOnPos(positionllll.getCurrentPosition, response);
        } else{
            website.result("Geolocation failed", response);
    }
    //console.log(navigator.geolocation.getCurrentPosition());
    */
}
function init(response){
    console.log("Request handler 'init' was called.");
    website.init(response);
    //return "init";
}
function def(response){
    console.log("Request handler 'def' was called.");
    var coord = {latitude: 43.65860098525407, longitude: -79.39782458347145};
    var positionllll = {coords: coord};
    var restauranto = searchBasedOnPos(positionllll, response);
    
    //return restauranto;
}
exports.init = init;
exports.posNow = posNow;
exports.def = def;