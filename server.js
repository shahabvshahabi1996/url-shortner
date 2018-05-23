const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes');

const app = express();

routes(app);

let port = 8081;
app.listen(port , () => {
    console.log(`you are listening to the magic port : ${port}`)
});


