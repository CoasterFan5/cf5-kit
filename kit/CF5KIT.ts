import { startServer } from "./server/startServer";
import { CF5KIT_APP } from "./types/APP";
import http from "http";




export class CF5KIT {

    app: CF5KIT_APP;

    constructor(APP: CF5KIT_APP){
        this.app = APP;
    }

    dev(){
       startServer(this.app);
    }
}