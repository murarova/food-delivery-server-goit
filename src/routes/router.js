const productRoute = require("./productRoute/productRoute");
const mainRoute = require("./mainRoute/mainRoute");
const signUpRoute = require("./signUpRoute/signUpRoute");

const router = {
	"/products": productRoute,
	"/signup": signUpRoute,
	default: mainRoute
};

module.exports = router;
