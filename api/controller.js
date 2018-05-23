const fs = require('fs');
const path = require('path');

exports.root = (req,res) => {
    const pathToHtml = path.join(__dirname , '../public/views/index.html'); 
    res.sendFile(pathToHtml);
}

exports.notFound = (req,res) => {
    const pathToHtml = path.join(__dirname , '../public/views/404.html');     
    res.sendFile(pathToHtml)
}

exports.redirect = (req,res) => {
    res.redirect(301,'http://www.google.com')
}


exports.makeUrl = (req,res) => {
    console.log(req.body);
}



