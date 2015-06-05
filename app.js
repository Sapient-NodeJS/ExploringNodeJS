/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var fs = require('fs');
var expressHandlebar = require('express-handlebars');
var handlebars = require('handlebars');
var source;
// Initialize Express
var app = express();

//Handlebars configuration
var hbs = expressHandlebar.create({
	defaultLayout : 'main-layout',
	extname : '.hbs',
	layoutsDir : __dirname + '/assets/hbs-templates',
	partialsDir : __dirname + '/assets/hbs-templates',
	helpers : {
		processModule : function(name, data) {
			source = fs
					.readFileSync(__dirname + '/assets/hbs-templates/option2/'
							+ name + '.hbs', 'utf-8');
			var template = handlebars.compile(source);
			data = {
				'config' : data
			};
			console.log('value:' + JSON.stringify(data));
			var html = template(data);
			console.log(html);
			return html;
		}
	}
});

// all environments
app.set('port', process.env.PORT || 3000);
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', __dirname + '/assets/hbs-templates');
app.set('layoutsDir', __dirname + '/assets/hbs-templates');

require('./routes/routes-main')(app);
app.use(express.static(path.join(__dirname, '/static')));
http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
