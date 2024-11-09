import type { CF5KIT_STYLES } from "../types/styles";

export const buildStyles = (styles: CF5KIT_STYLES) => {
	let styleString = "";
	for (const [key, value] of Object.entries(styles)) {
		styleString += `${key}: ${value};`;
	}
	return styleString;
};
