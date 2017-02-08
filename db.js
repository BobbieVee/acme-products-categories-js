let _categories = [];

const seed = ()=> {
	_categories = [
	  {
	    "id": 1,
	    "name": "Swim",
	    "products": [
	      {
	        "id": 1,
	        "name": "Speedo Goggles"
	      },
	      {
	      	"id": 2,
	      	"name": "WetSuit"
	      }
	    ]
	  },
	  {
	    "id": 2,
	    "name": "Bike",
	    "products": [
	      {
	        "id": 1,
	        "name": "Cervello P3"
	      }, 
	      {
	      	"id": 2,
	      	"name": "Bullet Bottle"
	      }
	    ]
	  },
	  {
	    "id": 3,
	    "name": "Run",
	    "products": [
	      {
	        "id": 1,
	        "name": "Altra Running shoes"
	      }, 
	      {
	      	"id": 2,
	      	"name": "Bib Belt"
	      }
	    ]
	  }
	];
};

seed();

const getCategories = ()=> {
	return _categories;
};

const getCategory  = (id)=> {
	return getCategories().filter((category) => {
		return id === category.id;
	})[0];
};
const insertCategory = (name)=> {
	let newId = getCategories().reduce((max, category)=> {
		return category.id >= max?max=category.id+1:max;
	}, 0);
	getCategories().push({"id": newId, "name": name, "products": []})
};
const deleteCategory = (id)=> {
	let delIndex = null;
	getCategories().forEach((category, index)=> {
		if(category.id === id) delIndex = index;
	});
	getCategories().splice(delIndex,1)

};
const insertProduct = (name, categoryId)=> {
	newId = getCategory(categoryId).products.reduce((max, product)=> {
		return product.id >= max?product.id++:max
	}, 0);
	getCategory(categoryId).products.push({"id": newId, "name": name});

};
const deleteProduct = (catId, id)=> {
	let delIndex = null;
	getCategory(catId).products.forEach((product, index)=> {
		if (product.id === id) delIndex = index;		
	});
	getCategory(catId).products.splice(delIndex,1);
};
 


module.exports = {
	getCategories: getCategories,
	getCategory: getCategory,
	insertCategory: insertCategory,
	deleteCategory: deleteCategory,
	insertProduct: insertProduct,
	deleteProduct: deleteProduct,
	seed: seed
};