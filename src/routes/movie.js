const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Repertoire = require('../models/Repertoire');
/*
router.get("/", (req, res) => {
    Repertoire.find({title: {}}, (err, allMovies)=>{
        if(err){
            console.log(err);
        } else {
           res.send(allMovies);
        }
     });
});

router.get("/:id", async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    res.send(movie);
});

router.put("/:id", async (req, res) => {

});
*/
module.exports = router;