const { Repertoire } = require("./models/Repertoire");
const connect = require("./startup/connectDB");
const mongoose = require("mongoose");
const moment = require("moment");
const axios = require("axios");

moment.locale("pl");
moment.tz.setDefault("Europe/Warsaw");

const data = [
  {
    date: moment().format("ddd"),
    movies: [
      {
        title: "Avengers",
        description: "Lorem ipsum description of movie....",
        posterUrl: "https://ssl-gfx.filmweb.pl/po/05/42/790542/7881430.6.jpg",
        showtimes: [
          {
            time: moment().format("LT"),
            places: [[0, 0, 0, 0], [1, 0, 0, 0]]
          },
          {
            time: moment().format("LT"),
            places: [[0, 1, 1, 0], [1, 0, 0, 0]]
          }
        ]
      }
    ]
  }
];

const createData = async (
  moviesPerDay,
  showtimesPerMovie,
  rows,
  placesInRow
) => {
  const movies = await axios.get(
    "https://api.themoviedb.org/3/search/movie?query=marvel&api_key=2969bf1c44693bceb3f8360d73e09838"
  );
  console.dir(movies);
};

createData();

async function seed() {
  await connect();
  await Repertoire.deleteMany({});
  await Repertoire.insertMany(data);
  mongoose.disconnect();

  console.info("Done!");
}

// seed();
