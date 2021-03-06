let express = require('express');
let app = express();
let requestController = require('./Public/requestController')

//static files
app.use(express.static('./public'));
app.use('/assets' , express.static('assets'));

//form data body parser
app.use(express.urlencoded({extended: true}))

//fire up controllers
requestController(app);

//listen to port
app.listen(3000);
console.log('You are listening to port 3000');

