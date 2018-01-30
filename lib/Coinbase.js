var code = require('./Code');
exports = module.exports = {};

exports.coinbasePrice = function(key, cb) {
    var url;
    if (key != 'ask' && key != 'bid'){
        return 'key must = ask or bid'; 
    }
    if (key == 'ask')
        url = 'https://coinbase.com/api/v1/prices/buy?qty=1&currency=USD'
    else if (key == 'bid')
        url = 'https://coinbase.com/api/v1/prices/sell?qty=1&currency=USD'
    
    code.getJSON(url, function(json){
        json = JSON.parse(json);
        return cb(json['amount']);
    });
}

return exports;
