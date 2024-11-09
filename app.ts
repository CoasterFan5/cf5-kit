import { config } from "process";
import { CF5KIT } from "./kit/CF5KIT";

export const app = new CF5KIT({
    pages: {
        "/": {
            elements: [
                {
                    type: "div",
                    styles: [],
                    events: {},
                    children: [
                        {
                            type: "div",
                            styles: [],
                            events: [],
                            children: []
                        },
                        {
                            type: "div",
                            styles: [],
                            events: [],
                            children: []
                        },
                        {
                            type: "p",
                            styles: [],
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