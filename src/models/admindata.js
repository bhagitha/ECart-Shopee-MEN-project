const mongoose = require('mongoose') //accessing mongoose package
    //mongoose connect
mongoose.connect('mongodb+srv://user_bhagitha:Bhagitha9072%40@mycluster.74kgk.azure.mongodb.net/MENFruitShop?retryWrites=true&w=majority'); //connection string
const Schema = mongoose.Schema; //schema defnitionconst 
const adminSchema = new Schema({
    name: String,
    email: String,
    username: String,
    password: String

}, { strict: false });
var admindata = mongoose.model('admindata', adminSchema);
module.exports = admindata;