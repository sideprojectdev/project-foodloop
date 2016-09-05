var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle[""] = requestHandlers.init;
handle["/"] = requestHandlers.init;
handle["/posNow"] = requestHandlers.posNow;
handle["/default"] = requestHandlers.def;


server.start(router.route, handle); 