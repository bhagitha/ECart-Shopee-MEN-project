const express = require('express');
const app = express();
const productr = require('./src/routers/products')
const cookie = require('cookie-parser');
const checkAuth = require('./src/middleware/check-auth')
app.use(cookie())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./public'))
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/src/views`)
const productsdata = require('./src/models/productsdata');
const res = require('express/lib/response');
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Headers", "Origin,X-Requsted-With,Content-Type,Accept,Authorization");
//     res.header("Access-Control-Allow-Methods", "GET,POST,PATCH,PUT,DELETE,OPTIONS");
//     next();
// });
var fruits;
app.use('/products', productr);
app.get('/', function(req, res) {
    res.render("login", {
        val: null
    })
})
app.get('/home',
        function(req, res) {
            // res.send('Hello World')
            // res.json({name:"raheena"})
            // res.sendFile(`${__dirname }/src/views / home.html `)


            productsdata.find()
                .then((data) => {
                    res.render("home", {
                        fruits: data,

                    })
                })

        }) //routing
    // quantity: req.body.quantity,


app.listen(3000, function() {
    console.log("server is running")
})