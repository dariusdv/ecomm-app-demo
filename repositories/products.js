const Repository = require('./repository');

class ProductsRepository extends Repository {
	delete;
}

module.exports = new ProductsRepository('products.json');
