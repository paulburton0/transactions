var async = require('async');
var gdax = require('../lib/GDAX');
var coinbase = require('../lib/Coinbase');
var db = require('../lib/db');
var express = require('express');
var router = express.Router();

var cookieName = __dirname.split('/').slice(-2,-1).toString();
/* GET home page. */
router.get('/', function(req, res, next) {
    if(!req.cookies[cookieName]){
        req.pathname = '/login';
        return res.redirect('login');
    }
    async.parallel({
        transactions: function(callback){
            db.getTransactions(function(err, docs){
                if(err){
                    callback(err);    
                }else{
                callback(null, docs);
                }
            });
        },
        gdaxBTCPrice: function(callback){
            gdax.BTCPrice('bid', function(err, gBTCPrice){
                if(err){
                    callback(err);    
                }else{
                    callback(null, gBTCPrice);    
                }
            });
        },
        gdaxETHPrice: function(callback){
            gdax.ETHPrice('bid', function(err, gETHPrice){
                if(err){
                    callback(err);    
                }else{
                    callback(null, gETHPrice);
                }
            });
        },
        gdaxLTCPrice: function(callback){
            gdax.LTCPrice('bid', function(err, gLTCPrice){
                if(err){
                    callback(err);    
                }else{
                    callback(null, gLTCPrice);
                }
            });
        },
        gdaxBCHPrice: function(callback){
            gdax.BCHPrice('bid', function(err, gBCHPrice){
                if(err){
                    callback(err);    
                }else{
                    callback(null, gBCHPrice);
                }
            });
        },
        gdaxETCPrice: function(callback){
            gdax.ETCPrice('bid', function(err, gETCPrice){
                if(err){
                    callback(err);    
                }else{
                    callback(null, gETCPrice);
                }
            });
        },
        gdaxXLMPrice: function(callback){
            gdax.XLMPrice('bid', function(err, gXLMPrice){
                if(err){
                    callback(err);    
                }else{
                    callback(null, gXLMPrice);
                }
            });
        },
        gdaxLINKPrice: function(callback){
            gdax.LINKPrice('bid', function(err, gLINKPrice){
                if(err){
                    callback(err);    
                }else{
                    callback(null, gLINKPrice);
                }
            });
        },
        gdaxXTZPrice: function(callback){
            gdax.XTZPrice('bid', function(err, gXTZPrice){
                if(err){
                    callback(err);    
                }else{
                    callback(null, gXTZPrice);
                }
            });
        },
        coinbaseBTCPrice: function(callback){
            coinbase.BTCPrice('bid', function(err, gBTCPrice){
                if(err){
                    callback(err);    
                }else{
                    callback(null, gBTCPrice);
                }
            });
        },
        coinbaseETHPrice: function(callback){
            coinbase.ETHPrice('bid', function(err, gETHPrice){
                if(err){
                    callback(err);    
                }else{
                    callback(null, gETHPrice)
                }
            });
        },
        coinbaseLTCPrice: function(callback){
            coinbase.LTCPrice('bid', function(err, gLTCPrice){
                if(err){
                    callback(err);    
                }else{
                    callback(null, gLTCPrice)
                }
            });
        },
        coinbaseBCHPrice: function(callback){
            coinbase.BCHPrice('bid', function(err, gBCHPrice){
                if(err){
                    callback(err);    
                }else{
                    callback(null, gBCHPrice)
                }
            });
        },
        coinbaseETCPrice: function(callback){
            coinbase.ETCPrice('bid', function(err, gETCPrice){
                if(err){
                    callback(err);    
                }else{
                    callback(null, gETCPrice)
                }
            });
        },
        coinbaseXLMPrice: function(callback){
            coinbase.XLMPrice('bid', function(err, gXLMPrice){
                if(err){
                    callback(err);    
                }else{
                    callback(null, gXLMPrice)
                }
            });
        },
        coinbaseLINKPrice: function(callback){
            coinbase.LINKPrice('bid', function(err, gLINKPrice){
                if(err){
                    callback(err);    
                }else{
                    callback(null, gLINKPrice)
                }
            });
        },
        coinbaseXTZPrice: function(callback){
            coinbase.XTZPrice('bid', function(err, gXTZPrice){
                if(err){
                    callback(err);    
                }else{
                    callback(null, gXTZPrice)
                }
            });
        }
    }, function(err, results){
        if(err){
            console.error(err);
        }
        res.render('index', { docs: results.transactions, gBTCPrice: results.gdaxBTCPrice, gETHPrice: results.gdaxETHPrice, gLTCPrice: results.gdaxLTCPrice, gBCHPrice: results.gdaxBCHPrice, gETCPrice: results.gdaxETCPrice, gXLMPrice: results.gdaxXLMPrice, gLINKPrice: results.gdaxLINKPrice, gXTZPrice: results.gdaxXTZPrice, cBTCPrice: results.coinbaseBTCPrice, cETHPrice: results.coinbaseETHPrice, cLTCPrice: results.coinbaseLTCPrice, cBCHPrice: results.coinbaseBCHPrice, cETCPrice: results.coinbaseETCPrice, cXLMPrice: results.coinbaseXLMPrice, cLINKPrice: results.coinbaseLINKPrice, cXTZPrice: results.coinbaseXTZPrice, title: 'Transactions' });
    });
});

router.post('/add', function(req, res, next) {
    var time = req.body.time;
    var currency = req.body.currency.toUpperCase();
    var type = req.body.type.toLowerCase();
    var amount = Number(req.body.amount);
    var cost = Number(req.body.cost);

    if(type == 'sell'){
        amount *= -1;    
        cost *= -1;    
    }

    db.addTransaction(time, currency, type, amount, cost, function(){
        //res.redirect('/transactions');
        res.redirect('/');
    });
});

router.post('/edit', function(req, res, next) {
    var id = req.body.id;
    var time = req.body.time;
    var currency = req.body.currency.toUpperCase();
    var type = req.body.type.toLowerCase();
    var amount = Number(req.body.amount);
    var cost = Number(req.body.cost);

    if(type == 'sell' && amount > 0 && cost > 0){
        amount *= -1;    
        cost *= -1;    
    }

    if(type == 'buy' && amount < 0 && cost < 0){
        amount *= -1;    
        cost *= -1;    
    }

    db.updateTransaction(id, time, currency, type, amount, cost, function(){
        //res.redirect('/transactions');
        res.redirect('/');
    });
});

router.post('/remove', function(req, res, next) {
    var id = req.body.id;

    db.removeTransaction(id, function(){
        //res.redirect('/transactions');
        res.redirect('/');
    });
});
module.exports = router;
