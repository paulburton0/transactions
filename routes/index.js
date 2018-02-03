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
        return res.redirect('/login');
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
        }
    }, function(err, results){
        if(err){
            console.error(err);
        }
        res.render('index', { docs: results.transactions, gBTCPrice: results.gdaxBTCPrice, gETHPrice: results.gdaxETHPrice, gLTCPrice: results.gdaxLTCPrice, gBCHPrice: results.gdaxBCHPrice, cBTCPrice: results.coinbaseBTCPrice, cETHPrice: results.coinbaseETHPrice, cLTCPrice: results.coinbaseLTCPrice, cBCHPrice: results.coinbaseBCHPrice, title: 'Transactions' });
    });
});

router.post('/', function(req, res, next) {
    var time = req.body.time;
    var currency = req.body.currency.toUpperCase();
    var type = req.body.type;
    var amount = Number(req.body.amount);
    var cost = Number(req.body.cost);

    if(type == 'sell'){
        amount *= -1;    
        cost *= -1;    
    }

    db.addTransaction(time, currency, type, amount, cost, function(){
        res.redirect('/');
    });
});

module.exports = router;
