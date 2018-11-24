const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cookieParser = require('cookie-parser')

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/img', express.static('public/img'));
app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));

require('./controllers/routes') (app)

const PORT = process.env.PORT || 3000
	let server = app.listen(PORT)
	console.log('App listens on port ' + PORT);
	server.on('error', (err) =>
	{
		console.log (err)
	})
