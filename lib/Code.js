var request = require('request');

exports = module.exports = {};

exports.getJSON = function(url, cb){
    var options = { 
        url: url,
        headers: {
            'User-Agent': 'request'
        }
    };

    request(options, function(error, response, body){
        if(error){
            console.error(error);
        }
        return cb(null, body);
    });
}
