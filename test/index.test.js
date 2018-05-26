const assert = require('assert');
const axios = require('axios');


describe('POST and GET Rquests',()=>{

    it('should validates a url (http OR not http)',(done)=>{
        axios.post('http://localhost:8081/url/short/it', {
            link : 'www.google.com'
        })
        .then(function (response) {
            assert.equal(400,response.data.status)
        })
        .catch(function (error) {
            assert(error)
        });

        done();
    });

    it('should check that is the url has end point or not!',(done) => {
        axios.post('http://localhost:8081/url/short/it', {
            link : 'http://www.google.asdasd'
        })
        .then(function (response) {
            assert.equal(400,response.data.status)
        })
        .catch(function (error) {
            assert(error)
        });

        done();
    });

    it('should works fine in Saving a Url',(done)=>{
        axios.post('http://localhost:8081/url/short/it', {
            link : 'http://www.github.com'
        })
        .then(function (response) {
            assert.equal(200,response.data.status);
        })
        .catch(function (error) {
            assert(error)
        });

        done();
    });
    
    it('should return home page',(done) => {
        axios.get('http://localhost:8081/')
        .then(function (response) {
            assert.equal(200,response.status);
        })
        .catch(function (error) {
            assert(error)
        });

        done();
    });

    it('should return 404 not found page',(done) => {
        axios.get('http://localhost:8081/asdasdasdasnd')
        .then(function (response) {
            assert.equal(200,response.status);
        })
        .catch(function (error) {
            assert(error)
        });

        done();
    });
    
    it('should redirect us to the remote url',(done) => {
        axios.get('http://localhost:8081/dca96')
        .then(function (response) {
            assert.equal(200,response.status);
        })
        .catch(function (error) {
            assert(error)
        });

        done();
    });

})
