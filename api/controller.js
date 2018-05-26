const fs = require('fs');
const path = require('path');
const md5 = require('md5');
const Url = require('./model/urlModel');
const isUrl = require('valid-url');
const urlExists = require('url-exists');


exports.root = (req,res) => {
    const pathToHtml = path.join(__dirname , '../public/views/index.html'); 
    res.sendFile(pathToHtml);
}

exports.notFound = (req,res) => {
    const pathToHtml = path.join(__dirname , '../public/views/404.html');     
    res.sendFile(pathToHtml)
}

exports.hasEndPoint = (req , res , next) => {
    urlExists(req.body.link,(err , exists)=>{
        if(exists) {
            next();
            return ;
        }
        else {
            res.json({
                status : 400,
                message : "your link has no end point!"
            });
        }
    })
}  

exports.redirect = async (req,res) => {
    const url = await Url.findOne({hash : req.params.hash})
    if(url) {
        res.redirect(301,url.url);
    }
    else {
        const pathToHtml = path.join(__dirname , '../public/views/404.html');     
        res.sendFile(pathToHtml)
        return ;
    }
}

exports.validUrl = (req,res,next) => {
    console.log(req);
    if(req.body) {
        if(isUrl.isUri(req.body.link)){
            next();
            return ;
        }
        else {
            res.json({
                status : 400,
                message : 'plz enter a correct url with http or https!'
            });
        }
    }
    return ;
}


exports.makeHash = (req,res,next) => {
    const hash = md5(req.body.link);
    req.body.hash = hash.slice(0,5);
    next();
}

exports.isUrlSavedBefore = async (req,res,next) => {
    const url = await Url.findOne({hash : req.body.hash});
    if(url) {
        res.json({
            status : 200,
            data : {
                url : url.url,
                hashLink : `http://localhost:8081/${url.hash}`
            } 
        });
    }
    else {
        next();
        return ;
    }
}   


exports.makeUrl = (req,res) => {
    new Url({
        hash : req.body.hash,
        url : req.body.link
    }).save((err,result)=>{
        if(err){
            res.json({
                status : 400,
                message : 'Something Went Wrong!'
            });

            return ;
        } 
        res.json({
            status : 200,
            data : {
                url : result.url,
                hashLink : `http://localhost:8081/${result.hash}`
            }
        }); 
    })
}



