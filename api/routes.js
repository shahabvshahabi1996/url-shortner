const controller = require('./controller');

module.exports = (app) => {
    app.get('/' , controller.root);
    
    app.get('/:link',controller.redirect);
    
    app.get('*' , controller.notFound);
    
    // post 
    
    app.post('/url/short/it' , controller.makeUrl)

}

