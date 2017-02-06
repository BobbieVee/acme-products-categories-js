const express = require('express');
const path = require('path');
const chalk = require('chalk');
const nunjucks = require('nunjucks'); 
const routes = require('./routes/categories');

// Environment Variables
const port = process.env.PORT || 3000;
const noCache = process.env.NOCACHE;

const app = express();
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: noCache})
app.use(express.static(path.join(__dirname, 'node_modules')));


app.use('/', routes);


app.listen(port, ()=> {
	console.log(chalk.blue(`*** Intently listening on port ${port} ***`));
})