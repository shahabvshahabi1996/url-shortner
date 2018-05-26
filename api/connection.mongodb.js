const mongoose = require('mongoose');
const colors = require('colors/safe');
mongoose.connect('mongodb://admin:admin@ds235180.mlab.com:35180/url-shortner-db-ver2');

mongoose.connection.once('open',()=>{
    console.log(colors.green.bold('We Are Connected To MongoDB DBMS..!'));
}).on('error',()=>{
    console.log(colors.red.bold('something went wrong on db!'));
});