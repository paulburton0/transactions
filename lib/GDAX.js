var code = require('./Code');
exports = module.exports = {};

exports.gdaxPrice = function(currency, key, cb) {
    if (key != 'ask' && key != 'bid'){
        return 'key must = ask or bid'; 
    }
    
    code.getJSON('https://api.gdax.com/products/'+currency+'/ticker', function(json){
        json = JSON.parse(json);
        
        if (key == 'ask'){
            return cb(json['ask']);
            //return cb(json);
        }
        else if (key == 'bid'){
            return cb(json['bid']);
            //return cb(json);
        }
    });
}

return exports;
