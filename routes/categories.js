const router = require('express').Router();
const db = require('../db');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));
router.get('/', (req, res, next) => {
	res.render('index');
});

router.get('/categories', (req,res,next)=> {
	res.render('categories', {categories: db.getCategories()});
});

router.get('/categories/:id', (req,res,next)=> {
	const category =  db.getCategory(req.params.id*1);
	res.render('category', {category: category, products: category.products})
});

router.post('/categories', (req,res,next)=> {
	db.insertCategory(req.body.category)
	res.redirect('/categories');
});


module.exports = router;