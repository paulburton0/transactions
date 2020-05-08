var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var exports = module.exports = {};

exports.getTransactions = function(cb){
	MongoClient.connect('mongodb://localhost:27017/transactions', function(err, db) {
		var collection = db.collection('transactions');
		// Perform a simple find and return all the documents
		collection.find().toArray(function(err, docs) {
            if(err){
                console.error(err);    
            }
			db.close();
			docs.sort(function(a,b){
				if (a.time < b.time)
					return -1;
				if (a.time > b.time)
					return 1;
				return 0;
			});
			return cb(err, docs);
		});
	});
}

exports.addTransaction = function(time, currency, type, amount, cost, cb){
	MongoClient.connect('mongodb://localhost:27017/transactions', function(err, db) {
		var collection = db.collection('transactions');
        collection.insert({time: time, currency: currency, type: type, amount: amount, cost: cost}, function(){
            return cb(null);    
        });
    });
}

exports.updateTransaction = function(id, time, currency, type, amount, cost, cb){
	MongoClient.connect('mongodb://localhost:27017/transactions', function(err, db) {
		var collection = db.collection('transactions');
        var query = { _id : ObjectID(id) };
        var update = { $set : { time: time, currency: currency, type: type, amount: amount, cost: cost } }
        collection.updateOne(query, update, function(err, result){
            if(err){
                console.error(err);
                return cb(err);
            }
            return cb(null);    
        });
    });
}

exports.removeTransaction = function(id, cb){
	MongoClient.connect('mongodb://localhost:27017/transactions', function(err, db) {
		var collection = db.collection('transactions');
        var query = { _id : ObjectID(id) };
        collection.remove(query, function(err, result){
            if(err){
                console.error(err);
                return cb(err);
            }
            return cb(null);    
        });
    });
}

return exports;
