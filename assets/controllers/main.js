var links = require('../data/links.json');
exports.home = function(req, res){
	console.log(JSON.stringify(links));
	res.render('index', { 
		data : links,
		title : 'Exploring Node JS',
		helpers : {
			inc : function(value) {				
				return value + 1;
			}
		}
	});
};