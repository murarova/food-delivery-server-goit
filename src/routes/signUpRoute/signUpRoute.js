// const querystring = require("querystring");

const fs = require("fs");
const path = require("path");
const util = require("util");

const signUpRoute = (request, response) => {
	if (request.method === "POST") {
		let body = "";
		const appendFile = util.promisify(fs.appendFile);

		request.on("data", function(data) {
			body += data;
		});

		request.on("end", function() {
			const post = JSON.parse(body);
			const pathUsers = path.resolve("src/db/users/");

			appendFile(
				`${pathUsers}/${post.username}.json`,
				JSON.stringify(post),
				function(err) {
					if (err) throw err;
					console.log("Saved!");
				}
			);
			return appendFile(src, post, cb);
		});

		// const sendResponse = () => {
		// 	response.writeHead(200, {
		// 		"Content-Type": "application/json"
		// 	});
		// 	response.write(JSON.stringify(userData));
		// 	response.end();
		// };
	}
};

module.exports = signUpRoute;
