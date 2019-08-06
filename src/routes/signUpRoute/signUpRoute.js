// const querystring = require("querystring");

const fs = require("fs");
const path = require("path");

const signUpRoute = (request, response) => {
	if (request.method === "POST") {
		let body = "";
		request.on("data", function(data) {
			body += data;
		});

		request.on("end", function() {
			const post = JSON.parse(body);

			const pathUsers = path.resolve("src/db/users/");

			fs.appendFile(
				`${pathUsers}/${post.username}.json`,
				JSON.stringify(post),
				function(err) {
					if (err) throw err;
					console.log("Saved!");
				}
			);
		});
	}
};

module.exports = signUpRoute;
