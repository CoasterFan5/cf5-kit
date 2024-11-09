import { CF5KIT } from "./_kit/CF5KIT";

export const app = new CF5KIT({
	pages: {
		"/": {
			elements: [
				{
					type: "div",
					styles: {
						"font-family": "Verdana",
                        height: "100vh",
                        width: "100%",
                        display: "flex",
                        "flex-direction": "column",
                        "align-items": "center",
                        "justify-content": "start"
					},
					events: {},
					children: [
						{
                            type: "div",
                            styles: {
                                "font-size": "2rem",
                                "background-color": "rgba(0, 0, 0, 0.5)",
                                "backdrop-filter": "blur(10px)",
                                "color": "white",
                                "width": "100%",
                                "height": "5rem",
                                "display": "flex",
                                "flex-direction": "column",
                                "align-items": "center",
                                "justify-content": "center"
                            },
                            events: [],
                            children: []
                        }
					],
				},
			],
		},
	},
	config: {
		port: 3000,
	},
});
