var Express = require('Express');
var bodyParser = require('body-parser');
var app = Express();

// const port = 49146;

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(5000, () => {});

app.get('/', (req, res) => {
    res.json("Hello World")
});