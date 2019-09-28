const express = require('express');
const router = express.Router();

const { Repertoire } = require('../models/Repertoire');

// RESTful Routes

router.get("/", (req, res)=>{
res.redirect("api/movies");
})

router.get("/api/movies", async (req,res)=>{
  const daysOfTheWeek = await Repertoire.find()
  res.send(daysOfTheWeek);
});


router.get("/api/movies/:id", async (req, res) => {
    const dayOfTheWeek = await Repertoire.findById(req.params.id);
    res.send(dayOfTheWeek);
});
/*
router.put("/api/movies/:id", async (req, res) => {
  const days = await Repertoire.findByIdAndUpdate(req.params.id, {
    Id: req.body.Id, 
    date: req.body.date,
    movies: req.body.movies
  });
  
  if (!days) return res.status(404).send('The repertoire with the given ID was not found.');
  
  res.send(days);
});*/

module.exports = router;