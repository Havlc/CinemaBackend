const JoiMoment = require("@meanie/joi-moment");
const Joi = require("joi").extend(JoiMoment);
const mongoose = require("mongoose");

const RepertoireSchema = new mongoose.Schema({
  date: String,
  movies: [
    {
      title: String,
      description: String,
      posterUrl: String,
      showtimes: [
        {
          time: String,
          places: [[Number]]
        }
      ]
    }
  ]
});

function validateRepertoire(repertoire) {
  const schema = {
    date: Joi.moment().required(),
    movies: Joi.array().items(
      Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string(),
        posterUrl: Joi.string().uri(),
        showtimes: Joi.array().items(
          Joi.object().keys({
            time: Joi.moment().required(),
            places: Joi.array().items(Joi.array().items(Joi.number()))
          })
        )
      })
    )
  };

  return Joi.validate(repertoire, schema);
}

module.exports.validate = validateRepertoire;
module.exports.Repertoire = mongoose.model("Repertoire", RepertoireSchema);
