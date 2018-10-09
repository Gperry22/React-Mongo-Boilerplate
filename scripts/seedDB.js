const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactBoilerplate");

const itemSeed = [
  {
    item: "Cabbage",
    quantity: "1",
  },
  {
    item: "Sweet Potatoes",
    quantity: "4",
  },
  {
    item: "Apples",
    quantity: "8",
  },
  {
    item: "Grapefruits",
    quantity: "5",
  },

];

db.Grocery
  .remove({})
  .then(() => db.Grocery.collection.insertMany(itemSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
