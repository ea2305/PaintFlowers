/**
 * @author Elihu A. Cruz
 * @version 1.0.1
 */
const express = require('express');
const app = express();
const path = require('path');

// Definimos el puerto
const PORT = process.env.PORT || 3001;

// Heroku configurations
const CONCURRENCY = process.env.WEB_CONCURRENCY || 1;

// Archivos estáticos
app.use('/static', express.static('static'));


app.get('/', function ( req, res, next ) {
	res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen( PORT , () => {
	console.log( `The server is running over ${ PORT }` );
})