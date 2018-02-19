var express = require('express');
var bodyParser = require('body-parser');
//var storyRouter = require('./routers/story.js');
//var mongoose = require('mongoose');

var app = express();

//mongoose.connect('mongodb://localhost/hackednews');

app.use(bodyParser.json());



// app.use('/api/stories', storyRouter);

app.get('/', (req, res) => {
	res.sendStatus(200)
})

app.listen(8000, function() {
  console.log('listening on port 8000');
});
