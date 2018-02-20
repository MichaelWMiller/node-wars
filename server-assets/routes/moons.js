var router = require("express").Router();
var Moons = require("../models/moon");

//GET ALL PLANETS
router.get("/api/moons", (req, res, next) => {
  Moons.find(req.query)
    .then(moons => {
      res.send(moons);
    })
    .catch(next);
});

// GET A PLANET
router.get("/api/moons/:id", (req, res, next) => {
  Moons.findById(req.params.id)
    .then(moon => {
      if (!moon) {
        return res.status(400).send({ error: "Invalid id" });
      }
      return res.send(moon);
    })
    .catch(next);
});

// CREATE PLANET
router.post("/api/moons", (req, res, next) => {
  Moons.create(req.body)
    .then(moon => {
      res.send(moon);
    })
    .catch(next);
});

module.exports = { router };
