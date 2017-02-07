const _categories = [
  {
    "id": 1,
    "name": "Sports",
    "products": [
      {
        "id": 1,
        "name": "tennis racket"
      },
      {
      	"id": 2,

      	"name": "baseball mitt"
      }
    ]
  },
  {
    "id": 2,
    "name": "Rain Coats",
    "products": [
      {
        "id": 1,
        "name": "London Mist"
      }, 
      {
      	"id": 2,

      	"name": "Trench Coat"
      }
    ]
  }
];

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
const deleteCategory = ()=> {};
const insertProduct = ()=> {};
const deleteProduct = ()=> {};



module.exports = {
	getCategories: getCategories,
	getCategory: getCategory,
	insertCategory: insertCategory,
	deleteCategory: deleteCategory,
	insertProduct: insertProduct,
	deleteProduct: deleteProduct
};