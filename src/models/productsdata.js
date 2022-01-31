const mongoose = require('mongoose') //accessing mongoose package
    //mongoose connect
mongoose.connect('mongodb+srv://user_bhagitha:Bhagitha9072%40@mycluster.74kgk.azure.mongodb.net/MENFruitShop?retryWrites=true&w=majority'); //connection string
const Schema = mongoose.Schema; //schema defnition
const fruitSchema = new Schema({
    name: String,
    price: String,
    img: String
}, { strict: false });


var productsdata = mongoose.model('productsdata', fruitSchema);
module.exports = productsdata;