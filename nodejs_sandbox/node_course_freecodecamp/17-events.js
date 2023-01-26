// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events instance
const EventEmitter = require("events");
const http = require("http");

const customEmitter = new EventEmitter();

// on - listen for an event
// emit - emit an event
// on and emit methods
// keep track of the order
// additional arguments
// built-in module utilize it

customEmitter.on("response", (name, id) => {
  console.log(`data recieved ${name} with id:${id}`);
});

// customEmitter.on("response", () => {
//   console.log(`some other logic here`);
// });

// customEmitter.emit("response", "fernanda", 27);

// Using Event Emitter API
const server = http.createServer();
// emits request event
// subscribe to it / list for it / respond to it
server.on("request", (req, res) => {
  res.end("Welcome");
});
server.listen(5000);
