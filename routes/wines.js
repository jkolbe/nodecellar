// http://www.stumbleupon.com/su/7kypQe/:1kxAWPLHn:TcezbGaI/coenraets.org/blog/2012/10/creating-a-rest-api-using-node-js-express-and-mongodb

var mongo = require('mongodb');

var Server = mongo.Server,
	Db = mongo.Db;

var BSON = require('bson').BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('winedb', server);

db.open(function(err, db){
	if(!err) {
		console.log("Connected to 'winedb' databse");
		db.collection('wines', {strict:true}, function(err, collection) {
			if (err) {
                console.log("The 'wines' collection doesn't exist. Creating it with sample data...");
                // populate with data
                populateDB();
            }
		});
	}
});

// mongoDB methods
// find() findOne()

exports.findAll = function(req, res) {
	db.collection('wines', function(err, collection){
		collection.find().toArray(
			function(err, items) {
				res.send(items);
			}
		);
	});
};

exports.findById = function(req, res) {
	var id = req.params.id;
    console.log('Retrieving wine: ' + id);
    db.collection('wines', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) { 
            res.send(item); 
        });
    });
}

exports.addWine = function(req, res) {
	var wine = req.body;
    console.log(wine);
    console.log('Adding wine: ' + JSON.stringify(wine));

    db.collection('wines', function(err, collection) {
        collection.insert(wine, {safe:true}, function(err, result){
            if(err) {
                res.send({error: 'An error occured - ' + err});
            } else {
                res.send(result[0]);
            }
        });
    });
}


exports.updateWine = function(req, res) {
    var id = req.params.id;
    var wine = req.body;
    console.log('Updating wine: ' + id + ' updates: ' + JSON.stringify(wine));
    db.collection('wines', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, wine, {safe: true}, function(err, result){
            if(err) {
                res.send({error: 'An error occured - ' + err });
            } else {
                res.send(wine);
            }
        });
    });
}


exports.deleteWine = function(req, res) {
    var id = req.params.id;
    console.log('Deleting wine: ' + id);
    db.collection('wines', function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(id)}, {safe: true}, function(err, result){
            if(err) {
                res.send({error: 'An error occured - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}


// populate DB with sample data
var populateDB = function() {
	var wines = [
    {
        name: "CHATEAU DE SAINT COSME",
        year: "2009",
        grapes: "Grenache / Syrah",
        country: "France",
        region: "Southern Rhone",
        description: "The aromas of fruit and spice...",
        picture: "saint_cosme.jpg"
    },
    {
        name: "LAN RIOJA CRIANZA",
        year: "2006",
        grapes: "Tempranillo",
        country: "Spain",
        region: "Rioja",
        description: "A resurgence of interest in boutique vineyards...",
        picture: "lan_rioja.jpg"
    }];

    db.collection('wines', function(err, collection){
    	collection.insert(wines, {safe:true}, function(err, result) {});
    });
};


