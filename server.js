const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes');
const path = require('path');
const colors = require('colors');
const cors = require('cors');

const app = express();

require('./api/connection.mongodb');


app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

routes(app);

let port = 8081;
app.listen(port , () => {
    console.log(`${colors.underline("you are listening to the magic port")} : ${colors.green.bold(port)}`)
});


