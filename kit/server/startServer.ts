import http from "http";
import { CF5KIT_APP } from "../types/APP";


export const startServer = (app: CF5KIT_APP) => {

    const routes = app.pages;

    const server = http.createServer((req, res) => {
        if(!req.url) {
            return
        }
        if(!routes[req.url]) {
            res.statusCode = 404
            return res.end("Page not found.")
        }
        // now compile the page down to html
    });
    
    
    server.listen(app.config.port);
    console.log(`Server running on port ${app.config.port}`);
}