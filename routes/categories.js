const router = require('express').Router();
const db = require('../db');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

router.use(bodyParser.urlencoded({extended: false}));
router.use(methodOverride('_method'));
router.get('/', (req, res, next) => {
	res.render('index', {homeActive: 'active', db: db.getCategories()});
});

router.get('/categories', (req,res,next)=> {
	res.render('categories', {categories: db.getCategories(), catActive: 'active', db: db.getCategories()});
});

router.get('/categories/reset', (req,res,next)=> {
	db.seed();
	res.redirect('/categories');
});

router.get('/categories/:id', (req,res,next)=> {
	const category =  db.getCategory(req.params.id*1);
	res.render('category', {category: category, products: category.products, catActive: 'active', db: db.getCategories() })
});

router.post('/categories', (req,res,next)=> {
	db.insertCategory(req.body.category)
	res.redirect('/categories');
});

router.post('/categories/:id/product', (req,res,next)=> {
	db.insertProduct(req.body.name,req.params.id*1);
	res.redirect('/categories/' + req.params.id)
});

router.delete('/categories/:id', (req,res,next)=> {
	console.log('delete = ', req.params.id*1)
	db.deleteCategory(req.params.id*1);
	res.redirect('/categories');
});

router.delete('/categories/:categoryId/products/:id',(req,res,next)=> {
	db.deleteProduct(req.params.categoryId*1, req.params.id*1);
	res.redirect('/categories/' + req.params.categoryId);
})


module.exports = router;