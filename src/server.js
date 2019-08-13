const http = require("http");
const router = require("./routes/router");

const port = "8080";

const requestHendler = (request, response) => {
	const url = request.url;

	switch (url) {
		case "/products":
			router["/products"](request, response);
			break;
		case "/signup":
			router["/signup"](request, response);
			break;
		default:
			router.default(request, response);
	}
};

const server = http.createServer().listen(port);
server.on("request", requestHendler);

module.exports = server;
