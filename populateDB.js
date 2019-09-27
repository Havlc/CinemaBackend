const { Repertoire } = require("./src/models/Repertoire");
const connect = require("./src/startup/connectDB");
const mongoose = require("mongoose");
const moment = require("moment");
const axios = require("axios");

moment.locale("pl");
moment.tz.setDefault("Europe/Warsaw");

// const data = [
//   {
//     date: moment().format("ddd"),
//     movies: [
//       {
//         title: "Avengers 2",
//         description: "Lorem ipsum description of movie....",
//         posterUrl: "https://ssl-gfx.filmweb.pl/po/05/42/790542/7881430.6.jpg",
//         showTimes: [
//           {
//             time: moment().format("LT"),
//             occupiedPlaces: [{row: 2, sit: 4}, {row: 2, sit: 5}]
//           },
//           {
//             time: moment().format("LT"),
//             occupiedPlaces: [{row: 3, sit: 5}, {row: 3, sit: 6}, {row: 3, sit: 7}]
//           }
//         ]
//       }
//     ]
//   }
// ];

const createData = async days => {
  const baseExternalApiUrl = 'http://image.tmdb.org/t/p';
  const movies = await axios.get(
    "https://api.themoviedb.org/3/search/movie?query=marvel&api_key=2969bf1c44693bceb3f8360d73e09838"
  );
  const moviesTable = movies.data.results
  const data = []
  
  for(let i = 0; i< days; i++){
    const obj = {
      date: moment().add(i, 'd').format('ddd'),
      movies: [{
        title: moviesTable[i*2].title,
        description: moviesTable[i*2].overview,
        posterUrl: baseExternalApiUrl+moviesTable[i*2].poster_path,
        showTimes: [
          {
            time: moment("1515", "hmm").format("HH:mm"),
            occupiedPlaces: [{row: 2, sit: 4}, {row: 2, sit: 5}]
          },
          {
            time: moment("2230", "hmm").format("HH:mm"),
            occupiedPlaces: [{row: 3, sit: 5}, {row: 3, sit: 6}, {row: 3, sit: 7}]
          }
        ]
      },{
        title: moviesTable[i*2+1].title,
        description: moviesTable[i*2+1].overview,
        posterUrl: baseExternalApiUrl+moviesTable[i*2+1].poster_path,
        showTimes: [
          {
            time: moment("2115", "hmm").format("HH:mm"),
            occupiedPlaces: [{row: 2, sit: 4}, {row: 2, sit: 5}]
          },
          {
            time: moment("1830", "hmm").format("HH:mm"),
            occupiedPlaces: [{row: 3, sit: 5}, {row: 3, sit: 6}, {row: 3, sit: 7}]
          }
        ]
      }]
    }
    data.push(obj);
  }

  return data;
};

async function seed() {
  await connect();
  await Repertoire.deleteMany({});
  const newData = await createData(7);
  await Repertoire.insertMany(newData);
  mongoose.disconnect();

  console.info("Done!");
}

seed();
