var code = require('./Code');
exports = module.exports = {};

exports.BTCPrice = function(key, cb) {
    var url;
    if (key != 'ask' && key != 'bid'){
        return cb('key must = ask or bid'); 
    }
    if (key == 'ask')
        url = 'https://api.coinbase.com/v2/prices/BTC-USD/buy'
    else if (key == 'bid')
        url = 'https://api.coinbase.com/v2/prices/BTC-USD/sell'
    
    code.getJSON(url, function(err, json){
        if(err){
            console.error(err);
        }
        json = JSON.parse(json);
        return cb(null, json['data']['amount']);
    });
}

exports.ETHPrice = function(key, cb) {
    var url;
    if (key != 'ask' && key != 'bid'){
        return cb('key must = ask or bid'); 
    }
    if (key == 'ask')
        url = 'https://api.coinbase.com/v2/prices/ETH-USD/buy'
    else if (key == 'bid')
        url = 'https://api.coinbase.com/v2/prices/ETH-USD/sell'
    
    code.getJSON(url, function(err, json){
        if(err){
            console.error(err);
        }
        json = JSON.parse(json);
        return cb(null, json['data']['amount']);
    });
}

exports.LTCPrice = function(key, cb) {
    var url;
    if (key != 'ask' && key != 'bid'){
        return cb('key must = ask or bid'); 
    }
    if (key == 'ask')
        url = 'https://api.coinbase.com/v2/prices/LTC-USD/buy'
    else if (key == 'bid')
        url = 'https://api.coinbase.com/v2/prices/LTC-USD/sell'
    
    code.getJSON(url, function(err, json){
        if(err){
            console.error(err);
        }
        json = JSON.parse(json);
        return cb(null, json['data']['amount']);
    });
}

exports.BCHPrice = function(key, cb) {
    var url;
    if (key != 'ask' && key != 'bid'){
        return cb('key must = ask or bid'); 
    }
    if (key == 'ask')
        url = 'https://api.coinbase.com/v2/prices/BCH-USD/buy'
    else if (key == 'bid')
        url = 'https://api.coinbase.com/v2/prices/BCH-USD/sell'
    
    code.getJSON(url, function(err, json){
        if(err){
            console.error(err);
        }
        json = JSON.parse(json);
        return cb(null, json['data']['amount']);
    });
}

exports.ETCPrice = function(key, cb) {
    var url;
    if (key != 'ask' && key != 'bid'){
        return cb('key must = ask or bid'); 
    }
    if (key == 'ask')
        url = 'https://api.coinbase.com/v2/prices/ETC-USD/buy'
    else if (key == 'bid')
        url = 'https://api.coinbase.com/v2/prices/ETC-USD/sell'
    
    code.getJSON(url, function(err, json){
        if(err){
            console.error(err);
        }
        json = JSON.parse(json);
        return cb(null, json['data']['amount']);
    });
}

exports.XLMPrice = function(key, cb) {
    var url;
    if (key != 'ask' && key != 'bid'){
        return cb('key must = ask or bid'); 
    }
    if (key == 'ask')
        url = 'https://api.coinbase.com/v2/prices/XLM-USD/buy'
    else if (key == 'bid')
        url = 'https://api.coinbase.com/v2/prices/XLM-USD/sell'
    
    code.getJSON(url, function(err, json){
        if(err){
            console.error(err);
        }
        json = JSON.parse(json);
        return cb(null, json['data']['amount']);
    });
}

exports.LINKPrice = function(key, cb) {
    var url;
    if (key != 'ask' && key != 'bid'){
        return cb('key must = ask or bid'); 
    }
    if (key == 'ask')
        url = 'https://api.coinbase.com/v2/prices/LINK-USD/buy'
    else if (key == 'bid')
        url = 'https://api.coinbase.com/v2/prices/LINK-USD/sell'
    
    code.getJSON(url, function(err, json){
        if(err){
            console.error(err);
        }
        json = JSON.parse(json);
        return cb(null, json['data']['amount']);
    });
}

exports.XTZPrice = function(key, cb) {
    var url;
    if (key != 'ask' && key != 'bid'){
        return cb('key must = ask or bid'); 
    }
    if (key == 'ask')
        url = 'https://api.coinbase.com/v2/prices/XTZ-USD/buy'
    else if (key == 'bid')
        url = 'https://api.coinbase.com/v2/prices/XTZ-USD/sell'
    
    code.getJSON(url, function(err, json){
        if(err){
            console.error(err);
        }
        json = JSON.parse(json);
        return cb(null, json['data']['amount']);
    });
}

return exports;
