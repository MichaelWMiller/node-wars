// Libraries
let express = require("express"),
  bp = require("body-parser"),
  cors = require("cors");

require("./server-assets/db/mlab-config");

// Routes
let planets = require("./server-assets/routes/planets");
let moonRoutes = require("./server-assets/routes/moons");

// server setup
let server = express();
let port = 3000;
server.use(cors());
server.use(bp.json());
server.use(bp.urlencoded({ extended: true }));

//EXAMPLE TO COME BACK TO LATER....
// server.get("/api/*", (req, res, next) => {
//   console.log("someone wants the api");
//   if (req.query.password == "let me in") {
//     return next();
//   }
//   return res.status(401).send({ error: "go away" });
// });

server.use(planets.router);
server.use(moonRoutes.router);

server.use("*", (error, req, res, next) => {
  res.status(400).send(error);
});

//vvvv STARTS THE SERVER
server.listen(port, () => {
  console.log("the server is running... Port:", port);
});
