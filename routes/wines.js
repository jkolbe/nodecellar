// http://www.stumbleupon.com/su/7kypQe/:1kxAWPLHn:TcezbGaI/coenraets.org/blog/2012/10/creating-a-rest-api-using-node-js-express-and-mongodb

var mongo = require('mongodb');

var Server = mongo.Server,
	Db = mongo.Db,
	BSON = mongo.BSONPure;

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

	//res.send([{name:'wine1'}, {name:'wine2'}, {name:'wine3'}]);
};

exports.findById = function(req, res) {
	// var id = req.params.id;
 //    console.log('Retrieving wine: ' + id);
 //    db.collection('wines', function(err, collection) {
 //        collection.findOne({'_id':new mongo.ObjectID(id)}, function(err, item) {
 //            res.send(item);
 //        });
 //    });

	//res.send({id:req.params.id, name: "The Name", description: "description"});
}

exports.addWine = function(req, res) {}
exports.updateWine = function(req, res) {}
exports.deleteWine = function(req, res) {}


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


