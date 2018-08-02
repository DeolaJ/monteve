const express = require('express'); 
const path = require('path'); 
const app = express();
var port = process.env.PORT;

const Ravepay = require('ravepay');
const rave = new Ravepay('FLWPUBK-b60faa242c217210eb53400fcf4f0d97-X', 'FLWSECK-13dc0b9fad6017ca16bd0d16d306e049-X', true);

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/' , (req , res) => {
    res.redirect('/index.html'); 
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});