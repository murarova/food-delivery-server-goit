const products = require("../../db/products/products.json");

const productRoute = (request, response) => {
	if (request.method === "GET") {
		response.writeHead(200, { "Content-Type": "application/json" });
		response.end(JSON.stringify(products));
	}
	response.end("Wrong method");
};

module.exports = productRoute;
