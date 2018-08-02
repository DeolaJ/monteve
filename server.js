var express = require('express'); 
var path = require('path'); 
var app = express();

var Ravepay = require('ravepay');
var rave = new Ravepay('FLWPUBK-b60faa242c217210eb53400fcf4f0d97-X', 'FLWSECK-13dc0b9fad6017ca16bd0d16d306e049-X', true);

app.use('/', express.static(path.join(__dirname, 'public')));


app.get('/' , (req , res) => {
    res.redirect('/index.html'); 
});
app.listen(3000);