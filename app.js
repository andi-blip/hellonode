const request = require("postman-request");
const forecast = require("./utils/forecast.js");
const geocode = require("./utils/geocode.js");

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
