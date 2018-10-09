const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model

const grocerySchema = new Schema({

    item: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

const Grocery = mongoose.model("Grocery", grocerySchema);

module.exports = Grocery;