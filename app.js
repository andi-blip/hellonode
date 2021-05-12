const request = require("postman-request");
const forecast = require("./utils/forecast.js");
const geocode = require("./utils/geocode.js");
const express = require("express");
const hbs = require("hbs");

const path = require("path");

const app = express();

const name = process.argv[2];
if (!name) {
  console.log("Nuk ka parametra");
} else {
  geocode(name, (error, data) => {
    if (error) {
      console.log("Something went wrong");
    }
    forecast(data.latitude, data.longtitude, (error, forecatData) => {
      if (error) {
        console.log("Something went wrong");
      }
      console.log(data.location);
      console.log(forecatData);
    });
  });
}
const hbsPath = path.join(__dirname, "../templates/partials");
const viewsPath = path.join(__dirname, "../templates/views");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(hbsPath);

app.get("", (req, res) => {
  res.render("index", {
    name: "Andi",
    age: 21,
  });
});
