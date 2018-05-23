const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes');
const path = require('path');

const app = express();

routes(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')))

let port = 8081;
app.listen(port , () => {
    console.log(`you are listening to the magic port : ${port}`)
});


