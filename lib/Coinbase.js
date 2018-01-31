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
return exports;
