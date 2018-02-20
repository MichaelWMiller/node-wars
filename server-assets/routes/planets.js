var router = require("express").Router();
var Planets = require("../models/planet");

//GET ALL PLANETS
router.get("/api/planets", (req, res, next) => {
  Planets.find(req.query)
    .then(planets => {
      res.send(planets);
    })
    .catch(next);
});

// GET A PLANET
router.get("/api/planets/:id", (req, res, next) => {
  Planets.findById(req.params.id)
    .then(planet => {
      if (!planet) {
        return res.status(400).send({ error: "Invalid id" });
      }
      return res.send(planet);
    })
    .catch(next);
});

// CREATE PLANET
router.post("/api/planets", (req, res, next) => {
  Planets.create(req.body)
    .then(planet => {
      res.send(planet);
    })
    .catch(next);
});

module.exports = { router };
