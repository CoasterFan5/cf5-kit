import { CF5KIT_APP } from "./types/APP";
import http from "http";




export class CF5KIT {
    constructor(APP: CF5KIT_APP){

    }

    dev(){
        const server = http.createServer((req, res) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Hello World\n');
        });

        server.listen(3000);
    }
}