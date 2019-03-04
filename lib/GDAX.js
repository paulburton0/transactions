var code = require('./Code');
exports = module.exports = {};

exports.BTCPrice= function(key, cb) {
    if (key != 'ask' && key != 'bid'){
        return cb('key must = ask or bid'); 
    }
    
    code.getJSON('https://api.gdax.com/products/BTC-USD/ticker', function(err, json){
        if(err){
            console.error(err);
        }
        json = JSON.parse(json);
        
        if (key == 'ask'){
            return cb(null, json['ask']);
        }
        else if (key == 'bid'){
            return cb(null, json['bid']);
        }
    });
}

exports.ETHPrice= function(key, cb) {
    if (key != 'ask' && key != 'bid'){
        return cb('key must = ask or bid'); 
    }
    
    code.getJSON('https://api.gdax.com/products/ETH-USD/ticker', function(err, json){
        if(err){
            console.error(err);
        }
        json = JSON.parse(json);
        
        if (key == 'ask'){
            return cb(null, json['ask']);
        }
        else if (key == 'bid'){
            return cb(null, json['bid']);
        }
    });
}

exports.LTCPrice= function(key, cb) {
    if (key != 'ask' && key != 'bid'){
        return cb('key must = ask or bid'); 
    }
    
    code.getJSON('https://api.gdax.com/products/LTC-USD/ticker', function(err, json){
        if(err){
            console.error(err);
        }
        json = JSON.parse(json);
        
        if (key == 'ask'){
            return cb(null, json['ask']);
        }
        else if (key == 'bid'){
            return cb(null, json['bid']);
        }
    });
}

exports.BCHPrice= function(key, cb) {
    if (key != 'ask' && key != 'bid'){
        return cb('key must = ask or bid'); 
    }
    
    code.getJSON('https://api.gdax.com/products/BCH-USD/ticker', function(err, json){
        if(err){
            console.error(err);
        }
        json = JSON.parse(json);
        
        if (key == 'ask'){
            return cb(null, json['ask']);
        }
        else if (key == 'bid'){
            return cb(null, json['bid']);
        }
    });
}

exports.ETCPrice= function(key, cb) {
    if (key != 'ask' && key != 'bid'){
        return cb('key must = ask or bid'); 
    }
    
    code.getJSON('https://api.gdax.com/products/ETC-USD/ticker', function(err, json){
        if(err){
            console.error(err);
        }
        json = JSON.parse(json);
        
        if (key == 'ask'){
            return cb(null, json['ask']);
        }
        else if (key == 'bid'){
            return cb(null, json['bid']);
        }
    });
}

return exports;
