import http from "node:http";
import type { CF5KIT_APP } from "../types/APP";
import { compilePage } from "./compilePage";

export const startServer = (app: CF5KIT_APP) => {
	const routes = app.pages;

	const server = http.createServer((req, res) => {
		if (!req.url) {
			return;
		}
		if (!routes[req.url]) {
			res.statusCode = 404;
			return res.end("Page not found.");
		}
		// now compile the page down to html
		res.statusCode = 200;
		res.end(compilePage(routes[req.url]));
	});

	server.listen(app.config.port);
	console.log(`Server running on port ${app.config.port}`);
};
