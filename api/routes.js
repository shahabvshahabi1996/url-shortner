const controller = require('./controller');

module.exports = (app) => {
    app.get('/' , controller.root);
    
    app.get('/:hash',controller.redirect);
    
    
    app.get('*' , controller.notFound);
    
    // post 
    app.post('/url/short/it',
        controller.validUrl,
        controller.hasEndPoint,
        controller.makeHash,
        controller.isUrlSavedBefore,
        controller.makeUrl
    );
}

