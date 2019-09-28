const express = require('express');
const router = express.Router();

const {Repertoire} = require('../models/Repertoire');

router.get("/", async (req, res) => {
    const movies = await Repertoire.find();
    res.send(movies);
});

router.get("/:id", async (req, res) => {
    const movie = await Repertoire.findById(req.params.id);
    res.send(movie);
});

router.put("/:id", async (req, res) => {

});

module.exports = router;