exports.findAll = function(req, res) {
	res.send([{name:'wine1'}, {name:'wine2'}, {name:'wine3'}]);
};

exports.findById = function(req, res) {
	res.send({id:req.params.id, name: "The Name", description: "description"});
}

exports.addWine = function(req, res) {}
exports.updateWine = function(req, res) {}
exports.deleteWine = function(req, res) {}

