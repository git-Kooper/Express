const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
const app = express();

app.use(express.static('./public'));

// const port = 49146;

// app.use(bodyParser.json);
// app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    console.log('user hit the index.html')
        // res.status(200).send('Home Page')
        // res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
    res.sendFile(path.resolve(__dirname, '../navbar-app/index.html'))
        // res.sendFile('../navbar-app/index.html')
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

app.all('*', (req, res) => {
    res.status(400).send('resource not found');
})


// app.all('*', (req, res) => {
//     res.status(404).send('<h1>resource not found</h1>')
// })

app.listen(5000, () => {
    console.log('server is listening on port 5000...')
})