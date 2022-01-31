const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user_bhagitha:Bhagitha9072%40@mycluster.74kgk.azure.mongodb.net/MENFruitShop?retryWrites=true&w=majority'); //connection string
const Schema = mongoose.Schema;
const cartSchema = new Schema({
    // product_id: { type: Schema.Types.ObjectId, ref: "productsdata", required: true },
    prdname:String,
    prdPrice:String,
    prdImg:String,
    qt: String,
    amount: String

})
var cartdata = mongoose.model('cartdata', cartSchema);
module.exports = cartdata;