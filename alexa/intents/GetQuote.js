const lib = require('lib');
const fetch = require('node-fetch');

module.exports = function (slots, callback) {

  // get Trump API
  if(slots.Subject.value) {
    fetch('https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=' + slots.Subject.value)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
        // quote = json;
        return callback(null, json.message);
    });
  // if("value" in slots.Country) {
  //   fetchTrump(slots.Country.value);
  // } else if("value" in slots.Company) {
  //   fetchTrump(slots.Company.value);
  // } else if("value" in slots.Character) {
  //   fetchTrump(slots.Character.value);
  // } else if("value" in slots.Actor) {
  //   fetchTrump(slots.Actor.value);
  // } else if("value" in slots.Animal) {
  //   fetchTrump(slots.Animal.value);
  // } else if("value" in slots.Artist) {
  //   fetchTrump(slots.Artist.value);
  // } else if("value" in slots.Athlete) {
  //   fetchTrump(slots.Athlete.value);
  // } else if("value" in slots.Author) {
  //   fetchTrump(slots.Author.value);
  // } else if("value" in slots.Book) {
  //   fetchTrump(slots.Book.value);
  // } else if("value" in slots.Dessert) {
  //   fetchTrump(slots.Dessert.value);
  // } else if("value" in slots.Drink) {
  //   fetchTrump(slots.Drink.value);
  // } else if("value" in slots.Director) {
  //   fetchTrump(slots.Director.value);
  // } else if("value" in slots.Food) {
  //   fetchTrump(slots.Food.value);
  // } else if("value" in slots.Game) {
  //   fetchTrump(slots.Game.value);
  // } else if("value" in slots.Movie) {
  //   fetchTrump(slots.Movie.value);
  // } else if("value" in slots.Musician) {
  //   fetchTrump(slots.Musician.value);
  // } else if("value" in slots.MusicGroup) {
  //   fetchTrump(slots.MusicGroup.value);
  // } else if("value" in slots.Person) {
  //   fetchTrump(slots.Person.value);
  // } else if("value" in slots.Sport) {
  //   fetchTrump(slots.Sport.value);
  // } else if("value" in slots.State) {
  //   fetchTrump(slots.State.value);
  // } else if("value" in slots.City) {
  //   fetchTrump(slots.City.value);
  // } else if("value" in slots.Name) {
  //   fetchTrump(slots.Name.value);
  // } else if("value" in slots.Series) {
  //   fetchTrump(slots.Series.value);
  } else {
    fetch('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
        // quote = json;
        return callback(null, json.message);
    });
  }

  // return callback(null, quote);

};

// function fetchTrump(subject){
//   fetch('https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=' + subject)
//   .then(function(response){
//     return response.json();
//   })
//   .then(function(json){
//       // quote = json;
//       return callback(null, json.message);
//   });
// }
