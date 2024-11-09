import { config } from "process";
import { CF5KIT } from "./_kit/CF5KIT";

export const app = new CF5KIT({
    pages: {
        "/": {
            elements: [
                {
                    type: "div",
                    styles: {
                        "font-family": "Verdana",
                    },
                    events: {},
                    children: [
                        {
                            type: "p",
                            styles: {
                                color: "blue"
                            },
                            events: [],
                            body: "Hello World!"
                        }
                    ]
                }
            ]
        }
    },
    config: {
        port: 3000
    }
}
);