<<<<<<< HEAD
const express = require('express')
const port = 3000
=======
//wersja 1.1
const express = require('express')
const port = parseInt(process.env.PORT) || 3000
>>>>>>> 5b62e6b (wersja 1.1)

const app = express()
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'node.js',
        pageBody: 'Body'
    })
})

app.get('/kontakt', (req, res) => {
    res.send('Kontakt')
})

app.listen(port)

