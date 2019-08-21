const fs = require('fs');
const url = require('url');
const findFewProducts = require('../helpers/findFewProducts');

const products = JSON.parse(fs.readFileSync(`__dirname/../src/db/products/products.json`));

const productController = (request, response) => {
  if (request.url === '/products' && request.method === 'GET') {
    response.writeHead(200, {
      'Content-Type': 'application/json'
    });
    response.end(JSON.stringify(products));
  }

  if (url.parse(request.url).query) {
    const products = JSON.stringify(findFewProducts(request));

    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(`{
        status: 'success',
        products: ${products}
      }`);
  }

  const id = request.url.slice(10);

  if (request.url === `/products/${id}` && request.method === 'GET') {
    const product = JSON.stringify(products.filter(el => el.id === id * 1));

    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(`{
        status: 'success',
        products: ${product}
      }`);
  }

  response.end('Something wrong');
};

module.exports = productController;
