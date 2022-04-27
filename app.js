//wersja 1.1
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "elearning2"

});

con.connect(function(err){
    if (err) throw err;
    con.query("SELECT name FROM users", function(err, result, fields){
        if (err) throw err;
        console.log(result); 
    });
});

const express = require('express')
const port = parseInt(process.env.PORT) || 3000

const app = express()
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'node.js',
        pageBody: response
    })
})

app.get('/kontakt', (req, res) => {
    res.send('Kontakt')
})

app.listen(port)

