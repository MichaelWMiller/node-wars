var router = require("express").Router();
var Stars = require("../models/star");

//GET ALL Stars
router.get("/api/Stars", (req, res, next) => {
    Stars.find(req.query)
        .then(Stars => {
            res.send(Stars);
        })
        .catch(next);
});

// GET A star
router.get("/api/Stars/:id", (req, res, next) => {
    Stars.findById(req.params.id)
        .then(star => {
            if (!star) {
                return res.status(400).send({ error: "Invalid id" });
            }
            return res.send(star);
        })
        .catch(next);
});

//DELETE a star
router.delete("/api/Stars/:id", (req, res, next) => {
    Stars.findById(req.params.id)
        .then(star => {
            if (!star) {
                return res.status(400).send({ error: "Invalid id" });
            }
            return res.send(star);
        })
        .catch(next)
})

// CREATE star
router.post("/api/Stars", (req, res, next) => {
    Stars.create(req.body)
        .then(star => {
            res.send(star);
        })
        .catch(next);
});

module.exports = { router };